import template from './app.html';
import controller from './app.controller';
import './app.scss';

let appComponent = {
  template,
  restrict: 'E',
  controller,
  controllerAs: 'vm',
  bindToController: true
};

export default appComponent;
