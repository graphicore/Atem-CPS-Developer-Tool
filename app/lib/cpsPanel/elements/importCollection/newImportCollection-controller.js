define([
    'Atem-CPS/errors'
  , './importCollection-controller'
  , 'Atem-CPS/CPS/elements/AtImportCollection'
], function(
    errors
  , Parent
  , AtImportCollection
) {
    "use strict";
    function NewImportCollectionController($scope, ruleController) {
        this.item = new AtImportCollection(ruleController);
        $scope.hideToolbar = true;
        Parent.call(this, $scope, ruleController);
    }

    NewImportCollectionController.$inject = ['$scope', 'ruleController'];
    var _p = NewImportCollectionController.prototype = Object.create(Parent.prototype);
    _p.constructor = NewImportCollectionController;

    _p._setValidityMessage = function(message) {
        if(!this.item.resourceName) {
            this.$scope.invalid = !!message;
            this.$scope.message = message;
        }
        else
            // if we already have a resource, just do the standard behavior
            Parent.prototype._setValidityMessage.call(this, message);
    };

    _p._insertItem = function(item) {
        if(!item.resourceName || item.invalid)
            return;
        this.$scope.$emit('command', 'insert', this.index, item);
    };

    _p.finalize = function() {
        if(!this._waiting)
            this._insertItem(this.item);
        else
            return this._waiting.then(this._insertItem.bind(this, this.item));
    };

    return NewImportCollectionController;
});
