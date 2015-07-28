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
/// <reference path="../../includes.ts"/>

module HawkularMetrics {

  export enum AlertType {
    AVAILABILITY,
    THRESHOLD,
  }

  export interface IHawkularAlertsManager {
    addEmailAction(email: EmailType): ng.IPromise<void>;
    createAction(email: EmailType): ng.IPromise<void>;
    updateTrigger(triggerId: TriggerId, data: any): ng.IPromise<void>;
    createTrigger(triggerId: TriggerId, triggerName: string, enabled: boolean, conditionType: string,
                  email: EmailType): ng.IPromise<void>;

    createJvmHeapTrigger(triggerId: TriggerId, triggerName: string, enabled: boolean, conditionType: string,
                  email: EmailType): any;
    createJvmNonHeapTrigger(triggerId: TriggerId, triggerName: string, enabled: boolean, conditionType: string,
                  email: EmailType): any;
    createJvmGarbageTrigger(triggerId: TriggerId, triggerName: string, enabled: boolean, conditionType: string,
                  email: EmailType): any;

    deleteTrigger(triggerId: TriggerId): ng.IPromise<void>;
    createCondition(triggerId: TriggerId, condition: any): ng.IPromise<void>;
    updateCondition(triggerId: TriggerId, conditionId: ConditionId, condition: any): ng.IPromise<void>;
    deleteCondition(triggerId: TriggerId, conditionId: ConditionId): ng.IPromise<void>;
    createDampening(triggerId: TriggerId, duration: number, triggerMode?: string): ng.IPromise<void>;
    updateDampening(triggerId: TriggerId, dampeningId: DampeningId, dampening: any): ng.IPromise<void>;
    getAction(email: EmailType): ng.IPromise<void>;
    getActions(triggerId: TriggerId): ng.IPromise<void>;
    getTrigger(triggerId: TriggerId): any;
    setEmail(triggerId: TriggerId, email: EmailType): ng.IPromise<void>;
    setResponseTime(triggerId: TriggerId, treshold: number, duration: number, enabled: boolean): ng.IPromise<void>;
    setDowntime(triggerId: TriggerId, duration: number, enabled: boolean): ng.IPromise<void>;
    queryConsoleAlerts(metricId: MetricId, startTime?:TimestampInMillis, endTime?:TimestampInMillis, type?:AlertType,
                       currentPage?:number, perPage?:number): any;
    queryAlerts(metricId: MetricId, startTime?:TimestampInMillis,
                endTime?:TimestampInMillis, alertType?:AlertType,
                currentPage?:number, perPage?:number): any
  }

  export class HawkularAlertsManager implements IHawkularAlertsManager{

    public static $inject = ['HawkularAlert', '$q', '$log', '$moment','NotificationService'];

    constructor(private HawkularAlert: any,
                private $q: ng.IQService,
                private $log: ng.ILogService,
                private $moment: any,
                private NotificationService:INotificationService) {
    }

    public createTrigger(id: TriggerId, triggerName: string, enabled: boolean,
                         conditionType: string, email: EmailType): ng.IPromise<void> {
      // Create a trigger
      var triggerId: TriggerId;
      var DEFAULT_RESOLVE_THRESHOLD = 1000;
      var DEFAULT_DAMPENING_INTERVAL = 7 * 60000;
      var DEFAULT_AUTORESOLVE_INTERVAL = 5 * 60000;

      return this.HawkularAlert.Trigger.save({
        name: triggerName,
        id: id,
        description: 'Created on ' + Date(),
        firingMatch: 'ALL',
        autoResolveMatch: 'ALL',
        enabled: enabled,
        autoResolve: true,
        actions: {email: [email]}
      }).$promise.then((trigger)=> {

          triggerId = trigger.id;

          // Parse metrics id from the trigger name
          var dataId: string = trigger.id.slice(0,-14) + '.status.duration';

          // Create a conditions for that trigger
          if (conditionType === 'THRESHOLD') {
            return this.createCondition(triggerId, {
              type: conditionType,
              triggerId: triggerId,
              threshold: DEFAULT_RESOLVE_THRESHOLD,
              dataId: dataId,
              operator: 'GT'
            }).then(()=> {
              return this.createCondition(triggerId, {
                type: conditionType,
                triggerId: triggerId,
                triggerMode: 'AUTORESOLVE',
                threshold: DEFAULT_RESOLVE_THRESHOLD,
                dataId: dataId,
                operator: 'LT'
              });
            });
          } else if (conditionType === 'AVAILABILITY') {
            return this.createCondition(triggerId, {
              type: conditionType,
              triggerId: triggerId,
              dataId: trigger.id.slice(0,-14),
              operator: 'DOWN'
            }).then(()=> {
              return this.createCondition(triggerId, {
                type: conditionType,
                triggerId: triggerId,
                triggerMode: 'AUTORESOLVE',
                dataId: trigger.id.slice(0,-14),
                operator: 'UP'
              });
            });
          }
        }).then(() => {
          // Create dampening for that trigger
          return this.createDampening(triggerId, DEFAULT_DAMPENING_INTERVAL);
        }).then(() => {
          return this.createDampening(triggerId, DEFAULT_AUTORESOLVE_INTERVAL, 'AUTORESOLVE');
        });
    }

