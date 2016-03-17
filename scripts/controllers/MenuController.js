/**
 * Created by smartivi on 16/03/2016.
 */
angular.module("MovieDbApp").controller("MenuController",
    ["$scope", function($scope){

        $scope.activeItem ="";

        $scope.setActiveItem = function(activeItemId){
            this.activeItem = activeItemId;
            this.$emit("changePageTitle", this.getPageTitle(activeItemId))
        };

        $scope.classForItem = function(itemId){
            return itemId === this.activeItem ? 'active' : '';
        };

        $scope.getPageTitle = function(activeItemId){
          switch(activeItemId){
              case "movies"  :  return "Movies List";
              case "series"  :  return "Series List";
              case "people"  :  return "People List";
          }
        };
    }]
)