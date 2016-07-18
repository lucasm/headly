  var App = angular.module('Flyeed', []);

  App.controller("FeedCtrl", ['$scope','FeedService', function ($scope,Feed) {    
    $scope.loadBtnText="Carregar";
    $scope.loadFeed=function(e){        
      Feed.parseFeed($scope.feedSrc).then(function(res){
        $scope.loadBtnText=angular.element(e.target).text();
        $scope.feeds=res.data.responseData.feed.entries;
          //console.log($scope.feeds);
      });
    }
  }]);

  App.factory('FeedService',['$http',function($http){
    return {
      parseFeed : function(url){
        return $http.jsonp('//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=50&callback=JSON_CALLBACK&q=' + encodeURIComponent(url));
      }
    }
  }]);