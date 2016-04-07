define([
    'angular'
  , './generic-controller'
  , './generic-directive'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elementToolbar/elementToolbar'
], function(
    angular
  , Controller
  , directive
  , elementToolbar
) {
    "use strict";
    return angular.module('cps.generic', [elementToolbar.name])
      .controller('GenericController', Controller)
      .directive('mtkCpsGeneric', directive)
      ;
});
