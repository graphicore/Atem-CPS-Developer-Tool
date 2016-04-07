define([
    'angular'
  , './collection-controller'
  , './collection-directive'
  , './collection-drop-directive'
  , './collection-new-item-directive'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/rule/rule'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/namespaceCollection/namespaceCollection'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/comment/comment'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/generic/generic'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/importCollection/importCollection'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/newItem/newItem'
  , 'Atem-CPS-Developer-Tool/cpsPanel/dragAndDrop/dragAndDrop'
], function(
    angular
  , Controller
  , directive
  , collectionDropDirective
  , collectionNewItemDirective
  , rule
  , namespaceCollection
  , comment
  , generic
  , importCollection
  , newItem
  , dragAndDrop
) {
    "use strict";
    return angular.module('cps.collection', [rule.name, namespaceCollection.name
                           , comment.name, generic.name, dragAndDrop.name
                           , importCollection.name, newItem.name])
      .controller('CollectionController', Controller)
      .directive('mtkCpsCollection', directive)
      .directive('mtkCollectionDrop', collectionDropDirective)
      .directive('mtkCollectionNewItem', collectionNewItemDirective)
      ;
});
