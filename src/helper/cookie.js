define(['webConsole'], function (webConsole) {

    //读取cookies 
    var getCookie = function (name) {
        var arr, reg = new RegExp("(^| )" + name + "=([^;]*)(;|$)");

        if (arr = document.cookie.match(reg))

            return unescape(arr[2]);
        else
            return null;
    };

    var loggedFn = function () {
        try {
            var logged = false;
            var ticket = getCookie("ticket_ctrip");
            if (ticket != undefined)
                logged = true;

            window.COSB.logged = logged;
        }
        catch (ex) {
            webConsole.error(ex.message, "loggedFn");
        }
    };

    return {
        get: getCookie,
        logged: loggedFn
    };
});

