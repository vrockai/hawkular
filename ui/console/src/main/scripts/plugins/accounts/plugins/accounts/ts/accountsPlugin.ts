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
/// <reference path="accountsGlobals.ts"/>
module HawkularAccounts {
    export var _module = angular.module(HawkularAccounts.pluginName, ['ui.bootstrap']);
    var accountsTab:any = undefined;
    var currentPersona:any = undefined;

    _module.config(['$locationProvider', '$routeProvider', '$httpProvider', 'HawtioNavBuilderProvider', ($locationProvider, $routeProvider:ng.route.IRouteProvider, $httpProvider:ng.IHttpProvider, builder:HawtioMainNav.BuilderFactory) => {
        accountsTab = builder.create()
            .id(HawkularAccounts.pluginName)
            .title(() => "Accounts")
            .href(() => "/accounts")
            .subPath("My account", "accounts", builder.join(HawkularAccounts.templatePath, 'accounts.html'))
            .subPath("Organizations", "organizations", builder.join(HawkularAccounts.templatePath, 'organizations.html'))
            .build();
        builder.configureRouting($routeProvider, accountsTab);

        $routeProvider.when('/accounts/organizations/new', {templateUrl: builder.join(HawkularAccounts.templatePath, 'organization_new.html')});
        $locationProvider.html5Mode(true);
        $httpProvider.interceptors.push(PersonaInterceptorService.Factory);
    }]);

    _module.run(['$rootScope', '$log', '$modal', '$document', 'userDetails', 'HawtioNav', 'HawkularInventory', ($rootScope, $log, $modal, $document, userDetails, HawtioNav:HawtioMainNav.Registry, hawkularInventory) => {
        //HawtioNav.add(accountsTab);
        $rootScope.userDetails = userDetails;

        $rootScope.$on('IdleStart', () => {
            $('#idle').slideDown();
        });

        $rootScope.$on('IdleEnd', () => {
            $("#idle").slideUp();
        });

        $rootScope.$on('IdleTimeout', () => {
            $log.debug('Idle timeout');
            $document.find('body').eq(0).addClass('inactivity-modal-open');
            $modal.open({
                templateUrl: 'plugins/accounts/html/inactivityModal.html',
                backdrop: 'static'
            });
        });

        var initializeInventory = (tenantId: string) => {

            var addTenant = () => {
                var tenant = {
                    id: tenantId
                };
                return hawkularInventory.Tenant.save(tenant).$promise;
            };

            var addEnvironment = () => {
                // todo: environment is hard-coded here
                var environment = {
                    id: 'test'
                };
                return hawkularInventory.Environment.save({tenantId: tenantId}, environment).$promise;
            };

            var addResourceType = () => {
                var resourceType = {
                    id: 'URL',
                    version: '1.0'
                };
                return hawkularInventory.ResourceType.save({tenantId: tenantId}, resourceType).$promise;
            };

            var addMetricType = (id: string, units: string) => {
                var metricType = {
                    id: id,
                    unit: units
                };
                return hawkularInventory.MetricType.save({tenantId: tenantId}, metricType).$promise;
            };

            var notify = () => $rootScope.$emit("UserInitialized", tenantId);

            var err = (error: any, msg: string): void => {
                toastr.error(msg);
                // todo: use HawkularErrorManager once it is available in shared services
                // this.HawkularErrorManager.errorHandler(error, msg);
            };

            addTenant()
            .then(() => addEnvironment()
                .then(addResourceType)
                .then(addMetricType('status.duration.type', 'MILLI_SECOND'))
                .then(addMetricType('status.code.type', 'NONE'))
                .then(notify)
                .catch((e) => {
                    err(e, 'Error initializing the data for user.');
                    notify();
                })
            ,() => {
                // this is called if the very first call in chain fails 
                // (tenant has been created so we assume the rest is there as well)
                console.log('Inventory has already beed initialized.');
                notify();
            });
        };

        $rootScope.$on('CurrentPersonaLoaded', (e, persona) => {
            currentPersona = persona;
            $rootScope.currentPersona = currentPersona;
            initializeInventory(currentPersona.id);
        });

        $rootScope.$on('SwitchedPersona', (e, persona) => {
            currentPersona = persona;
            $rootScope.currentPersona = currentPersona;
            initializeInventory(currentPersona.id);
        });
    }]);

    hawtioPluginLoader.registerPreBootstrapTask((next) => {
        window['KeycloakConfig'] = "/keycloak.json";
        next();
    }, true);

    class PersonaInterceptorService {
        public static $inject = ['$q'];

        public static Factory($q:ng.IQService) {
            return new PersonaInterceptorService($q);
        }

        constructor(private $q:ng.IQService) {
        }

        request = (request) => {
            if (currentPersona) {
                request.headers['X-Hawkular-Persona'] = currentPersona.id;
            }
            return request;
        };
    }

    hawtioPluginLoader.addModule(HawkularAccounts.pluginName);
}
