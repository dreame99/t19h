var LoginManager = /** @class */ (function () {
    function LoginManager() {
    }
    LoginManager.login = function (data) {
        fetch(this.LOGIN_URI, {
            method: "POST",
            body: JSON.stringify(data),
        })
            .then(function (response) { return response.json(); })
            .then(function (result) {
            result = {
                result: "success",
                data: {
                    name: "차영운",
                    skill: ["HTML"],
                    study: [],
                    profile: ""
                }
            };
            if (result.resultCode == 100) {
                // login success
            }
            else if (result.resultCode == 200) {
                // login fail
            }
        });
    };
    LoginManager.logout = function () {
        fetch(this.LOGOUT_URI, { method: "POST" })
            .then(function (response) { return response.json(); })
            .then(function (result) {
            result = {
                result: "success",
                data: {
                    name: "차영운",
                    skill: ["HTML"],
                    study: [],
                    profile: ""
                }
            };
            if (result.resultCode == 100) {
                // logout success
            }
            else if (result.resultCode == 200) {
                // logout fail
            }
        });
    };
    LoginManager.isLogin = function () {
        var value = document.cookie.match('(^|;) ?' + "SESSIONID" + '=([^;]*)(;|$)');
        return !!value;
    };
    LoginManager.LOGIN_URI = "https://reqres.in/api/login";
    LoginManager.LOGOUT_URI = "https://reqres.in/api/logout";
    return LoginManager;
}());
