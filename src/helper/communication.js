define(['cQuery', 'webConsole'], function (cQuery, webConsole) {

    /**
	 * AJAX POST方式访问接口
	 */
    var ajaxPostFn = function (url, data, callback) {

        var option = {
            method: 'POST',
            timeout: 30000, //超时时间
            context: 'string' || {},
            escape: false,
            async: true,
            cache: false,
            onerror: function (response) {
                webConsole.error(errorInfo, "postError");
                return;
            },
            onabort: function () {
                webConsole.error(abortInfo, "postAbort");
                return;
            },
            onsuccess: function (response) {

                if (response.responseText == 'Sys_Login_Time_Out') {
                    webConsole.error(response.responseText, "post" + url);
                    return;
                }
                else if (response.responseText == "HandlerFail") {
                    webConsole.error(response.responseText, "post" + url);
                    return;
                }

                callback.successFn(response.responseText);
            }
        };

        cQuery.extend(oopt, copt);

        oopt.method = 'POST';
        oopt.context = data;

        var xhr = cQuery.ajax(url, oopt);

        setTimeout(function () {
            if (xhr.readyState !== 4) {
                xhr.abort();
            }
        }, option.timeout);
    };

    function contract(status, responseObj) {
        this.status = status; //error||unlogged
        this.responseObj = responseObj;
    };
    contract.prototype = {
        constructor:contract
    };

    if (window.COSB && window.COSB.jsonp) {
        window.COSB.jsonp.callback = function (responseObj) {
            try {
                if (responseObj && responseObj.Result && responseObj.Result.ResultCode != undefined) { //契约调用
                    if (responseObj.Result.ResultCode == -88 || responseObj.Result.ResultCode == -77) {

                        //跳登录页?
                        var lostPassport = new contract("unlogged", "");
                        if (window.COSB.jsonp.bizCallback && window.COSB.jsonp.bizCallback.failFn)
                            window.COSB.jsonp.bizCallback.failFn(lostPassport);

                        webConsole.log("logging timeout", "jsonpCallback");
                    }
                    else if (responseObj.Result.ResultCode == -1 || responseObj.Result.ResultCode == -66 || responseObj.Result.ResultCode == -99) {
                        //service error
                        var serviceError = new contract("error", "");
                        if (window.COSB.jsonp.bizCallback && window.COSB.jsonp.bizCallback.failFn)
                            window.COSB.jsonp.bizCallback.failFn(serviceError);
                        webConsole.log("service is error", "jsonpCallback");

                    }
                    else if (responseObj.Result.ResultCode == 0) {

                        if (window.COSB.jsonp.bizCallback && window.COSB.jsonp.bizCallback.sucFn)
                            window.COSB.jsonp.bizCallback.sucFn(responseObj);

                    } else {
                        //unknown code
                        var serviceError = new contract("error", "");
                        if (window.COSB.jsonp.bizCallback && window.COSB.jsonp.bizCallback.failFn)
                            window.COSB.jsonp.bizCallback.failFn(serviceError);
                        webConsole.error("unknown resultCode", "jsonpCallback");
                    }
                }
                else { //非契约调用

                    if (window.COSB.jsonp.bizCallback && window.COSB.jsonp.bizCallback.sucFn)
                        window.COSB.jsonp.bizCallback.sucFn(responseObj);
                }
            }
            catch (ex) {
                webConsole.error(ex.message, "jsonpCallback");
            }
        };
    }

    var jsonpScriptFn = function (url, bizCallback) {
        var jsonpScript = document.createElement('script');
        jsonpScript.src = url;
        document.body.appendChild(jsonpScript);
        if (window.COSB.jsonp)
            window.COSB.jsonp.bizCallback = bizCallback;
    };

    return {
        ajaxPost: ajaxPostFn,
        jsonpScript: jsonpScriptFn
    }


});


//communication.jsonpScript("./Handlers/OrderGroupCountsHandler.ashx?callback=COSB.jsonp.callback", function (a) {
//    console.log(a + 456);
//});