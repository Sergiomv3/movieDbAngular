/**
 * Created by smartivi on 17/03/2016.
 */
angular.module("MovieDbApp").service("MovieDbApiClient",["$http", function($http){
    this.getMovies = function(){
      return $http.get("/api/movies/");
    }

    this.getSeries = function(){
        return $http.get("/api/series/");
    }
    this.getPeople = function(){
        return $http.get("/api/people/");
    }
}]);