'use strict';
//to retrie value from the zoomtracker api

nutanixApp.factory('dealsData', function( $resource , $q) {
    var resource = $resource('http://nutanix.0x10.info/api/deals?type=json&query=list_deals');
    var resource2 = $resource('https://nutanix.0x10.info/api/deals?type=json&query=api_hits');
    return {
      getDeals  : function() {
        var deferred = $q.defer();
        resource.get().
        $promise.then( function(response) {
        deferred.resolve(response);
        }, function(response) {
        deferred.reject(response)
       });
       return deferred.promise;
    },

    getApiHits  : function() {
      var deferred = $q.defer();
      resource2.get().
      $promise.then( function(response) {
      deferred.resolve(response);
      }, function(response) {
      deferred.reject(response)
     });
     return deferred.promise;
  }

}});
