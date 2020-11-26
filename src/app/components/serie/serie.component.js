import template from './serie.html';
import controller from './serie.controller';
import './serie.scss';

let serieComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default serieComponent;