    public createJvmHeapTrigger(id: TriggerId, triggerName: string, enabled: boolean,
                                conditionType: string, email: EmailType): ng.IPromise<void> {
      // Create a trigger
      var triggerId: TriggerId;
      var DEFAULT_DAMPENING_INTERVAL = 7 * 60000;

      return this.HawkularAlert.Trigger.save({
        name: triggerName,
        id: id,
        description: 'Created on ' + Date(),
        firingMatch: 'ANY',
        enabled: enabled,
        autoResolve: false,
        autoResolveAlerts: false,
        actions: { email: [email] }
      }).$promise.then((trigger)=> {

          triggerId = trigger.id;

          // Parse metrics id from the trigger name
          var resourceId: string = triggerId.slice(0,-10);
          var dataId: string = 'MI~R~[' + resourceId + '~/]~MT~WildFly Memory Metrics~Heap Used';

          // Create a conditions for that trigger
          return this.createCondition(triggerId, {
            type: conditionType,
            triggerId: triggerId,
            threshold: 80,
            dataId: dataId,
            operator: 'GT'
          }).then(()=> {
            return this.createCondition(triggerId, {
              type: conditionType,
              triggerId: triggerId,
              threshold: 20,
              dataId: dataId,
              operator: 'LT'
            });
          });
        }).then(() => {
          // Create dampening for that trigger
          return this.createDampening(triggerId, DEFAULT_DAMPENING_INTERVAL);
        });
    }

    public createJvmNonHeapTrigger(id: TriggerId, triggerName: string, enabled: boolean,
                                conditionType: string, email: EmailType): ng.IPromise<void> {
      return this.$q.when('createJvmNonHeapTrigger').then(() => {
        this.$log.debug('createJvmNonHeapTrigger');
      });
    }

    public createJvmGarbageTrigger(id: TriggerId, triggerName: string, enabled: boolean,
                                conditionType: string, email: EmailType): ng.IPromise<void> {
      return this.$q.when('createJvmGarbageTrigger').then(() => {
        this.$log.debug('createJvmGarbageTrigger');
      });
    }

    public deleteTrigger(triggerId: TriggerId): ng.IPromise<void> {
      return this.HawkularAlert.Trigger.delete({triggerId: triggerId}).$promise;
    }

    public updateTrigger(triggerId: TriggerId, data: any): ng.IPromise<void> {
      data.id = triggerId;
      return this.HawkularAlert.Trigger.put({triggerId: triggerId}, data).$promise;
    }

    public getAction(email: EmailType): ng.IPromise<void> {
      return this.HawkularAlert.Action.get({
        pluginId: 'email',
        actionId: email
      }).$promise;
    }

    public createAction(email: EmailType): ng.IPromise<void> {
      return this.HawkularAlert.Action.save({
        actionPlugin: 'email',
        actionId: email,
        description: 'Created on ' + Date(),
        to: email
      }).$promise;
    }

    public addEmailAction(email: EmailType): ng.IPromise<void> {
      return this.getAction(email).then((promiseValue: any) => {
        return promiseValue;
      }, (reason: any) => {
        // Create a default email action
        if (reason.status === 404) {
          this.$log.debug('Action does not exist, creating one');
          return this.createAction(email);
        }
      });
    }

