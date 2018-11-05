'use strict';

angular.module('palacePharmacy', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
        
            // route for the home page
            .state('app', {
                url: '/',
                views: {
                    'content': {
                        templateUrl : 'assets/views/home.html',
                        controller  : 'homeCtrl'
                    },
                }

            })
        
            // route for the team page
            .state('app.team', {
                url:'team',
                views: {
                    'content@': {
                        templateUrl : 'assets/views/team.html',
                        controller  : 'teamCtrl'                  
                    }
                }
            })
        
            // route for the contactus page
            .state('app.contact', {
                url:'contact',
                views: {
                    'content@': {
                        templateUrl : 'assets/views/contact.html',
                        controller  : 'contactCtrl'                  
                    }
                }
            })

            // route for the menu page
            .state('app.menu', {
                url: 'menu',
                views: {
                    'content@': {
                        templateUrl : 'assets/views/menu.html',
                        controller  : 'MenuController'
                    }
                }
            })

            // route for the dishdetail page
            .state('app.dishdetails', {
                url: 'menu/:id',
                views: {
                    'content@': {
                        templateUrl : 'views/dishdetail.html',
                        controller  : 'DishDetailController'
                   }
                }
            });
    
        $urlRouterProvider.otherwise('/');
    })
;
