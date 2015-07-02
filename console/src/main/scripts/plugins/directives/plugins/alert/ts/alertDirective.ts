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

/// <reference path="alertPlugin.ts"/>
module Alert {

  export class HkAlertPanel {

    public link: (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public replace = 'true';
    public scope = {
      alert: '=hkAlert',
      refresh: '&hkRefresh'
    };
    public templateUrl = 'plugins/alert/html/alert.html';


    constructor(private HawkularAlert) {
      this.link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        scope.alertResolve = (): void => {
          this.HawkularAlert.Alert.resolve({alertIds: scope.alert.id}, {}, () => {
            scope.refresh({hkAlert: scope.alert});
          });
        };
      };
    }

    public static Factory() {
      var directive = (HawkularAlert: any) => {
        return new HkAlertPanel(HawkularAlert);
      };

      directive['$inject'] = ['HawkularAlert'];

      return directive;
    }
  }

  export class HkAlertPanelList {

    public link: (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public replace = 'true';
    public scope = {
      alertList: '=hkAlertList',
      limit: '=hkLimit'
    };
    public templateUrl = 'plugins/alert/html/alertList.html';

    constructor() {
      this.link = (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => {
        scope.alertResolve = (alert): void => {
          for (var i = 0; i< scope.alertList.length; i++) {
            if (scope.alertList[i].id === alert.id) {
              scope.alertList.splice(i, 1);
              break;
            }
          }
        };
      };
    }

    public static Factory() {
      var directive = () => {
        return new HkAlertPanelList();
      };

      directive['$inject'] = [];

      return directive;
    }
  }

  class HkTimeInterval {

    public link: (scope: any, element: ng.IAugmentedJQuery, attrs: ng.IAttributes) => void;
    public replace = 'true';
    public scope = {
      hkTime: '='
    };
    public templateUrl = 'plugins/alert/html/timeInterval.html';

    public static Factory() {
      var directive = () => {
        return new HkTimeInterval();
      };

      directive['$inject'] = [];

      return directive;
    }
  }

  _module.directive('hkAlertPanelList', Alert.HkAlertPanelList.Factory());
  _module.directive('hkAlertPanel', Alert.HkAlertPanel.Factory());
  _module.directive('hkTimeInterval', HkTimeInterval.Factory());
}
