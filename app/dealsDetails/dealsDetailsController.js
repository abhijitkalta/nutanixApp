nutanixApp.controller('dealsDetailsController',
    function dealsDetailsController($scope, dealsData, $route, myCache, CacheFactory) {

    //to store likes in localStorage permanently
    var myCache = CacheFactory.get('myCache');
    myCache.setOptions({
        //to reset cache onexpire
        onExpire : function(key,value){
        myCache.put(key,value);
      }
    });

    //to create the parcels model
    var promise = dealsData.getDeals();
    promise.then(function(event) {
    $scope.deals = event.deals;
    for(var i=0; i< $scope.deals.length; i++){
      $scope.deals[i].final_price = $scope.deals[i].actual_price - (parseInt($scope.deals[i].discount)/100)*$scope.deals[i].actual_price;
      $scope.deals[i].final_price = $scope.deals[i].final_price.toFixed(1);
    }
    }, function(event) {
    alert("Failed");
    });

    //to create the apiHits model
    var promise2 = dealsData.getApiHits();
    promise2.then(function(event) {
    $scope.apiHits = event.api_hits;
    }, function(event) {
    alert("Failed");
    });

    //to store parcelId and likes count as key, value pair
    $scope.addToCache = function(key){
      if(isNaN(myCache.get(key)))
       return myCache.put(key, 1);
       return myCache.put(key, myCache.get(key) + 1);
    };

    //to retrieve the cache key value
    $scope.getFromCache = function(key){
        if(isNaN(myCache.get(key)))
        return 0;
        $scope.total_likes();
        return myCache.get(key);
    };

    $scope.total_likes = function(){
      var sum=0;
      var cached = myCache.keys();
      for(var i=0; i < cached.length; i++){
        var str = cached[i].toString();
        sum += myCache.get(str);
      }
      return sum;
    }


});
