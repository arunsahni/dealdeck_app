'use strict';

angular.module('mean.dealdeck').config(['$stateProvider',
    function($stateProvider) {
        $stateProvider.state('dealdeck example page', {
            url: '/dealdeck/example',
            templateUrl: 'dealdeck/views/index.html'
        });

        $stateProvider.state('card history page', {
            url: '/dealdeck/exampleList',
            templateUrl: 'dealdeck/views/listCard.html'
        });

        $stateProvider.state('cards by id', {
            url: '/dealdeck/:dealdeckId',
            templateUrl: 'dealdeck/views/detailsCard.html'
        });

    }
]);
