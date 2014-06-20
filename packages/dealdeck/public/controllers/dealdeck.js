'use strict';

angular.module('mean.dealdeck').controller('DealdeckController', ['$scope', 'Global', 'Dealdeck',
    function($scope, Global, Dealdeck) {
        $scope.global = Global;


        /*$scope.pankaj = [{
            val:'1',
            css:'mydesign'
        }];

        alert($scope.pankaj[0].val);*/

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

        //alert($scope.allarray);

        /*$scope.allarray = [
            '1','2','3','4','5','6','7','8','9','10','11','12','13',
            '14','15','16','17','18','19','20','21','22','23','24','25','26',
            '27','28','29','30','31','32','33','34','35','36','37','38','39',
            '40','41','42','43','44','45','46','47','48','49','50','51','52'
            *//*'Ac','2c','3c','4c','5c','6c','7c','8c','9c','10c','Jc','Qc','Kc',
            'Ah','2h','3h','4h','5h','6h','7h','8h','9h','10h','Jh','Qh','Kh',
            'Ad','2d','3d','4d','5d','6d','7d','8d','9d','10d','Jd','Qd','Kd'*//*
        ];*/

        //alert($scope.allarray);
        $scope.spades = [];
        $scope.clubs = [];
        $scope.hearts = [];
        $scope.diamonds = [];

        for(var i=0;i < $scope.allarray.length;i++)
        {
            if(i<13)
            {
                //alert($scope.allarray[i]);
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
        //alert($scope.diamonds);
        /*$scope.spades = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
        $scope.clubs = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
        $scope.hearts= ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];
        $scope.diamonds = ['A','1','2','3','4','5','6','7','8','9','10','J','Q','K'];*/
        //alert($scope.speads);

        var calculatePoint = function(allArray)
        {
             $scope.points = 0;
             $scope.percentage = 0;
             //alert("Hello"+allArray);
            for(var i=0;i < $scope.allarray.length;i++)
            {
                //console.log($scope.allarray[i]);
                 if($scope.allarray[i].val == i+1)
                 {
                     //Got two points
                     //alert(i+1+'Macthed in Same Position'+$scope.allarray[i]);
                     $scope.points = $scope.points + 1;
                     //alert($scope.allarray[i].val);
                     $scope.allarray[i].color = 'green';

                 }
                    //alert(i+'-Match-'+$scope.allarray[i]);
                    if(($scope.allarray[i].val == i+1 || $scope.allarray[i].val == i+14 || $scope.allarray[i].val == i+27 || $scope.allarray[i].val == i+40))
                    {
                        //alert('Macthed in different Position'+$scope.allarray[i]);
                        $scope.points = $scope.points + 1;
                        if(!($scope.allarray[i].val == i+1))
                        {
                            $scope.allarray[i].color = 'orange';
                        }
                    }

                $scope.percentage = parseInt(($scope.points / 104 ) * 100) + '%';

            }



            //alert("Points ::::"+points);
            //alert('Cards '+$scope.allarray);
        };

        $scope.deal = function(){

            //alert(req);

            /*var dealdeck = new Dealdeck({
                card : 'Pankaj'
            });*/

            //$scope.spades = shuffle($scope.spades);

            //console.log($scope.allarray);
            $scope.allarray = [];
            for(var ind =1;ind<=52;ind++)
            {
                $scope.allarray.push({val:ind,color : 'white' });
            }
            $scope.allarray = shuffle($scope.allarray);

            $scope.spades = [];
            $scope.clubs = [];
            $scope.hearts = [];
            $scope.diamonds = [];

            for(var i=0;i < $scope.allarray.length;i++)
            {
                if(i<13)
                {
                    //alert($scope.allarray[i]);
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
            //console.log($scope.allarray);
            calculatePoint($scope.allarray);
            //console.log($scope.allarray);

            Dealdeck.saveDeal($scope.allarray,$scope.points,$scope.percentage).success(function(data)
            {
                //alert(data);
            });

        };


























        function shuffle(array) {
            var i = array.length,
                j = 0,
                temp;

            while (i--) {

                j = Math.floor(Math.random() * (i+1));

                // swap randomly chosen element with current element
                temp = array[i];
                array[i] = array[j];
                array[j] = temp;

            }

            return array;
        }


    }
]);
