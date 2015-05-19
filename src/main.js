/**
 * Created by jl.gu on 2015/4/16.
 */
var thirdPartyPath = "third-party/",
    helperPath = "helper/",
    corePath = "core/";

require.config({
    baseUrl: 'src/',
    shim: {
        store: {
            exports: "store"
        },
        mootools: {
            exports: "mootools"
        }
    },
    paths: {
        //thirdParty
        'mootools': thirdPartyPath + 'mootools',
        'store': thirdPartyPath + 'store',

        //helper
        'expansion': helperPath + 'expansion',
        'jsHelper': helperPath + 'jsHelper',

        //core
        'animate': corePath + 'animate',
        'createCalendar': corePath + 'createCalendar',
        'createTab': corePath + 'createTab',
        'createProAd': corePath + 'createProAd',
        'template': corePath + 'template',
        'stCalendar': corePath + 'stCalendar',
        'dataFilter': corePath + 'dataFilter',
        'holidayList': corePath + 'holidayList'
    }
});
require(['stCalendar'], function (stCalendar) {

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

            var resultDom = stcGlobal.init(callbackJson);

            document.getElementById("test").appendChild(resultDom);

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

    }
);