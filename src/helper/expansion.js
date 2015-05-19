define(function () {

    return function () {

        /**
         * string.contains
         * @method
         * @for String
         * @param {string} containStr 包含值
         * @return {bool} true:包含 ； false:不包含
         */
        String.prototype.contains = function (containStr) {
            return this.indexOf(containStr) > -1 ? true : false;
        };

        /**
         * string判空
         * @method
         * @for String
         * @param
         * @return {bool} true:空 ； false:非空
         */
        String.prototype.isNull = function () {
            return this == null || this.trim().length == 0;
        };

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
        }

        /**
         * string判空
         * @method
         * @for String
         * @param
         * @return {bool} true:空 ； false:非空
         */
        Number.prototype.isNull = function () {
            return this == null || isNaN(this);
        };

        Array.prototype.contains = function (item) {
            return RegExp("\\b" + item + "\\b").test(this);
        };

        Array.prototype.sortBy = function (sortKey) {

            this.sort(function (x, y) {
                return x[sortKey] > y[sortKey] ? 1 : -1;
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
        }
    }();
});