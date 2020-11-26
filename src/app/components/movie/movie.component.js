import template from './movie.html';
import controller from './movie.controller';
import './movie.scss';

let movieComponent = {
  restrict: 'E',
  bindings: {},
  template,
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default movieComponent;
