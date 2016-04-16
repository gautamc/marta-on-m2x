'use strict';

angular.module('marta-on-m2x').filter('range', function(){
  return function(input, endix) {
    for(var i=0; i<parseInt(endix); i++){
      input.push(i);
    }
    return input;
  }
});