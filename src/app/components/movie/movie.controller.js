export default class MovieController {
  /*@ngInject;*/
  constructor(EntryService, $scope) {
    let vm = this;
    vm._$scope = $scope;

    vm.subTitle = 'Popular Movies';
    vm.loading = false;
    vm.error;

    vm.movieList = [];
    vm.movieFilter = {
      entryCount: 21,
      releaseYear: 2010,
      programType: 'movie',
      orderProperty: 'title'
    }

    activate();

    function activate() {
      vm.loading = true;
      EntryService.getEntries().then(res => {
        let entriesList = res.data;
        vm.movieList = EntryService.filterEntries(entriesList, vm.movieFilter);
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