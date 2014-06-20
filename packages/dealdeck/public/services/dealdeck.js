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

        dataFactory.saveDeal = function (req,res) {
            console.log('getDeal() in service:'+req.array);
            //console.log("HTTP:  "+$http);
            return $http.get('/dealdeck/example/anyone');
        };

        return dataFactory;
    }]);