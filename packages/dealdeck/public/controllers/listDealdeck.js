'use strict';

angular.module('mean.dealdeck').controller('ListDealdeckController', ['$scope', '$stateParams', 'Global', 'Dealdeck',
    function($scope,$stateParams, Global, Dealdeck) {
        $scope.global = Global;

        //For Card History List
        $scope.cards = [{}];

        // For Card History Details
        $scope.allarray = [];
        $scope.points = 0;
        $scope.percentage = 0;
        $scope.spades = [];
        $scope.clubs = [];
        $scope.hearts = [];
        $scope.diamonds = [];


        if ($stateParams.dealdeckId == undefined) {
            Dealdeck.listDeal().success(function (data) {
                $scope.cards = data;
            });
        }


        $scope.getOnedeal = function(){

            Dealdeck.getOnedeal($stateParams.dealdeckId).success(function(result)
            {
                $scope.points = result.cardArrange.points;
                $scope.percentage = result.cardArrange.percentage;
                $scope.spades = result.spades;
                $scope.clubs = result.clubs;
                $scope.hearts = result.hearts;
                $scope.diamonds = result.diamonds;
            });
        };
    }
]);
