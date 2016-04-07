define([
    'angular'
  , './newItem-controller'
  , './newItem-directive'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/comment/comment'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/importCollection/importCollection'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/namespaceCollection/namespaceCollection'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/rule/rule'
], function(
    angular
  , Controller
  , directive
  , comment
  , importCollection
  , namespaceCollection
  , rule
) {
    "use strict";
    return angular.module('cps.newItem', [comment.name, importCollection.name
                                        , namespaceCollection.name, rule.name])
      .controller('NewItemController', Controller)
      .directive('mtkCpsNewItem', directive)
      ;
});
