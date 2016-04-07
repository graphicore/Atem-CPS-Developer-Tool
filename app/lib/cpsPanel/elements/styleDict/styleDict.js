define([
    'angular'
  , './styleDict-controller'
  , './styleDict-directive'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/rule/rule'
  , 'Atem-CPS-Developer-Tool/cpsPanel/dragAndDrop/dragAndDrop'
], function(
    angular
  , Controller
  , directive
  , rule
  , dragAndDrop
) {
    "use strict";
    return angular.module('cps.styleDict', [rule.name, dragAndDrop.name])
      .controller('StyleDictController', Controller)
      .directive('mtkCpsStyleDict', directive)
      ;
});
