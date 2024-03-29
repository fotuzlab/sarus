var app = angular.module('two1App', [
  // Dependencies
  'ngRoute',
  'angular-inview',
  'two1App.controllers',
  'two1App.directives',
  'ngSanitize',
  'ngLoadScript'

]).// Route configuration below
config(function ($routeProvider, $locationProvider) {
  //HTML5 mode Required to avoid urls with # anchor tags
  $locationProvider.html5Mode(true);

  // Configuration below required to capture urls with slug and display the specific post.
  $routeProvider.
    when('/:slug', {
      controller: 'PostController'
    }).
    otherwise({
      redirectTo: '/'
    });
});