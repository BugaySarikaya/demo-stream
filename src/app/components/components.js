import angular from 'angular';
import Home from './home/home';
import Movie from './movie/movie';
import Serie from './serie/serie';

let componentModule = angular.module('app.components', [
  Home,
  Movie,
  Serie
])

  .name;

export default componentModule;
