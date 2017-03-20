//appObj.id


(function(){

  angular.module(appObj.id).controller('appController',appController);


  appController.$inject=['$scope'];
function appController($scope){
  console.log("ctl");
}

})();
