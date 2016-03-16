/**
 * Created by smartivi on 16/03/2016.
 */
angular.module("MovieDbApp", ["ngRoute"]).config(
    ["$routeProvider",function($routeProvider){
        $routeProvider.when("/movies", {
            templateUrl: "views/movies.html"
        })
        $routeProvider.when("/series", {
            templateUrl: "views/series.html"
        })
    }]
)

