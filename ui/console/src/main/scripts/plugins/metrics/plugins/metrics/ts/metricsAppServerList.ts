///
/// Copyright 2015 Red Hat, Inc. and/or its affiliates
/// and other contributors as indicated by the @author tags.
///
/// Licensed under the Apache License, Version 2.0 (the "License");
/// you may not use this file except in compliance with the License.
/// You may obtain a copy of the License at
///
///    http://www.apache.org/licenses/LICENSE-2.0
///
/// Unless required by applicable law or agreed to in writing, software
/// distributed under the License is distributed on an "AS IS" BASIS,
/// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
/// See the License for the specific language governing permissions and
/// limitations under the License.
///

/// <reference path="metricsPlugin.ts"/>
/// <reference path="alertsManager.ts"/>
/// <reference path="errorManager.ts"/>

module HawkularMetrics {

  export class AppServerListController {
    /// this is for minification purposes
    public static $inject = ['$location', '$scope', '$rootScope', '$interval', '$log', '$filter', '$modal', 'HawkularInventory', 'HawkularMetric', 'HawkularAlert', 'HawkularAlertsManager', 'HawkularErrorManager', '$q', 'md5', 'HkHeaderParser'];

    private httpUriPart = 'http://';
    public addProgress: boolean = false;
    private resourceList;
    public alertList;
    private resPerPage = 5;
    private resCurPage = 0;
    private autoRefreshPromise: ng.IPromise<number>;
    public headerLinks = {};

    constructor(private $location: ng.ILocationService,
                private $scope: any,
                private $rootScope: any,
                private $interval: ng.IIntervalService,
                private $log: ng.ILogService,
                private $filter: ng.IFilterService,
                private $modal: any,
                private HawkularInventory: any,
                private HawkularMetric: any,
                private HawkularAlert: any,
                private HawkularAlertsManager: HawkularMetrics.IHawkularAlertsManager,
                private HawkularErrorManager: HawkularMetrics.IHawkularErrorManager,
                private $q: ng.IQService,
                private md5: any,
                private HkHeaderParser: HawkularMetrics.IHkHeaderParser,
                public startTimeStamp:TimestampInMillis,
                public endTimeStamp:TimestampInMillis,
                public resourceUrl: string) {
      $scope.vm = this;

      if ($rootScope.currentPersona) {
        this.getResourceList(this.$rootScope.currentPersona.id);
      } else {
        // currentPersona hasn't been injected to the rootScope yet, wait for it..
        $rootScope.$watch('currentPersona', (currentPersona) => currentPersona && this.getResourceList(currentPersona.id));
      }

      this.autoRefresh(20);
    }

    public setPage(page): void {
      this.resCurPage = page;
      this.getResourceList();
    }

    cancelAutoRefresh(): void {
      this.$interval.cancel(this.autoRefreshPromise);
      toastr.info('Canceling Auto Refresh');
    }

    autoRefresh(intervalInSeconds: number): void {
      this.autoRefreshPromise = this.$interval(() => {
        this.getResourceList();
      }, intervalInSeconds * 1000);

      this.$scope.$on('$destroy', () => {
        this.$interval.cancel(this.autoRefreshPromise);
      });
    }

    getResourceList(currentTenantId?: TenantId):any {
      var tenantId:TenantId = currentTenantId || this.$rootScope.currentPersona.id;
      this.HawkularInventory.ResourceOfType.query({tenantId: tenantId, resourceTypeId: 'WildFly Server', per_page: this.resPerPage, page: this.resCurPage}, (aResourceList, getResponseHeaders) => {
        this.headerLinks = this.HkHeaderParser.parse(getResponseHeaders());
        var promises = [];
        angular.forEach(aResourceList, function(res, idx) {
          promises.push(this.HawkularMetric.AvailabilityMetricData.query({
            tenantId: tenantId,
            availabilityId: 'AI~R~' + res.id + '~AT~App Server',
            distinct: true}, (resource) => {
              var latestData = resource[resource.length-1];
              if (latestData) {
                res['state'] = latestData['value'];
                res['updateTimestamp'] = latestData['timestamp'];
              }
          }).$promise);
          this.lastUpdateTimestamp = new Date();
        }, this);
        this.$q.all(promises).then((result) => {
          this.resourceList = aResourceList;
        });
      });
    }

    getResourceListFake(currentTenantId?: TenantId): any {
      this.resourceList = [
        {
          tenant: 'test', environment: 'test', feed: null, id: 'f5087d5d26aeff90cc92c738a10d8bba',
          properties: { name: 'Eavy Machine', url: 'eavy.corp.redhat.com' },
          type: { tenant: 'test', id: 'EAP', version: '1.0', properties: {} },
          state: 'down',
          alerts: ['SLOW'],
          tags: ['Production']
        },
        {
          tenant: 'test', environment: 'test', feed: null, id: '5c4785a7a304d32e5f404242666895f5',
          properties: { name: 'Tori Machine', url: 'tori.corp.redhat.com' },
          type: { tenant: 'test', id: 'Tomcat', version: '1.0', properties: {} },
          state: 'up',
          alerts: [],
          tags: ['Development']
        },
        {
          tenant: 'test', environment: 'test', feed: null, id: '21193e7941642baa1285cd7edd8af62e',
          properties: { name: 'Wiko Machine', url: 'wiko.corp.redhat.com' },
          type: { tenant: 'test', id: 'Wildfly', version: '1.0', properties: {} },
          state: 'starting',
          alerts: ['DOWN'],
          tags: []
        },
        {
          tenant: 'test', environment: 'test', feed: null, id: '20a0e9f5d777a16ad40928dd3ba1bef9',
          properties: { name: 'Tomy Machine', url: 'tomy.corp.redhat.com' },
          type: { tenant: 'test', id: 'Tomcat', version: '1.0', properties: {} },
          state: 'restart required',
          alerts: [],
          tags: ['QE']
        }
      ];
    }

  }

  _module.controller('HawkularMetrics.AppServerListController', AppServerListController);

}
