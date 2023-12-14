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
        var loginRuleText = document.querySelector("#loginRuleText");
        if (loginRuleText) {
            loginRuleText.style.display = "none";
        }
    };
    LoginPage.prototype.openErrorMessage = function (ruleText, msg) {
        if (ruleText) {
            ruleText.style.display = "block";
            ruleText.classList.add("error-text");
            ruleText.innerText = msg;
        }
    };
    LoginPage.prototype.render = function () {
        if (this.contents) {
            this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-center-flex-layout gap-level-10\">\n                    <article class=\"box-layout padding-level-10 column-top-center-flex-layout gap-level-8 item-1-layout\" style=\"width: 480px;\">\n                        <div class=\"row-top-center-flex-layout\">\n                            <h1 class=\"title-text bold-text\">\uB85C\uADF8\uC778</h1>\n                        </div>\n                        <div class=\"column-top-stretch-flex-layout gap-level-6\">\n                            <div class=\"column-top-stretch-flex-layout item-1-layout gap-level-4\">\n                                <input type=\"text\" id=\"loginId\" class=\"padding-level-5\" placeholder=\"\uC544\uC774\uB514\" maxlength=\"16\">\n                                <div class=\"column-top-left-flex-layout item-1-layout gap-level-3\">\n                                    <input type=\"password\" id=\"loginPassword\" class=\"padding-level-5\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" maxlength=\"16\">\n                                    <span id=\"loginRuleText\" class=\"error-text\" style=\"display: none;\">\uC544\uC774\uB514 \uB610\uB294 \uBE44\uBC00\uBC88\uD638\uC758 \uD615\uC2DD\uC774 \uC62C\uBC14\uB974\uC9C0 \uC54A\uC2B5\uB2C8\uB2E4.</span>\n                                    <label class=\"row-middle-left-flex-layout gap-level-2\"><input type=\"checkbox\" id=\"autoLoginCheckbox\">\uC790\uB3D9 \uB85C\uADF8\uC778</label>\n                                </div>\n                            </div>\n                            <div class=\"column-top-stretch-flex-layout item-1-layout gap-level-4\">\n                                <button id=\"loginButton\" class=\"padding-level-5\">\uB85C\uADF8\uC778</button>\n                                <button id=\"joinButton\" class=\"padding-level-5\">\uD68C\uC6D0\uAC00\uC785</button>\n                            </div>\n                        </div>\n                    </article>\n                </section>";
        }
    };
    LoginPage.prototype.bindingEvents = function () {
        var _this = this;
        var loginRuleText = document.querySelector("#loginRuleText");
        var loginId = document.querySelector("#loginId");
        var loginPassword = document.querySelector("#loginPassword");
        var autoLoginCheckbox = document.querySelector("#autoLoginCheckbox");
        var loginButton = document.querySelector("#loginButton");
        var joinButton = document.querySelector("#joinButton");
        loginId === null || loginId === void 0 ? void 0 : loginId.addEventListener("focus", this.closeErrorMessage);
        loginPassword === null || loginPassword === void 0 ? void 0 : loginPassword.addEventListener("focus", this.closeErrorMessage);
        loginButton === null || loginButton === void 0 ? void 0 : loginButton.addEventListener("click", function () {
            if (!(loginId === null || loginId === void 0 ? void 0 : loginId.value)) {
                _this.openErrorMessage(loginRuleText, API_RESULT_CODE[400]);
            }
            else if (!(loginPassword === null || loginPassword === void 0 ? void 0 : loginPassword.value)) {
                _this.openErrorMessage(loginRuleText, API_RESULT_CODE[400]);
            }
            else {
                postFetch("users/login", { id: loginId.value, pass: loginPassword.value, auto: autoLoginCheckbox && autoLoginCheckbox.checked ? 1 : 0 })
                    .then(function (result) {
                    if (result.result.code == 100) {
                        navigate("main");
                    }
                    else {
                        _this.openErrorMessage(loginRuleText, API_RESULT_CODE[result.result.code]);
                    }
                })
                    .catch(function (e) { return alert("error msg : " + e); });
            }
        });
        joinButton === null || joinButton === void 0 ? void 0 : joinButton.addEventListener("click", function () { return navigate("join"); });
    };
    return LoginPage;
}(Page));
