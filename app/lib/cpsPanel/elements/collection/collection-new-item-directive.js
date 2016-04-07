define([
    'angular'
  , './specificTargetTools'
  , 'Atem-CPS-Developer-Tool/cpsPanel/dragAndDrop/genericTargetTools'
  , 'Atem-CPS-Toolkit/dom-tool'
    ], function(
    angular
  , specificTargetTools
  , genericTargetTools
  , domTool
) {
    "use strict";

    var findElement = specificTargetTools.findElement
      , getPositionReference = specificTargetTools.getPositionReference
      , getTargetData = genericTargetTools.getTargetData
      ;

    /*
     * If indicated place the form. The positioning is figured out buy looking
     * at the event coordinates, very similar to what we do when finding
     * drag targets.
     */
    function doubleClickHandler(findElement, getPositionReference, $compile
                              , scope , controller, element, container, event) {
        var target
          , placementReference
          , uiElement
          , index
          ;

        if(event.defaultPrevented)
            // someone below already consumed the event
            return;

        if(!controller.empty)
            target = getTargetData(findElement, element, event);
        else
            target = {
                index: 0
              , insertPosition: 'append'
              , element: container
            };

        if(!target.insertPosition)
            return;

        // consume the event
        event.preventDefault();

        // place the interface:
        placementReference = getPositionReference(controller.empty, target.element, container);

        // target.insertPosition is "before" or "after" or "append"
        index = target.index;
        if(target.insertPosition === 'after')
            index +=1;

        // mtk-cps-new-item manages the forms here
        uiElement = element.ownerDocument.createElement('mtk-cps-new-item');
        // add attribute "index", index
        uiElement.setAttribute('index', index);

        domTool.insert(placementReference, target.insertPosition, uiElement);
        $compile(angular.element(uiElement))(scope);
    }


    function CollectionNewItemDirective($compile) {
        function link(_scope, element, attrs) {
          //jshint unused:vars
            var scope = element.isolateScope()
              , controller = scope.controller
              , container = element[0] // needed?
              // maybe use these to chose the form?
              //, dataTypes = ['cps/rule', 'cps/namespace-collection'
              //              , 'cps/comment', 'cps/generic-collection-item'
              //              , 'cps/import-collection']
              ;
            // the AngularJS/jQuery event does not directly expose 'defaultPrevented'
            element[0].addEventListener('dblclick', doubleClickHandler.bind(
                null
              , findElement
              , getPositionReference
              , $compile
              , scope
              , controller
              , element[0]
              , container
            ));
        }

        return {
            restrict: 'A' // only matches element names
          , link:link
        };
    }
    CollectionNewItemDirective.$inject = ['$compile'];
    return CollectionNewItemDirective;
});
