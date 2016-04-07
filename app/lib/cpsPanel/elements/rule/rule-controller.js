define([
   'Atem-CPS-Developer-Tool/cpsPanel/elementToolbar/clickHandler'
], function(
    clickHandler
) {
    "use strict";
    function RuleController($scope) {
        this.$scope = $scope;
        $scope.index = this.index;
        this.toolClickHandler = clickHandler.bind(this, 'command');
    }

    RuleController.$inject = ['$scope'];
    var _p = RuleController.prototype;

    return RuleController;
});
