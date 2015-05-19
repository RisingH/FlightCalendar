/**
 * Created by jl.gu on 2015/4/21.
 */
define(["jsHelper", "template", "createCalendar", "createProAd", "animate"], function (jsHelper, template, createCalendar, createProAd, animate) {

    var externalLoadTabItem = function (motherDom, ltTabJson) {

        for (var i = 0; i < ltTabJson.length; i++) {

            var tabChildDom = jsHelper.strToDom(template.tabChild.format(ltTabJson[i].tabId, ltTabJson[i].unClickImg, ltTabJson[i].tabId + "_img"));

            tabChildDom.onclick = function () {

                var _selfCache = stcGlobal.dataSource[0][this.id.substr(3, 1)];

                if (document.getElementById(_selfCache.tabId + "_img").src == _selfCache.unClickImg) {

                    stcGlobal.status = "waitLoading";

                    for (var i = 0; i < stcGlobal.dataSource[0].length; i++) {
                        if (stcGlobal.dataSource[0][i].tabId != this.id) {
                            document.getElementById(stcGlobal.dataSource[0][i].tabId + "_img").src = stcGlobal.dataSource[0][i].unClickImg;
                        }
                    }

                    document.getElementById(_selfCache.tabId + "_img").src = _selfCache.clickedImg;


                    //todo get external datasource
//                    stcGlobal.dataSource[1]= ??
//                    stcGlobal.dataSource[2]= ??


                    if (document.getElementById("calendarContainer") == null) {
                        var calendarContainerDom = createCalendar.loadCalendar(_selfCache.bigImg);
                        document.getElementById("leftContainer").appendChild(calendarContainerDom);

                        animate(document.getElementById('galleryContainer'),
                            document.getElementById('btnPrev'),
                            document.getElementById('btnNext'));
                        document.getElementById('btnPrev').style.display = "none";
                        stcGlobal.status = "success";
                    }
                    else {
                        var calendarContainerDom = document.getElementById("calendarContainer");
                        calendarContainerDom.parentNode.removeChild(calendarContainerDom);
                        var newCalendarContainerDom = createCalendar.loadCalendar(_selfCache.bigImg);
                        document.getElementById("leftContainer").appendChild(newCalendarContainerDom);

                        animate(document.getElementById('galleryContainer'),
                            document.getElementById('btnPrev'),
                            document.getElementById('btnNext'));
                        document.getElementById('btnPrev').style.display = "none";
                        stcGlobal.status = "success";
                    }

                    var productDomArray = createProAd.loadProduct();

                    var adDom = createProAd.loadAD();

                    while (document.getElementById("productContainer").hasChildNodes()) {
                        document.getElementById("productContainer").removeChild(document.getElementById("productContainer").lastChild);
                    }

                    for (var i = 0; i < productDomArray.length; i++) {

                        document.getElementById("productContainer").appendChild(productDomArray[i]);
                    }
                    document.getElementById("productContainer").appendChild(adDom);
                }
            };

            motherDom.appendChild(tabChildDom);
        }
    };

    var loadTab = function (ltTabJson) {

        var tabChildrenContainerDom = jsHelper.strToDom(template.tabChildrenContainer);

        externalLoadTabItem(tabChildrenContainerDom, ltTabJson);

        var tabContainerDom = jsHelper.strToDom(template.tabContainer);

        tabContainerDom.appendChild(tabChildrenContainerDom);

        return tabContainerDom;
    };

    return{
        externalLoadTabItem: externalLoadTabItem,
        loadTab: loadTab
    };
});