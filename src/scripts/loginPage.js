var LoginPage = /** @class */ (function () {
    function LoginPage(container) {
        this.container = document.getElementById(container);
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
        if (this.container) {
            this.container.innerHTML = "\n            <article class=\"login\" style=\"display: flex; justify-content: center; padding: 56px;\">\n                <div class=\"inline-box\" style=\"max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;\">\n                    <span style=\"display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;\">\uB85C\uADF8\uC778</span>\n                    <input type=\"text\" id=\"id\" placeholder=\"\uC544\uC774\uB514\" maxlength=\"16\" style=\"margin-top: 52px; width: 300px; max-width: 100%;\">\n                    <input type=\"password\" id=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" maxlength=\"16\" style=\"margin-top: 24px;\">\n                    <span class=\"error\" style=\"display: none; color: red; margin-top: 12px;\">\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uAC00 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span>\n                    <label style=\"display: flex; align-items: center; margin-top: 24px;\"><input type=\"checkbox\" id=\"auto\" style=\"margin-right: 12px;\">\uC790\uB3D9 \uB85C\uADF8\uC778</label>\n                    <button id=\"loginButton\" style=\"background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px;\">\uB85C\uADF8\uC778</button>\n                    <button style=\"background: #5288F1; border: none; color: #F1F1F1; margin-top: 24px;\">\uD68C\uC6D0\uAC00\uC785</button>\n                </div>\n            </article>";
        }
    };
    LoginPage.prototype.updateEvents = function () {
        var _this = this;
        var _a;
        if (this.container) {
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
                    LoginManager.login({ id: id.value, pass: password.value, auto: auto.checked ? 1 : 0 });
                }
            });
        }
    };
    LoginPage.prototype.init = function () {
        this.render();
        this.updateEvents();
    };
    return LoginPage;
}());
