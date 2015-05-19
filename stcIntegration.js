/**
 * Created by jl.gu on 2015/4/23.
 */

(function expansion() {

    try {

        /**
         * string格式化
         * @method
         * @for String
         * @param
         * @return 格式化后的字符串
         */
        String.prototype.format = function () {
            var args = arguments;
            return this.replace(/\{(\d+)\}/g, function (m, i, o, n) {
                return args[i];
            });
        };

        Date.prototype.format = function (format) {
            var o = {
                "M+": this.getMonth() + 1, //month
                "d+": this.getDate(), //day
                "h+": this.getHours(), //hour
                "m+": this.getMinutes(), //minute
                "s+": this.getSeconds(), //second
                "q+": Math.floor((this.getMonth() + 3) / 3), //quarter
                "S": this.getMilliseconds() //millisecond
            }
            if (/(y+)/.test(format)) format = format.replace(RegExp.$1,
                (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)if (new RegExp("(" + k + ")").test(format))
                format = format.replace(RegExp.$1,
                        RegExp.$1.length == 1 ? o[k] :
                        ("00" + o[k]).substr(("" + o[k]).length));
            return format;
        };

        Date.prototype.dateAdd = function (strInterval, Number) {
            var dtTmp = this;
            switch (strInterval) {
                case 's' :
                    return new Date(Date.parse(dtTmp) + (1000 * Number));
                case 'n' :
                    return new Date(Date.parse(dtTmp) + (60000 * Number));
                case 'h' :
                    return new Date(Date.parse(dtTmp) + (3600000 * Number));
                case 'd' :
                    return new Date(Date.parse(dtTmp) + (86400000 * Number));
                case 'w' :
                    return new Date(Date.parse(dtTmp) + ((86400000 * 7) * Number));
                case 'q' :
                    return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number * 3, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
                case 'm' :
                    return new Date(dtTmp.getFullYear(), (dtTmp.getMonth()) + Number, dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
                case 'y' :
                    return new Date((dtTmp.getFullYear() + Number), dtTmp.getMonth(), dtTmp.getDate(), dtTmp.getHours(), dtTmp.getMinutes(), dtTmp.getSeconds());
            }
        };

        Date.prototype.lastDayOfMonth = function () {

            var maxDay = new Date(this.getFullYear(), this.getMonth() + 1, 0);

            return maxDay;
        }

        Date.prototype.firstDayOfMonth = function () {

            var firstDay = new Date(this.getFullYear(), this.getMonth(), 1);

            return firstDay;
        };
    }
    catch (ex) {
        throw ex;
    }
})();

var jsHelper = function () {

    try {
        var strToDomFn = function (str) {
            var node = document.createElement("div");
            node.innerHTML = str;
            return node.firstChild;
        };

        var isJson = function (obj) {
            var isjson = typeof (obj) == "object" && Object.prototype.toString.call(obj).toLowerCase() == "[object object]" && !obj.length;
            return isjson;
        };

        return {
            strToDom: strToDomFn,
            isJson: isJson
        };
    }
    catch (ex) {
        throw ex;
    }
}();

var template = function () {
    try {
        var matrixContainer = [
            '<div class="mod-bd" id="matrixContainer"></div>'
        ].join('\n');

        var stContainer = [
            '<div class="calender" id="stContainer">',
            '</div>'
        ].join('\n');

        var leftContainer = [
            '<div class="calender-tabs" id="leftContainer"></div>'
        ].join('\n');

        var tabContainer = [
            '<div class="calender-tabs-month">',
            '</div>'
        ].join('\n');

        var tabChildrenContainer = [
            '<ul class="month" id="tabContainer">',
            '</ul>'
        ].join('\n');

        var tabChild = [
            '<li id="{0}">',
            '<div class="theme-s"><img src="{1}" id="{2}"></div>',
            '</li>'
        ].join('\n');

        var calendarContainer = [
            '<div class="calender-tabs-date-wrap" id="calendarContainer">',
            '<span class="btn-prev" id="btnPrev"></span>',
            '<span class="btn-next" id="btnNext"></span>',
            '</div>'
        ].join('\n');

        var galleryContainer = [
            '<div class="calender-tabs-date" id="galleryContainer"></div>'
        ].join('\n');

        var gallery = [
            '<div class="calender-date-panel active">',
            ' <ul class="days">',
            '<li>日</li>',
            '<li>一</li>',
            '<li>二</li>',
            '<li>三</li>',
            '<li>四</li>',
            '<li>五</li>',
            '<li>六</li>',
            '</ul>',
            '</div>'
        ].join('\n');

        var calendarDates = [
            '<ul class="dates" id="dates">',
            '</ul>'
        ].join('\n');

        var calendarBackImg = [
            '<div class="theme-img">',
            '<img src="{0}" alt="">',
            '</div>'
        ].join('\n');

        var emptyDateDom = [
            '<li></li>'
        ].join('\n');

        var ordinaryDateDom = [
            '<li><span>{0}</span></li>'
        ].join('\n');

        var holidayDateDom = [
            '<li><span class="date-festival">{0}</span></li>'
        ].join('\n');

        var specialDateDom = [
            '<li><span class="hide">{0}</span>',
            '<div class="sale-overlay">',
            '<a href="{1}" target="_blank">',
            '<p class="sale-date">{2}</p>',
            '<p class="sale-place">{3}</p>',
            '<p class="price sale-price"><dfn>¥</dfn>{4} <i class="price_info">起</i></p>',
            '</div>',
            '</li>'
        ].join('\n');

        var productContainer = [
            '<div class="product"  id="productContainer">',
            '</div>'
        ].join('\n');

        var productItem = [
            '<div class="product-item">',
            '<a href="{0}" target="_blank">',
            '<div class="item-thumbnail">',
            '<img src="{1}" alt="{2}">',
            '</div>',
            '<div class="item-msg">',
            '<p class="price"><dfn>¥</dfn>{3} <i class="price_info">起</i></p>',
            '<p class="item-name">{4}</p>',
            '</div>',
            '<div class="iefix-bg"></div>',
            '</a>',
            '</div>'
        ].join('\n');

        var adItem = [
            '<div class="extra-item">',
            '<a href="{0}" target="_blank">',
            '<p class="extra-thumbnail">',
            '<img src="{1}" alt="">',
            '</p>',
            '<p class="extra-text">{2}</p>',
            '<p class="iefix-bg"></p>',
            '</a>',
            '</div>'
        ].join('\n');

        return {
            matrixContainer: matrixContainer,
            stContainer: stContainer,
            leftContainer: leftContainer,
            tabContainer: tabContainer,
            tabChildrenContainer: tabChildrenContainer,
            tabChild: tabChild,
            calendarContainer: calendarContainer,
            galleryContainer: galleryContainer,
            gallery: gallery,
            calendarDates: calendarDates,
            calendarBackImg: calendarBackImg,
            emptyDateDom: emptyDateDom,
            ordinaryDateDom: ordinaryDateDom,
            holidayDateDom: holidayDateDom,
            specialDateDom: specialDateDom,
            productContainer: productContainer,
            productItem: productItem,
            adItem: adItem
        };
    }
    catch (ex) {
        throw ex;
    }
}();

var holidayList = function () {
    try {
        var holidayArray = [
            {
                name: '元旦',
                dates: [
                    '2015-01-01',
                    '2016-01-01',
                    '2017-01-01',
                    '2018-01-01',
                    '2019-01-01',
                    '2020-01-01'
                ]
            },
            {
                name: '除夕',
                dates: [
                    '2015-02-18',
                    '2016-02-07',
                    '2017-01-27',
                    '2018-02-15',
                    '2019-02-04',
                    '2020-01-24'
                ]
            },
            {
                name: '春节',
                dates: [
                    '2015-02-19',
                    '2016-02-08',
                    '2017-01-28',
                    '2018-02-16',
                    '2019-02-05',
                    '2020-01-25'
                ]
            },
            {
                name: '情人节',
                dates: [
                    '2015-02-14',
                    '2016-02-14',
                    '2017-02-14',
                    '2018-02-14',
                    '2019-02-14',
                    '2020-02-14'
                ]
            },
            {
                name: '元宵节',
                dates: [
                    '2015-03-05',
                    '2016-02-22',
                    '2017-02-11',
                    '2018-03-02',
                    '2019-02-19',
                    '2020-02-08'
                ]
            },
            {
                name: '清明节',
                dates: [
                    '2015-04-05',
                    '2016-04-04',
                    '2017-04-04',
                    '2018-04-05',
                    '2019-04-05',
                    '2020-04-04'
                ]
            },
            {
                name: '劳动节',
                dates: [
                    '2015-05-01',
                    '2016-05-01',
                    '2017-05-01',
                    '2018-05-01',
                    '2019-05-01',
                    '2020-05-01'
                ]
            },
            {
                name: '儿童节',
                dates: [
                    '2015-06-01',
                    '2016-06-01',
                    '2017-06-01',
                    '2018-06-01',
                    '2019-06-01',
                    '2020-06-01'
                ]
            },
            {
                name: '端午节',
                dates: [
                    '2015-06-20',
                    '2016-06-09',
                    '2017-05-30',
                    '2018-06-18',
                    '2019-06-07',
                    '2020-06-25'
                ]
            },
            {
                name: '建党节',
                dates: [
                    '2015-07-01',
                    '2016-07-01',
                    '2017-07-01',
                    '2018-07-01',
                    '2019-07-01',
                    '2020-07-01'
                ]
            },
            {
                name: '建军节',
                dates: [
                    '2015-08-01',
                    '2016-08-01',
                    '2017-08-01',
                    '2018-08-01',
                    '2019-08-01',
                    '2020-08-01'
                ]
            },
            {
                name: '七夕',
                dates: [
                    '2015-08-20',
                    '2016-08-09',
                    '2017-08-28',
                    '2018-08-17',
                    '2019-08-07'
                ]
            },
            {
                name: '教师节',
                dates: [
                    '2015-09-01',
                    '2016-09-01',
                    '2017-09-01',
                    '2018-09-01',
                    '2019-09-01',
                    '2020-09-01'
                ]
            },
            {
                name: '中秋节',
                dates: [
                    '2015-09-27',
                    '2016-09-15',
                    '2017-10-04',
                    '2018-09-24',
                    '2019-09-13'
                ]
            },
            {
                name: '国庆节',
                dates: [
                    '2015-10-01',
                    '2016-10-01',
                    '2017-10-01',
                    '2018-10-01',
                    '2019-10-01',
                    '2020-10-01'
                ]
            },
            {
                name: '圣诞节',
                dates: [
                    '2015-12-25',
                    '2016-12-25',
                    '2017-12-25',
                    '2018-12-25',
                    '2019-12-25',
                    '2020-12-25'
                ]
            }
        ];

        return holidayArray;
    }
    catch (ex) {
        throw ex;
    }
}();

var dataFilter = function (primitiveData) {
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
};

var animate = function (container, left, right) {

    var self = this;
    this._containerDom = container;
    this._leftBtnDom = left;
    this._rightBtnDom = right;
    this.galleryWidth = container.children[0].offsetWidth;
    // Define how to scroll
    this._scrollNumber = 0; // 滚动序号，避免快速滚动后的回调错误
    this.prettyScroll = function (scrollGoTo, scrollNumber) {
        try {
            var runningNumber = scrollNumber || ++this._scrollNumber,
                _containerDom = self._containerDom,
                containerWidth = _containerDom.scrollWidth,
                startPosition = _containerDom.style.left == "" ? 0 : Number(_containerDom.style.left.replace("px", "")),
                targetPosition = (scrollGoTo === undefined ? startPosition : scrollGoTo),
                offset = 10;
            if (runningNumber !== self._scrollNumber) {
                return;
            }

            if (startPosition == 0 && targetPosition == self.galleryWidth) {
                return;
            }

            if (targetPosition == 0) {
                this._leftBtnDom.style.display = "none";
            }
            else if (containerWidth - Math.abs(targetPosition) == self.galleryWidth) {
                this._rightBtnDom.style.display = "none";
            }

            if (Math.abs(targetPosition) > containerWidth - self.galleryWidth) {
                //if asynLoad pic  todo
                targetPosition = -(containerWidth - self.galleryWidth);
            }
            if (Math.abs(targetPosition - startPosition) <= offset) { //到位后归位
                return _containerDom.style.left = targetPosition + "px";
            }
            if (targetPosition > startPosition) { //右移
                _containerDom.style.left = ( startPosition + offset) + "px";
            }
            else { //左移
                _containerDom.style.left = ( startPosition - offset) + "px";
            }
            setTimeout(function () {
                self.prettyScroll(targetPosition, runningNumber);
            }, 8);
        }
        catch (ex) {
            throw  ex;
        }
    };
    // Add functions to left&right buttons
    left.onclick = function () {
        var w = self._containerDom.children[0].offsetWidth;
        var containerDomLeft = (self._containerDom.style.left == "" ? 0 : Number(self._containerDom.style.left.replace("px", "")));
        self.prettyScroll(containerDomLeft + w);
        right.style.display = "block";

    };
    right.onclick = function () {
        var w = self._containerDom.children[0].offsetWidth;
        var containerDomLeft = (self._containerDom.style.left == "" ? 0 : Number(self._containerDom.style.left.replace("px", "")));
        self.prettyScroll(containerDomLeft - w);
        left.style.display = "block";
    };
    // Remove Text from #container so we get inserted spaces
    (function (e) {
        var i = e.childNodes.length;
        while (i-- > 0) if (e.childNodes[i].nodeType === 3) e.removeChild(e.childNodes[i]);
    })(container);
};

var createCalendar = function () {

    try {

        var backgroundImg, saleDayArray, holidayArray = holidayList;

        var isSpecialDateFn = function (naturalDate) {

            var _selfDate = naturalDate;

            var _specialObj = {
                dateType: "ordinary",
                dateDisplay: "",
                datePlace: "",
                datePrice: "",
                dateUrl: ""
            };

            var isSaleDayFn = function (_selfDate) {

                var isResult = false;
                var _selfDate = _selfDate.format("yyyy-MM-dd");
                for (var i = 0; i < saleDayArray.length; i++) {

                    var saleDay = saleDayArray[i].date.substr(0, saleDayArray[i].date.length - 9);

                    if (_selfDate == saleDay) {
                        _specialObj.dateType = "sale";
                        _specialObj.dateDisplay = saleDayArray[i].date;
                        _specialObj.datePlace = saleDayArray[i].dcName;
                        _specialObj.datePrice = saleDayArray[i].price;
                        _specialObj.dateUrl = saleDayArray[i].url;
                        isResult = true;
                        break;
                    }
                }
                return isResult;
            };

            var isHolidayFn = function (_selfDate) {

                var isResult = false;
                var _selfMonthDate = _selfDate.format("yyyy-MM-dd");// (_selfDate.getYear() + "-" + _selfDate.getMonth() > 10 ? _selfDate.getMonth() + 1 : "0" + (_selfDate.getMonth() + 1) ) + "-" + _selfDate.getDate();
                for (var i = 0; i < holidayArray.length; i++) {

                    for (var j = 0; j < holidayArray[i].dates.length; j++) {

                        if (_selfMonthDate == holidayArray[i].dates[j]) {
                            _specialObj.dateType = "holiday";
                            _specialObj.dateDisplay = holidayArray[i].name;
                            isResult = true;
                            break;
                        }
                    }

                    if (_specialObj.dateType == "holiday")
                        break;
                }
                return isResult;
            };

            if (isSaleDayFn(_selfDate) != true) {
                isHolidayFn(_selfDate);
            }
            return _specialObj;

        };

        var loadDate = function (naturalDate) {
            var resultDateDom;
            //isHoliday Or isSale
            var _specialObj = isSpecialDateFn(naturalDate);
            switch (_specialObj.dateType) {
                case "sale":
                    resultDateDom = jsHelper.strToDom(template.specialDateDom.format(naturalDate.getDate(), _specialObj.dateUrl,
                            (naturalDate.getMonth() + 1) + "月" + naturalDate.getDate() + "日", _specialObj.datePlace, _specialObj.datePrice));
                    break;
                case "holiday":
                    resultDateDom = jsHelper.strToDom(template.holidayDateDom.format(_specialObj.dateDisplay));
                    break;
                default:
                    if (naturalDate.getDate() == 1) {
                        resultDateDom = jsHelper.strToDom(template.holidayDateDom.format((naturalDate.getMonth() + 1) + "月1日"));
                    } else {
                        resultDateDom = jsHelper.strToDom(template.ordinaryDateDom.format(naturalDate.getDate()));
                    }
                    break;
            }

            return resultDateDom;
        };

        var loadGallery = function (fullDate) {

//            var maxDayOfMonth = fullDate.lastDayOfMonth(); //maxDay
//            var firstDayOfMonth = fullDate.firstDayOfMonth(); //firstDay
//            var firstDayWeek = firstDayOfMonth.getDay(); //weekday
            var firstDayWeek = fullDate.getDay(); //weekday

            var calendarDatesDom = jsHelper.strToDom(template.calendarDates);

            //append N emptyDate <li>
            var emptyDateCount = firstDayWeek == 7 ? 0 : firstDayWeek;

            for (var i = 0; i < emptyDateCount; i++) {
                var emptyDateDom = jsHelper.strToDom(template.emptyDateDom);
                calendarDatesDom.appendChild(emptyDateDom);
            }
//
//            for (var s = firstDayOfMonth.getDate(); s <= maxDayOfMonth.getDate() + 1; s++, firstDayOfMonth = firstDayOfMonth.dateAdd("d", 1)) {
//                var dateDom = loadDate(firstDayOfMonth);
//                calendarDatesDom.appendChild(dateDom);
//            }

            for (var count = 0; count <= 29; count++, fullDate = fullDate.dateAdd("d", 1)) {
                var dateDom = loadDate(fullDate);
                calendarDatesDom.appendChild(dateDom);
            }

            var galleryDom = jsHelper.strToDom(template.gallery);

            galleryDom.appendChild(calendarDatesDom);

            var calendarBackImgDom = jsHelper.strToDom(template.calendarBackImg.format(backgroundImg));

            galleryDom.appendChild(calendarBackImgDom);

            return galleryDom;
        };

        var externalLoadGalleries = function (motherDom, startDate, count) {

            startDate == undefined ? new Date() : startDate;

            for (var i = 0; i < count; i++, startDate = startDate.dateAdd("m", 1)) {

                motherDom.appendChild(loadGallery(startDate));
            }
        };

        var loadCalendar = function (imgUrl) {

            saleDayArray = stcGlobal.dataSource[1];
            backgroundImg = imgUrl;

            var galleryContainerDom = jsHelper.strToDom(template.galleryContainer);

            externalLoadGalleries(galleryContainerDom, new Date(), 3);

            var calendarContainerDom = jsHelper.strToDom(template.calendarContainer);

            calendarContainerDom.appendChild(galleryContainerDom);

            return calendarContainerDom;
        };

        return {
            externalLoadGalleries: externalLoadGalleries,
            loadCalendar: loadCalendar
        };

    }
    catch (ex) {
        throw ex;
    }
}();

var createProAd = function () {
    try {
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
    }
    catch (ex) {
        throw ex;
    }
}();

var createTab = function () {
    try {
        var externalLoadTabItem = function (motherDom, ltTabJson) {

            for (var i = 0; i < ltTabJson.length; i++) {

                var tabChildDom = jsHelper.strToDom(template.tabChild.format(ltTabJson[i].tabId, ltTabJson[i].unClickImg, ltTabJson[i].tabId + "_img"));

                tabChildDom.onclick = function () {

                    var _selfCache = stcGlobal.dataSource[0][this.id.substr(3, 1)];

//                    if (document.getElementById(_selfCache.tabId + "_img").src == _selfCache.unClickImg) {
                    if (this.getAttribute("chosen") == "false" || this.getAttribute("chosen") == null) {

                        stcGlobal.status = "waitLoading";

                        for (var i = 0; i < stcGlobal.dataSource[0].length; i++) {
                            if (stcGlobal.dataSource[0][i].tabId != this.id) {
                                document.getElementById(stcGlobal.dataSource[0][i].tabId + "_img").src = stcGlobal.dataSource[0][i].unClickImg;
                                document.getElementById(stcGlobal.dataSource[0][i].tabId).setAttribute("chosen", "false");
                            }
                        }

                        document.getElementById(_selfCache.tabId + "_img").src = _selfCache.clickedImg;


                        //todo get external datasource
//                    stcGlobal.dataSource[1]= ??
//                    stcGlobal.dataSource[2]= ??

                        this.setAttribute("chosen", "true");


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

                        var widthCover = 0;
                        for (var w = 0; w < document.getElementById("galleryContainer").children.length; w++) {
                            widthCover += document.getElementById("galleryContainer").children[w].offsetWidth;
                        }
                        document.getElementById("galleryContainer").style.cssText = "width:" + widthCover + "px";

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

                tabChildDom.onmouseover = function () {

                    var _selfCache = stcGlobal.dataSource[0][this.id.substr(3, 1)];

                    if (this.getAttribute("chosen") == "false" || this.getAttribute("chosen") == null)
                        document.getElementById(_selfCache.tabId + "_img").src = _selfCache.clickedImg;
                };
                tabChildDom.onmouseout = function () {

                    var _selfCache = stcGlobal.dataSource[0][this.id.substr(3, 1)];

                    if (this.getAttribute("chosen") == "false" || this.getAttribute("chosen") == null)
                        document.getElementById(_selfCache.tabId + "_img").src = _selfCache.unClickImg;
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
    }
    catch (ex) {
        throw ex;
    }
}();

var stCalendar = function (callbackJson) {

    try {
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

        var matrixContainerDom = document.getElementById("matrixContainer");//jsHelper.strToDom(template.matrixContainer);

        matrixContainerDom.appendChild(stContainerDom);

        var productContainerDom = jsHelper.strToDom(template.productContainer);

        matrixContainerDom.appendChild(productContainerDom);

//        return matrixContainerDom;
    }
    catch (ex) {
        throw ex;
    }
};

var runFn = function () {
    try {
        window.stcGlobal = new Object();

        stcGlobal.status = undefined;

        stcGlobal.dataSource = undefined;

        stcGlobal.init = stCalendar;


        var callbackJson = {
            "tabLst": [
                {
                    "tabNme": "春游",
                    "pinyin": "ChunYou",
                    "calImg": "http://pic.c-ctrip.com/fltcommon/index/y01_b.jpg",
                    "tabImg1": "http://pic.c-ctrip.com/fltcommon/index/y01_m.jpg",
                    "tabImg2": "http://pic.c-ctrip.com/fltcommon/index/y01_s.jpg"
                },
                {
                    "tabNme": "赏花",
                    "pinyin": "ShangHua",
                    "calImg": "http://pic.c-ctrip.com/fltcommon/index/h01_b.jpg",
                    "tabImg1": "http://pic.c-ctrip.com/fltcommon/index/h01_m.jpg",
                    "tabImg2": "http://pic.c-ctrip.com/fltcommon/index/h01_s.jpg"
                },
                {
                    "tabNme": "五一",
                    "pinyin": "WuYi",
                    "calImg": "http://pic.c-ctrip.com/fltcommon/index/w01_b.jpg",
                    "tabImg1": "http://pic.c-ctrip.com/fltcommon/index/w01_m.jpg",
                    "tabImg2": "http://pic.c-ctrip.com/fltcommon/index/w01_s.jpg"
                },
                {
                    "tabNme": "潜水",
                    "pinyin": "QianShui",
                    "calImg": "http://pic.c-ctrip.com/fltcommon/index/s01_b.jpg",
                    "tabImg1": "http://pic.c-ctrip.com/fltcommon/index/s01_m.jpg",
                    "tabImg2": "http://pic.c-ctrip.com/fltcommon/index/s01_s.jpg"
                },
                {
                    "tabNme": "毕业旅行",
                    "pinyin": "BiYeLvXing",
                    "calImg": "http://pic.c-ctrip.com/fltcommon/index/x01_b.jpg",
                    "tabImg1": "http://pic.c-ctrip.com/fltcommon/index/x01_m.jpg",
                    "tabImg2": "http://pic.c-ctrip.com/fltcommon/index/x01_s.jpg"
                }
            ],
            "caleLst": [
                {
                    "acNme": "长沙",
                    "acCde": "CSX",
                    "date": "2015-04-24T00:00:00",
                    "price": {
                        "amt": 180,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/booking/SHA-CSX-day-1.html?ddate=2015-04-24#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "三亚",
                    "acCde": "SYX",
                    "date": "2015-04-25T00:00:00",
                    "price": {
                        "amt": 740,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/booking/SHA-SYX-day-1.html?ddate=2015-04-25#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "台北",
                    "acCde": "TPE",
                    "date": "2015-04-29T00:00:00",
                    "price": {
                        "amt": 48,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/international/FlightResult.aspx?flighttype=S&relddate=2015-04-29&dcity=SHA&acity=TPE#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "首尔",
                    "acCde": "SEL",
                    "date": "2015-05-09T00:00:00",
                    "price": {
                        "amt": 106,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/international/FlightResult.aspx?flighttype=S&relddate=2015-05-09&dcity=SHA&acity=SEL#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "厦门",
                    "acCde": "XMN",
                    "date": "2015-05-21T00:00:00",
                    "price": {
                        "amt": 50,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/booking/SHA-XMN-day-1.html?ddate=2015-05-21#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "武汉",
                    "acCde": "WUH",
                    "date": "2015-05-26T00:00:00",
                    "price": {
                        "amt": 240,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/booking/SHA-WUH-day-1.html?ddate=2015-05-26#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "东京",
                    "acCde": "TYO",
                    "date": "2015-05-27T00:00:00",
                    "price": {
                        "amt": 56,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/international/FlightResult.aspx?flighttype=S&relddate=2015-05-27&dcity=SHA&acity=TYO#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "厦门",
                    "acCde": "XMN",
                    "date": "2015-05-29T00:00:00",
                    "price": {
                        "amt": 300,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/booking/SHA-XMN-day-1.html?ddate=2015-05-29#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "成都",
                    "acCde": "CTU",
                    "date": "2015-05-30T00:00:00",
                    "price": {
                        "amt": 150,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/booking/SHA-CTU-day-1.html?ddate=2015-05-30#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "台北",
                    "acCde": "TPE",
                    "date": "2015-05-31T00:00:00",
                    "price": {
                        "amt": 312,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/international/FlightResult.aspx?flighttype=S&relddate=2015-05-31&dcity=SHA&acity=TPE#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "首尔",
                    "acCde": "SEL",
                    "date": "2015-06-24T00:00:00",
                    "price": {
                        "amt": 106,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/international/FlightResult.aspx?flighttype=S&relddate=2015-06-24&dcity=SHA&acity=SEL#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "昆明",
                    "acCde": "KMG",
                    "date": "2015-06-27T00:00:00",
                    "price": {
                        "amt": 300,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/booking/SHA-KMG-day-1.html?ddate=2015-06-27#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "曼谷",
                    "acCde": "BKK",
                    "date": "2015-07-12T00:00:00",
                    "price": {
                        "amt": 135,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/international/FlightResult.aspx?flighttype=S&relddate=2015-07-12&dcity=SHA&acity=BKK#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                },
                {
                    "acNme": "东京",
                    "acCde": "TYO",
                    "date": "2015-07-21T00:00:00",
                    "price": {
                        "amt": 57,
                        "currency": "CNY",
                        "type": "MIN"
                    },
                    "url": "http://flights.ctrip.com/international/FlightResult.aspx?flighttype=S&relddate=2015-07-21&dcity=SHA&acity=TYO#ctm_ref=ctr_flt_ad_i",
                    "dcCde": "SHA",
                    "dcNme": "上海"
                }
            ],
            "prdLst": [
                {
                    "nme": "趁青春去旅行",
                    "img": "http://images3.c-ctrip.com/rk/201503/jp220175_1.jpg",
                    "lnk": "http://events.ctrip.com/flight/xinnianxinchufa.html#ctm_ref=ctr_flt_ad_i",
                    "price": {
                        "amt": 59,
                        "currency": "CNY",
                        "type": "MIN"
                    }
                },
                {
                    "nme": "周末机票200封顶",
                    "img": "http://images3.c-ctrip.com/rk/201503/jp220175_4.jpg",
                    "lnk": "http://events.ctrip.com/flight/zhoumotehui200yuanfengding.html#ctm_ref=ctr_flt_ad_i",
                    "price": {
                        "amt": 100,
                        "currency": "CNY",
                        "type": "MIN"
                    }
                }
            ],
            "adLst": [
                {
                    "alt": "2222",
                    "img": "http://images3.c-ctrip.com/rk/201503/jp220175_4.jpg",
                    "lnk": "http://mgr.release.ctripcorp.com/ropv2/ropeditor/?ropid=86705#ctm_ref=ctr_flt_ad_i"
                }
            ]
        };

        stcGlobal.init(callbackJson);

//        document.getElementById("test").appendChild(resultDom);

        document.getElementById("tab0").onclick();

        var watchStatus = setInterval(function () {

            if (stcGlobal.status == "fail") {
                throw "stcGlobal error";
                clearInterval(watchStatus);
            } else if (stcGlobal.status == "success") {
                clearInterval(watchStatus);
            }
        }, 10);
    }
    catch (ex) {
        throw ex;
    }
};

runFn();