export default class SerieController {
  /*@ngInject;*/
  constructor(EntryService, $scope) {
    let vm = this;
    vm._$scope = $scope;

    vm.subTitle = 'Popular Series';
    vm.loading = false;
    vm.error;

    vm.serieList = [];
    vm.serieFilter = {
      entryCount: 21,
      releaseYear: 2010,
      programType: 'series',
      orderProperty: 'title'
    }

    activate();

    function activate() {
      vm.loading = true;
      EntryService.getEntries().then(res => {
        let entriesList = res.data;
        vm.serieList = EntryService.filterEntries(entriesList, vm.serieFilter);
        vm.loading = false;
        vm._$scope.$apply();
      })
        .catch(err => {
          vm.error = err.message;
          vm.loading = false;
          vm._$scope.$apply();
        });
    }
  }
}