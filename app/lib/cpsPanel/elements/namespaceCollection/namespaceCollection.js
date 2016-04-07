define([
    'angular'
  , './namespaceCollection-controller'
  , './namespaceCollection-directive'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elementToolbar/elementToolbar'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/selectorList/selectorList'
  , './newNamespaceCollection-controller'
  , './newNamespaceCollection-directive'
], function(
    angular
  , Controller
  , directive
  , elementToolbar
  , selectorList
  , NewNamespaceCollectionController
  , newNamespaceCollectionDirective
) {
    "use strict";

    // Can't require collection here, it would be recursive!
    var collectionName = 'cps.collection';

    return angular.module('cps.namespaceCollection', [collectionName, elementToolbar.name, selectorList.name])
      .controller('NamespaceCollectionController', Controller)
      .directive('mtkCpsNamespaceCollection', directive)
      .controller('NewNamespaceCollectionController', NewNamespaceCollectionController)
      .directive('mtkCpsNewNamespaceCollection', newNamespaceCollectionDirective)
      ;
});
