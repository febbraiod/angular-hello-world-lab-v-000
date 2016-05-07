function MainController($scope) {
  $scope.name = 'debbie';
  $scope.email = 'db@doanything.com';
  $scope.phone = '18005556666';
}

angular
  .module("app")
  .controller("MainController", MainController);
