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

        //$scope.deal = function(){
        if ($stateParams.dealdeckId == undefined) {

            Dealdeck.listDeal().success(function (data) {
                //alert("Load");
                $scope.cards = data;
            });
        }
       // };


        $scope.getOnedeal = function(){
        //alert("HI"+$stateParams.dealdeckId);
            Dealdeck.getOnedeal($stateParams.dealdeckId).success(function(data)
            {

                var tempdata = data.card;
                //alert(data.card);
                var myArray = new Array();
                //tempdata = '['+tempdata+']';

                //alert($scope.allarray.split(','));

                myArray = tempdata;//.split(',');


               /* for(var index = 0 ;index < myArray.length; index ++)
                {
                    $scope.allarray.push(myArray[index]);
                }*/
                //alert(data.points);
                $scope.points = data.points;
                $scope.percentage = data.percentage;
               // alert($scope.allarray);

                for(var i=0;i < myArray.length;i++) {
                    if (i < 13) {
                        $scope.spades.push(myArray[i]);
                    }
                    else if (i < 26) {
                        $scope.clubs.push(myArray[i]);
                    }
                    else if (i < 39) {
                        $scope.hearts.push(myArray[i]);
                    }
                    else if (i < 52) {
                        $scope.diamonds.push(myArray[i]);
                    }




                }


                //alert($scope.diamonds);
            });
        };












    }
]);
