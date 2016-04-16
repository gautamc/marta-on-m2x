'use strict';

angular.module('marta-on-m2x', ['ngRoute', 'ui.bootstrap']).config(
  function($routeProvider){

    $routeProvider
      .when('/', {
        controller: 'HomeCtrl',
        templateUrl: 'partials/home.html'
      })
      .otherwise({
        redirectTo: '/'
      });

  }
).run(function($rootScope){
});