    public updateAction(email: EmailType): ng.IPromise<void> {
      return this.HawkularAlert.Action.put({
        actionPlugin: 'email',
        actionId: email,
        description: 'Created on ' + Date(),
        to: email
      }).$promise;
    }

    public createCondition(triggerId: TriggerId, condition: any): ng.IPromise<void> {
      return this.HawkularAlert.Condition.save({triggerId: triggerId}, condition).$promise;
    }

    public updateCondition(triggerId: TriggerId, conditionId: ConditionId, condition: any): ng.IPromise<void> {
      return this.HawkularAlert.Condition.put({triggerId: triggerId, conditionId: conditionId}, condition).$promise;
    }

    public deleteCondition(triggerId: TriggerId, conditionId: ConditionId): ng.IPromise<void> {
      return this.HawkularAlert.Condition.delete({triggerId: triggerId, conditionId: conditionId}).$promise;
    }

    public createDampening(triggerId: TriggerId, duration: number, triggerMode?: string): ng.IPromise<void> {
      return this.HawkularAlert.Dampening.save({ triggerId: triggerId }, {
        triggerId: triggerId,
        evalTimeSetting: duration,
        triggerMode: triggerMode || 'FIRING',
        type: 'STRICT_TIME'
      }).$promise;
    }

    public updateDampening(triggerId: TriggerId, dampeningId: DampeningId, dampening: any): ng.IPromise<void> {
      dampening.dampeningId = dampeningId;
      return this.HawkularAlert.Dampening.put({ triggerId: triggerId, dampeningId: dampeningId }, dampening).$promise;
    }

    public getActions(triggerId:TriggerId): ng.IPromise<void> {
      return undefined;
    }

    public getTrigger(triggerId: TriggerId): ng.IPromise<void> {
      return this.HawkularAlert.Trigger.get({ triggerId: triggerId }).$promise;
    }

    public setEmail(triggerId:TriggerId, email:EmailType):ng.IPromise<void> {
      var actions = this.getActions(triggerId);
      return actions.then((actions)=> {

        if (!actions) {
          // If action for this email does not exist, create one
          return this.HawkularAlert.Action.save({

          }).$promise;

        } else {
          // If it exists, just use it
          return this.HawkularAlert.Action.put({
            actionId: ''
          }, {

          }).$promise;
        }

      });
    }

    public setResponseTime(triggerId:TriggerId, treshold:number, duration:number, enabled:boolean):ng.IPromise<void> {
      return undefined;
    }

    public setDowntime(triggerId:TriggerId, duration:number, enabled:boolean):ng.IPromise<void> {
      return undefined;
    }

    public queryConsoleAlerts(metricId: MetricId, startTime?:TimestampInMillis,
                              endTime?:TimestampInMillis, alertType?:AlertType,
                       currentPage?:number, perPage?:number): any {
      var alertList = [];
      var headers;

      /* Format of Alerts:

       alert: {
       type: 'THRESHOLD' or 'AVAILABILITY'
       avg: Average value based on the evalSets 'values'
       start: The time of the first data ('dataTimestamp') in evalSets
       threshold: The threshold taken from condition.threshold
       end: The time when the alert was sent ('ctime')
       }

       */

      var queryParams = {
        statuses:'OPEN'
      };

      if (currentPage || currentPage === 0) {
        queryParams['page'] = currentPage;
      }

      if (perPage) {
        queryParams['per_page'] = perPage;
      }

      if (alertType === AlertType.AVAILABILITY) {
        queryParams['triggerIds'] = metricId+'_trigger_avail';
      } else if (alertType === AlertType.THRESHOLD) {
        queryParams['triggerIds'] = metricId+'_trigger_thres';
      } else {
        queryParams['triggerIds'] = metricId+'_trigger_avail,' + metricId+'_trigger_thres';
      }

      if (startTime) {
        queryParams['startTime'] = startTime;
      }

      if (endTime) {
        queryParams['endTime'] = endTime;
      }

      return this.HawkularAlert.Alert.query(queryParams, (serverAlerts: any, getHeaders: any) => {

        headers = getHeaders();
        var momentNow = this.$moment();

        for (var i = 0; i < serverAlerts.length; i++) {
          var consoleAlert: any = {};
          var serverAlert = serverAlerts[i];

          consoleAlert.id = serverAlert.alertId;
          consoleAlert.end = serverAlert.ctime;

          var sum: number = 0.0;
          var count: number = 0.0;

          for (var j = 0; j < serverAlert.evalSets.length; j++) {
            var evalItem = serverAlert.evalSets[j][0];

            if (!consoleAlert.start && evalItem.dataTimestamp) {
              consoleAlert.start = evalItem.dataTimestamp;
            }

            if (!consoleAlert.threshold && evalItem.condition.threshold) {
              consoleAlert.threshold = evalItem.condition.threshold;
            }

            if (!consoleAlert.type && evalItem.condition.type) {
              consoleAlert.type = evalItem.condition.type;
            }

            var momentAlert = this.$moment(consoleAlert.end);

            if (momentAlert.year() === momentNow.year()) {
              consoleAlert.isThisYear = true;
              if (momentAlert.dayOfYear() === momentNow.dayOfYear()) {
                consoleAlert.isToday = true;
              }
            }

            sum += evalItem.value;
            count++;
          }

          consoleAlert.avg = sum/count;

          consoleAlert.durationTime = consoleAlert.end - consoleAlert.start;

          alertList.push(consoleAlert);
        }
      }, (error) => {
        this.$log.debug('querying data error', error);
      }).$promise.then(()=> {
        return {
          alertList: alertList,
          headers: headers
        };
      });
    }


