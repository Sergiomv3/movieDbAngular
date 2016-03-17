/**
 * Created by smartivi on 16/03/2016.
 */
angular.module("MovieDbApp", ["ngRoute"]).config(
    ["$routeProvider",function($routeProvider){
        $routeProvider.when("/movies", {
            controller:"MoviesController",
            templateUrl: "views/movies.html"
        }).when("/series", {
            templateUrl: "views/series.html"
        }).when("/people", {
            templateUrl: "views/people.html"
        }).otherwise(
            {
                templateUrl:"views/404.html"
            }
        )
    }]
)

