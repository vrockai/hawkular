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

/// <reference path="../../includes.ts"/>
module HawkularComponents {

  export var _module = angular.module('hawkular.components', []);

  export class HkSwitch {

    public link:(scope:any, element:any, attrs:any) => void;
    public replace = 'true';
    public scope = {
      name: '@',
      id: '@',
      hkModel: '=',
      hkDisabled: '=',
      hkChange: '&',
      hkClick: '&'
    };
    public templateUrl = 'plugins/directives/components/html/hk-switch.html';

    constructor() {
      this.link = (scope:any, element:any, attrs:any) => {
        element.removeAttr('name');
        element.removeAttr('id');

        scope.hkOnText = attrs.onText || 'ON';
        scope.hkOffText = attrs.offText || 'OFF';

        element.bind('keydown', function (e) {
          var code = e.keyCode || e.which;
          if (code === 32 || code === 13) {
            e.stopImmediatePropagation();
            e.preventDefault();
            $(e.target).find('input').click();
          }
        });
      };
    }

    public static Factory() {
      var directive = () => {
        return new HkSwitch();
      };

      directive['$inject'] = [];

      return directive;
    }
  }

  _module.directive('hkSwitch', HawkularComponents.HkSwitch.Factory());

  export class HkTimeInput {

    public link:(scope:any, attrs:any, element:any) => void;
    public replace = 'true';
    public scope = {
      id: '@',
      hkDuration: '=',
      hkDisabled: '=',
      hkAutoConvert: '='
    };
    public templateUrl = 'plugins/directives/components/html/time-input.html';

    constructor(private hkTimeUnit:any) {
      this.link = (scope:any, element:any, attrs:any) => {
        element.removeAttr('id');

        var durationBackup = scope.hkDuration || 0;

        scope.timeUnits = hkTimeUnit.timeUnits;
        scope.timeUnitsDict = hkTimeUnit.timeUnitDictionary;

        scope.durationChange = ():void => {
          if (scope.hkAutoConvert) {
            scope.hkDuration = scope.hkConvertedDuration * scope.responseUnit;
          }
        };

        scope.computeTimeInUnits = ():void => {
          scope.hkConvertedDuration = scope.hkDuration / scope.responseUnit;
        };

        scope.$watch('hkDuration', (newDuration, oldDuration) => {
          scope.durationEnabled = scope.hkDuration !== 0;
          scope.responseUnit = hkTimeUnit.getFittestTimeUnit(scope.hkDuration);
          scope.computeTimeInUnits();
        });
      };
    }

    public static Factory() {
      var directive = (hkTimeUnit:any) => {
        return new HkTimeInput(hkTimeUnit);
      };

      directive['$inject'] = ['hkTimeUnit'];

      return directive;
    }
  }

  _module.directive('hkTimeInput', HawkularComponents.HkTimeInput.Factory());
}
