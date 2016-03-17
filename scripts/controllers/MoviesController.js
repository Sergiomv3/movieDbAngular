/**
 * Created by smartivi on 16/03/2016.
 */
angular.module("MovieDbApp").controller("MoviesController",
    ["$scope","$http","MovieDbApiClient", function($scope,$http, MovieDbApiClient){
        $scope.error = false;
        $scope.movies = [];
        $scope.loading = true;
        // recuperamos del servidor la lista de peliculas
        // mediante HTTP, inyectando como dependencia, crearemos un http falso
        MovieDbApiClient.getMovies().then(function(data){
            console.log("Resultado de GET: ",data);
            $scope.movies = data['data'];
            $scope.loading = false;
        }, function(err){
            console.log("Error while downloading data");
            $scope.loading = false;
            $scope.error = true;
        }); // devuelve una promesa  (.then)
    }]
);