define([
    'Atem-CPS-Developer-Tool/cpsPanel/elements/collection/collection-controller'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elementToolbar/clickHandler'
], function(
    Parent
  , clickHandler
) {
    "use strict";

    function NamespaceCollectionController() {
        Parent.apply(this, arguments);
        this.clickToolHandler = clickHandler.bind(this, 'command');
    }

    var _p = NamespaceCollectionController.prototype = Object.create(Parent.prototype);

    NamespaceCollectionController.$inject = Parent.$inject;
    return NamespaceCollectionController;
});
