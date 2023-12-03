var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LoginPage.prototype.closeErrorMessage = function () {
        var errorMessage = document.querySelector(".login .error");
        if (errorMessage) {
            errorMessage.style.display = "none";
        }
    };
    LoginPage.prototype.openErrorMessage = function (msg) {
        var errorMessage = document.querySelector(".login .error");
        if (errorMessage) {
            if (msg) {
                errorMessage.innerText = msg;
            }
            errorMessage.style.display = "block";
        }
    };
    LoginPage.prototype.render = function () {
        if (this.contents) {
            this.contents.innerHTML = "\n            <article class=\"login\" style=\"display: flex; justify-content: center; padding: 56px;\">\n                <div class=\"inline-box\" style=\"max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;\">\n                    <span style=\"display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;\">\uB85C\uADF8\uC778</span>\n                    <input type=\"text\" id=\"id\" placeholder=\"\uC544\uC774\uB514\" maxlength=\"16\" style=\"margin-top: 52px; width: 300px; max-width: 100%;\">\n                    <input type=\"password\" id=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" maxlength=\"16\" style=\"margin-top: 24px;\">\n                    <span class=\"error\" style=\"display: none; color: red; margin-top: 12px;\">\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span>\n                    <label style=\"display: flex; align-items: center; margin-top: 24px;\"><input type=\"checkbox\" id=\"auto\" style=\"margin-right: 12px;\">\uC790\uB3D9 \uB85C\uADF8\uC778</label>\n                    <button id=\"loginButton\" style=\"background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px;\">\uB85C\uADF8\uC778</button>\n                    <button id=\"joinButton\" style=\"background: #5288F1; border: none; color: #F1F1F1; margin-top: 24px;\">\uD68C\uC6D0\uAC00\uC785</button>\n                </div>\n            </article>";
        }
    };
    LoginPage.prototype.bindingEvents = function () {
        var _this = this;
        var _a, _b;
        if (this.contents) {
            var inputElements = document.querySelectorAll("input");
            inputElements.forEach(function (inputElement) {
                inputElement.addEventListener("click", _this.closeErrorMessage);
            });
            (_a = document.getElementById("loginButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                var id = document.getElementById("id");
                var password = document.getElementById("password");
                var auto = document.getElementById("auto");
                if (!id.value) {
                    _this.openErrorMessage("아이디 또는 비밀번호가 입력되지 않았습니다.");
                }
                else if (!password.value) {
                    _this.openErrorMessage("아이디 또는 비밀번호가 입력되지 않았습니다.");
                }
                else {
                    var API_URL = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app";
                    var LOGIN_URI = "/user/login";
                    fetch(API_URL + LOGIN_URI, {
                        headers: {
                            'Accept': 'application/json, text/plain',
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        method: "POST",
                        body: JSON.stringify({ id: id.value, pass: password.value, auto: auto.checked ? 1 : 0 }),
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (result) {
                        console.log(result);
                        if (result.result.code == 100) {
                            // success login
                            navigate("main");
                        }
                        else if (result.result.code == 400) {
                            // id or password null error
                            _this.openErrorMessage("아이디 또는 비밀번호가 입력되지 않았습니다.");
                        }
                        else if (result.result.code == 401) {
                            // id or password match error
                            _this.openErrorMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
                        }
                    })
                        .catch(function (e) {
                        alert("error : " + e);
                    });
                }
            });
            (_b = document.getElementById("joinButton")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () {
                navigate("join");
            });
        }
    };
    LoginPage.prototype.init = function () {
        this.render();
        this.bindingEvents();
    };
    return LoginPage;
}(Page));
