/**
 * Created by jl.gu on 2015/4/21.
 */
define(["createTab" , "dataFilter", "jsHelper", "template"], function (createTab,dataFilter, jsHelper, template) {

    return function (callbackJson) {

        var filterJson = dataFilter(callbackJson);

        if (filterJson == undefined || filterJson.length != 4) {
            stcGlobal.status = "fail";
            return;
        }

        stcGlobal.dataSource = filterJson;

        var leftContainerDom = jsHelper.strToDom(template.leftContainer);

        var tabDom = createTab.loadTab(filterJson[0]);

        leftContainerDom.appendChild(tabDom);

        var stContainerDom = jsHelper.strToDom(template.stContainer);

        stContainerDom.appendChild(leftContainerDom);

        var matrixContainerDom = jsHelper.strToDom(template.matrixContainer);

        matrixContainerDom.appendChild(stContainerDom);

        var productContainerDom = jsHelper.strToDom(template.productContainer);

        matrixContainerDom.appendChild(productContainerDom);

        return matrixContainerDom;

    };
});