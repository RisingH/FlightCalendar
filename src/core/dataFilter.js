/**
 * Created by jl.gu on 2015/4/21.
 */
define(["jsHelper"], function (jsHelper) {

        return function (primitiveData) {

            try {
                if (primitiveData && jsHelper.isJson(primitiveData) == false) {
                    primitiveData = eval('(' + primitiveData + ')');
                }

                if (primitiveData.tabLst == undefined || primitiveData.tabLst.length == 0) {

                    return;
                }
                if (primitiveData.caleLst == undefined || primitiveData.caleLst.length == 0) {

                    return;
                }
                if (primitiveData.prdLst == undefined || primitiveData.prdLst.length == 0) {

                    return;
                }
                if (primitiveData.adLst == undefined || primitiveData.adLst.length == 0) {

                    return;
                }

                var tabFilter = function () {
                    var tabList = [];
                    for (var i = 0; i < primitiveData.tabLst.length; i++) {

                        if (primitiveData.tabLst[i].pinyin == undefined ||
                            primitiveData.tabLst[i].calImg == undefined ||
                            primitiveData.tabLst[i].tabImg1 == undefined ||
                            primitiveData.tabLst[i].tabImg2 == undefined) {
                            break;
                        }

                        var tabObj = {
                            "tabId": "tab" + i,
                            "requestParam": primitiveData.tabLst[i].pinyin,
                            "tabName": primitiveData.tabLst[i].tabName,
                            "bigImg": primitiveData.tabLst[i].calImg,
                            "unClickImg": primitiveData.tabLst[i].tabImg2,
                            "clickedImg": primitiveData.tabLst[i].tabImg1
                        };
                        tabList.push(tabObj);
                    }
                    return tabList;
                };

                var calendarFilter = function () {
                    var calendarList = [];
                    for (var i = 0; i < primitiveData.caleLst.length; i++) {

                        if (primitiveData.caleLst[i].date == undefined ||
                            primitiveData.caleLst[i].price == undefined ||
                            primitiveData.caleLst[i].price.amt == undefined ||
                            primitiveData.caleLst[i].url == undefined ||
                            primitiveData.caleLst[i].dcNme == undefined) {
                            break;
                        }

                        var calendarObj = {
                            "date": primitiveData.caleLst[i].date,
                            "dcName": primitiveData.caleLst[i].dcNme,
                            "price": Number(primitiveData.caleLst[i].price.amt),
                            "url": primitiveData.caleLst[i].url
                        };
                        calendarList.push(calendarObj);
                    }
                    return calendarList;
                };

                var productFilter = function () {
                    var productList = [];
                    for (var i = 0; i < primitiveData.prdLst.length; i++) {

                        if (primitiveData.prdLst[i].nme == undefined ||
                            primitiveData.prdLst[i].price == undefined ||
                            primitiveData.prdLst[i].price.amt == undefined ||
                            primitiveData.prdLst[i].lnk == undefined ||
                            primitiveData.prdLst[i].img == undefined) {
                            break;
                        }

                        var productObj = {
                            "title": primitiveData.prdLst[i].nme,
                            "url": primitiveData.prdLst[i].lnk,
                            "price": primitiveData.prdLst[i].price.amt,
                            "img": primitiveData.prdLst[i].img
                        };
                        productList.push(productObj);
                    }
                    return productList;
                };

                var adFilter = function () {
                    var adList = [];
                    for (var i = 0; i < primitiveData.adLst.length; i++) {

                        if (primitiveData.adLst[i].alt == undefined ||
                            primitiveData.adLst[i].img == undefined ||
                            primitiveData.adLst[i].lnk == undefined) {
                            break;
                        }

                        var adObj = {
                            "title": primitiveData.adLst[i].alt,
                            "url": primitiveData.adLst[i].lnk,
                            "img": primitiveData.adLst[i].img
                        };
                        adList.push(adObj);
                    }
                    return adList;
                };

                var resultArray = [];

                if (tabFilter().length == 0 || calendarFilter().length == 0 || productFilter().length == 0 || adFilter().length == 0) {
                    return;
                }
                resultArray.push(tabFilter());
                resultArray.push(calendarFilter());
                resultArray.push(productFilter());
                resultArray.push(adFilter());

                return resultArray;
            }
            catch (ex) {
                throw ex;
            }
        }
    }
);