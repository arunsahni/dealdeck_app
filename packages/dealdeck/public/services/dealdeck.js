'use strict';


/*angular.module('mean.dealdeck').factory('Dealdeck', [
    function() {
        return {
            name: 'dealdeck'
        };
    }
]);*/

angular.module('mean.dealdeck')
    .factory('Dealdeck', ['$http', function($http) {

        var urlBase = '/';
        var dataFactory = {};

        dataFactory.saveDeal = function (myArray) {
            //console.log('getDeal() in service:'+points);
            //console.log("inside Service deal");
            return $http({
                url: '/dealdeck/example/savedeal',
                method: "POST",
                data: {myArray: myArray}
            });
            //return $http.get('/dealdeck/example/anyone');
        };


        dataFactory.listDeal = function(){
            console.log('listDeal() in service:');
            return $http({
                url: '/dealdeck/example/listDeal',
                method: "GET"

            });

        };

        dataFactory.getOnedeal = function(id){
            console.log('getOnedeal() in service:');
            return $http({
                url: '/dealdeck/example/detailsDeal',
                method: "POST",
                data : {cardid : id}
            });

        };

        return dataFactory;
    }]);