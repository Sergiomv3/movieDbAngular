/**
 * Created by smartivi on 16/03/2016.
 */
angular.module("MovieDbApp").controller("SeriesController",
    ["$scope","$http", function($scope,$http){
        $scope.error = false;
        $scope.series = [];
        $scope.loading = true;
        // recuperamos del servidor la lista de peliculas
        // mediante HTTP, inyectando como dependencia, crearemos un http falso
        $http.get("/api/series/").then(function(data){
            console.log("Resultado de GET: ",data);
            $scope.series = data.data;
            $scope.loading = false;
        }, function(err){
            console.log("Error while downloading data");
            $scope.loading = false;
            $scope.error = true;
        }); // devuelve una promesa  (.then)
    }]
);