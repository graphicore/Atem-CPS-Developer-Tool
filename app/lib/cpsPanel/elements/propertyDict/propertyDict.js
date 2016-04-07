define([
    'angular'
  , './propertyDict-controller'
  , './propertyDict-directive'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/property/property'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/comment/comment'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/generic/generic'
  , 'Atem-CPS-Developer-Tool/cpsPanel/dragAndDrop/dragAndDrop'
], function(
    angular
  , Controller
  , directive
  , property
  , comment
  , generic
  , dragAndDrop // contains the mtk-drag directive
) {
    "use strict";
    return angular.module('cps.propertyDict', [property.name, comment.name
                                        , generic.name, dragAndDrop.name])
      .controller('PropertyDictController', Controller)
      .directive('mtkCpsPropertyDict', directive)
      ;
});
