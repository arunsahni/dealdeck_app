'use strict';

angular.module('mean.assignment').controller('AssignmentController', ['$scope', 'Global', 'Assignment',
    function($scope, Global, Assignment) {
        $scope.global = Global;

        $scope.assignment = [{}];

        //$scope.find = function() {
        Assignment.query(function(assignment) {
            $scope.assignment = assignment;
        });
        // };

        $scope.create = function() {
            var assignment = new Assignment({
                note: this.note
            });
            assignment.$save(function(response) {
                $scope.assignment.push(response);
                //$location.path('articles/' +response._id);
            });
            this.note = '';
        };

        $scope.remove = function(assignment) {
            if (assignment) {
                assignment.$remove();

                for (var i in $scope.assignment) {
                    if ($scope.assignment[i] === assignment) {
                        $scope.assignment.splice(i, 1);
                    }
                }
            } else {
                $scope.assignment.$remove(function(response) {
                    $location.path('assignment');
                });
            }
        };



        $scope.package = {
            name: 'assignment'
        };




    }
]);
