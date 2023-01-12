import angular from 'angular';
import './components/home.component';

angular.module('angular-app')
  .config(['$stateProvider', '$locationProvider', ($stateProvider, $locationProvider) => {
    $locationProvider.html5Mode({
      enabled: true,
      requireBase: false,
    });

    $stateProvider.state('home', {
      url: '/angularjsDemo',
      template: '<home-component />',
    });
  }]);