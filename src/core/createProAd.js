/**
 * Created by jl.gu on 2015/4/23.
 */
define(["jsHelper", "template"], function (jsHelper, template) {

    var loadProduct = function () {

        var productDomArray = [];

        var productArray = stcGlobal.dataSource[2];

        for (var i = 0; i < productArray.length; i++) {

            var productDom = jsHelper.strToDom(template.productItem.format(
                productArray[i].url, productArray[i].img, productArray[i].title, productArray[i].price, productArray[i].title
            ));
            productDomArray.push(productDom);
        }

        return productDomArray;
    };

    var loadAD = function () {

        var adData = stcGlobal.dataSource[3][0];

        var adDom = jsHelper.strToDom(template.adItem.format(
            adData.url, adData.img, adData.title
        ));

        return adDom;

    };

    return {
        loadProduct: loadProduct,
        loadAD: loadAD
    };
});