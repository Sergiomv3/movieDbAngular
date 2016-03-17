/**
 * Created by smartivi on 16/03/2016.
 */
angular.module("MovieDbApp").controller("TitleController",
    ["$scope", function($scope){

        $scope.title = "";

        $scope.$on("changePageTitle",  function(event, data){
           console.log('Evento Recibido: ', event, data);
            $scope.title = data;
        });
    }]
)