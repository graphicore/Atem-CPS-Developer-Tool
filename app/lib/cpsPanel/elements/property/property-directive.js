define([
    'angular'
  , 'Atem-CPS-Developer-Tool/cpsPanel/elements/helpers'
  , 'require/text!./property.tpl'
    ], function(
    angular
  , helpers
  , template
) {
    "use strict";

    function PropertyDirective() {
        function link(scope, element, attrs) {
            //jshint unused:vars
            var startEditHandler = helpers.handlerDecorator(
                                        scope,scope.startEdit, true, true);
            element.on('click', function(event) {
               if(event.target.classList.contains('property-name')
                        || event.target.classList.contains('property-value'))
                    startEditHandler(event);
            });
        }
        return {
            restrict: 'E' // only matches element names
          , controller: 'PropertyController'
          , replace: false
          , template: template
          , scope: {cpsPropertyDict: '=', property: '=', index: '=', edit: '=', mtkElementTools: '='}
          , link: link
        };
    }
    PropertyDirective.$inject = [];
    return PropertyDirective;
});