    public queryAlerts(metricId: MetricId, startTime?:TimestampInMillis,
                              endTime?:TimestampInMillis, alertType?:AlertType,
                              currentPage?:number, perPage?:number): any {
      var alertList = [];
      var headers;

      /* Format of Alerts:

       alert: {
       type: 'THRESHOLD' or 'AVAILABILITY'
       avg: Average value based on the evalSets 'values'
       start: The time of the first data ('dataTimestamp') in evalSets
       threshold: The threshold taken from condition.threshold
       end: The time when the alert was sent ('ctime')
       }

       */

      var queryParams = {
        statuses:'OPEN'
      };

      if (currentPage || currentPage === 0) {
        queryParams['page'] = currentPage;
      }

      if (perPage) {
        queryParams['per_page'] = perPage;
      }

      queryParams['triggerIds'] = metricId;

      if (startTime) {
        queryParams['startTime'] = startTime;
      }

      if (endTime) {
        queryParams['endTime'] = endTime;
      }

      return this.HawkularAlert.Alert.query(queryParams, (serverAlerts: any, getHeaders: any) => {

        headers = getHeaders();
        var momentNow = this.$moment();

        for (var i = 0; i < serverAlerts.length; i++) {
          var consoleAlert: any = {};
          var serverAlert = serverAlerts[i];

          consoleAlert.id = serverAlert.alertId;
          consoleAlert.end = serverAlert.ctime;

          var sum: number = 0.0;
          var count: number = 0.0;

          for (var j = 0; j < serverAlert.evalSets.length; j++) {
            var evalItem = serverAlert.evalSets[j][0];

            if (!consoleAlert.start && evalItem.dataTimestamp) {
              consoleAlert.start = evalItem.dataTimestamp;
            }

            if (!consoleAlert.threshold && evalItem.condition.threshold) {
              consoleAlert.threshold = evalItem.condition.threshold;
            }

            if (!consoleAlert.type && evalItem.condition.type) {
              consoleAlert.type = evalItem.condition.type;
            }

            var momentAlert = this.$moment(consoleAlert.end);

            if (momentAlert.year() === momentNow.year()) {
              consoleAlert.isThisYear = true;
              if (momentAlert.dayOfYear() === momentNow.dayOfYear()) {
                consoleAlert.isToday = true;
              }
            }

            sum += evalItem.value;
            count++;
          }

          consoleAlert.avg = sum/count;

          consoleAlert.durationTime = consoleAlert.end - consoleAlert.start;

          alertList.push(consoleAlert);
        }
      }, (error) => {
        this.$log.debug('querying data error', error);
      }).$promise.then(()=> {
          return {
            alertList: alertList,
            headers: headers
          };
        });
    }


  }

  _module.service('HawkularAlertsManager', HawkularAlertsManager);
}
