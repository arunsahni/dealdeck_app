'use strict';

angular.module('mean.dealdeck').controller('DealdeckController', ['$scope', 'Global', 'Dealdeck',
    function($scope, Global, Dealdeck) {
        $scope.global = Global;
        $scope.points = 0;
        $scope.percentage = 0;

        $scope.package = {
            name: 'Deal Deck'
        };

        $scope.allarray = [];
        for(var ind =1;ind<=52;ind++)
        {
            $scope.allarray.push({val:ind,color : 'white' });
        }
        //UI
        $scope.spades = [];
        $scope.clubs = [];
        $scope.hearts = [];
        $scope.diamonds = [];
        for(var i=0;i < $scope.allarray.length;i++)
        {
            if(i<13)
            {
                $scope.spades.push($scope.allarray[i]);
            }
            else if(i<26)
            {
                $scope.clubs.push($scope.allarray[i]);
            }
            else if(i<39)
            {
                $scope.hearts.push($scope.allarray[i]);
            }
            else if(i<52)
            {
                $scope.diamonds.push($scope.allarray[i]);
            }

        }

        //Call To Service
        $scope.deal = function(){

            Dealdeck.saveDeal($scope.allarray).success(function(result)
            {
                //$scope.allarray = result.cardArrange;
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
