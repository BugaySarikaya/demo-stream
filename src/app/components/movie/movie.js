import angular from 'angular';
import uiRouter from 'angular-ui-router';
import movieComponent from './movie.component';

let movieModule = angular.module('movie', [
  uiRouter
])
  .config(($stateProvider) => {
    "ngInject";

    $stateProvider
      .state('movie', {
        url: '/movie',
        component: 'movie'
      });
  })
  .component('movie', movieComponent)
  .name;

export default movieModule;
