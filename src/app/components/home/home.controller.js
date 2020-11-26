import placeholder from '../../assets/placeholder.png';
export default class HomeController {
  /*@ngInject;*/
  constructor(EntryService, $scope) {
    let vm = this;
    vm._$scope = $scope;

    vm.placeHolderLink = placeholder;

    vm.subTitle = 'Popular Titles';
    vm.loading = false;
    vm.error;

    vm.entryTypes = {
      hasMovie: false,
      hasSerie: false
    };

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
        for (let i = 0; i < entriesList.length; i++) {
          if (vm.entryTypes.hasMovie && vm.entryTypes.hasSerie) {
            break;
          } else {
            if (entriesList[i].programType === 'movie' && !vm.entryTypes.hasMovie) {
              vm.entryTypes.hasMovie = true;
            }
            if (entriesList[i].programType === 'series' && !vm.entryTypes.hasSerie) {
              vm.entryTypes.hasSerie = true;
            }
          }
        }
        vm.loading = false;
        vm._$scope.$apply();
      })
        .catch(err => {
          vm.error = err.message;
          vm.loading = false;
          vm.entryTypes = { hasMovie: false, hasSerie: false };
          vm._$scope.$apply();
        });
    }
  }
}