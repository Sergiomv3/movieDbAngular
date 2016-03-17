/**
 * Created by smartivi on 16/03/2016.
 */
angular.module("MovieDbApp").controller("MoviesController",
    ["$scope","$http", function($scope,$http){

        $scope.movies = [];
        $scope.loading = true;
        // recuperamos del servidor la lista de peliculas
        // mediante HTTP, inyectando como dependencia, crearemos un http falso
        $http.get("/api/movies/").then(function(data){
            console.log("Resultado de GET: ",data);
            $scope.movies = data;
            $scope.loading = false;
        }, function(err){
            console.log("Error while downloading data");
            $scope.loading = false;
        }); // devuelve una promesa  (.then)
    }]
);