import angular from 'angular';
import uiRouter from 'angular-ui-router';
import Components from './components/components';
import AppComponent from './app.component';

import EntryService from './services/entry.service';

angular.module('app', [
  uiRouter,
  Components,
])
  .config(($locationProvider, $urlRouterProvider) => {
    "ngInject";
    $locationProvider.html5Mode(true).hashPrefix('!');


    $urlRouterProvider.otherwise('/home');
  })

  .component('app', AppComponent)
  .service('EntryService', EntryService);
