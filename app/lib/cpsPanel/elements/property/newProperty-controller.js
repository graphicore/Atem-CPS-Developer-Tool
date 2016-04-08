define([
    './property-controller'
], function(
    Parent
) {
    "use strict";
    function NewPropertyController($scope, cpsTools) {
        Parent.call(this, $scope, cpsTools);
    }

    NewPropertyController.$inject = ['$scope', 'cpsTools'];
    var _p = NewPropertyController.prototype = Object.create(Parent.prototype);
    _p.constructor = NewPropertyController;

    // override _initPropertyModel of Parent
    _p._initPropertyModel = function() {
        var $scope = this.$scope;
        $scope.invalid = false;
        $scope.message = '';
        $scope.propertyModel = {
            name: ''
          , value: ''
        };
        $scope.edit = true;
    };

    // override _changeHandler of Parent
    _p._changeHandler = function () {
        var $scope = this.$scope
          , property = this._getNewProperty()
          ;

        this._setValueBoxSize($scope.propertyModel.value);
        $scope.invalid = property.invalid;
        $scope.message = property.invalid
            ? (property.message || 'no message :-(')
            : ''
            ;
    };

    // override _finalize of Parent
    _p._finalize = function() {
        var $scope = this.$scope
          , property = this._getNewProperty()
          ;
        // this will close this directive
        this.$scope.$emit('finalizeNewProperty');
        if(!property.invalid)
            this._cpsTools.appendProperty($scope.cpsPropertyDict, property);
    };

    return NewPropertyController;
});
