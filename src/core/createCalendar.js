/**
 * Created by jl.gu on 2015/4/13.
 */
define(["expansion", "template", "jsHelper", "holidayList"], function (expansion, template, jsHelper, holidayList) {

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

                    var saleDay = new Date(saleDayArray[i].date).format("yyyy-MM-dd");

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
                        naturalDate.getDate(), _specialObj.datePlace, _specialObj.datePrice));
                    break;
                case "holiday":
                    resultDateDom = jsHelper.strToDom(template.ordinaryDateDom.format(_specialObj.dateDisplay));
                    break;
                default:
                    if (naturalDate.getDate() == 1) {

                    }
                    resultDateDom = jsHelper.strToDom(template.ordinaryDateDom.format(naturalDate.getDate() == 1 ? (naturalDate.getMonth() + 1) + "月1日" : naturalDate.getDate()));
                    break;
            }

            return resultDateDom;
        };

        var loadGallery = function (fullDate) {

            var maxDayOfMonth = fullDate.lastDayOfMonth(); //maxDay

            var firstDayOfMonth = fullDate.firstDayOfMonth(); //firstDay

            var firstDayWeek = firstDayOfMonth.getDay(); //weekday

            var calendarDatesDom = jsHelper.strToDom(template.calendarDates);

            //append N emptyDate <li>
            var emptyDateCount = firstDayWeek == 7 ? 0 : firstDayWeek;

            for (var i = 0; i < emptyDateCount; i++) {
                var emptyDateDom = jsHelper.strToDom(template.emptyDateDom);
                calendarDatesDom.appendChild(emptyDateDom);
            }

//            var naturalDate = new Date(fullDate.getTime());
            for (var s = firstDayOfMonth.getDate(); s <= maxDayOfMonth.getDate(); s++, firstDayOfMonth = firstDayOfMonth.dateAdd("d", 1)) {
                var dateDom = loadDate(firstDayOfMonth);
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
);

