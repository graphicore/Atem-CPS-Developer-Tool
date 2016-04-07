define([
    'angular'
  , './rule-controller'
  , './rule-directive'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/propertyDict/propertyDict'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/selectorList/selectorList'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elementToolbar/elementToolbar'
  , './newRule-controller'
  , './newRule-directive'
], function(
    angular
  , Controller
  , directive
  , propertyDict
  , selectorList
  , elementToolbar
  , NewRuleController
  , newRuleDirective
) {
    "use strict";
    return angular.module('cps.rule', [propertyDict.name, selectorList.name, elementToolbar.name])
      .controller('RuleController', Controller)
      .directive('mtkCpsRule', directive)
      .controller('NewRuleController', NewRuleController)
      .directive('mtkCpsNewRule', newRuleDirective)
      ;
});
