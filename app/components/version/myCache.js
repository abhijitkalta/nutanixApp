'use strict';


nutanixApp.service('myCache', function (CacheFactory) {
// Check to make sure the cache doesn't already exist
  if (!CacheFactory.get('myCache')) {
    CacheFactory.createCache('myCache', {maxAge: 5000 , deleteOnExpire: 'aggressive', storageMode : 'localStorage'});
  }
  var myCache = CacheFactory.get('myCache');
  return myCache;
});
