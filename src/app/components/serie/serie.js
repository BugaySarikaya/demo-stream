import angular from 'angular';
import uiRouter from 'angular-ui-router';
import serieComponent from './serie.component';

let serieModule = angular.module('serie', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('serie', {
        url: '/serie',
        component: 'serie'
      });
  })
  .component('serie', serieComponent)
  .name;

export default serieModule;
