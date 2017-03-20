




(function() {
  'use strict';

  angular
    .module(appObj.id)
    .config(cartConfig);


  //////////////////////////  Router configuration /////////////////////////////////

  cartConfig.$inject = ['$stateProvider', '$urlRouterProvider'];

  function cartConfig($stateProvider, $urlRouterProvider) {



    //
    // Default landing page (For any unmatched url)
    $urlRouterProvider.otherwise("/home");

    $stateProvider
      .state('home', {
        url: "/home",
        templateUrl: "dashboard/dash.html",


      }).state('home.page1',{
        url:"/page1",
        templateUrl:"dashboard/page1.html"
      })
      .state('home.page2',{
        url:"/page2",
        templateUrl:"dashboard/page2.html"
      }).state('home.page3',{
        url:"/page3",
        templateUrl:"dashboard/page3.html"
      }).state('home.page4',{
        url:"/page4",
        templateUrl:"dashboard/page4.html"
      })





    console.log("CARTAPP.route.config: Completed");
  }

  ////////////////END OF  Router configuration /////////////////////////////////

})();
