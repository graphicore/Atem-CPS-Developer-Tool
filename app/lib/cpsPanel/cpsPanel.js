define([
    'angular'
  , './cpsPanel-controller'
  , './cpsPanel-directive'
  , './elements/collection/collection'
  , './elements/styleDict/styleDict'
  , 'Atem-CPS-Developer-Tool/cpsPanel/dragAndDrop/dragAndDrop'
], function(
    angular
  , Controller
  , directive
  , collection
  , styleDict
  , dragAndDrop
) {
    "use strict";
    return angular.module('mtk.cpsPanel', [collection.name, dragAndDrop.name
                                         , styleDict.name])
      .controller('CpsPanelController', Controller)
      .directive('mtkCpsPanel', directive)
      ;
});
