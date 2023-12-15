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
var JoinPage = /** @class */ (function (_super) {
    __extends(JoinPage, _super);
    function JoinPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JoinPage.prototype.closeErrorMessage = function () {
        var joinIdRuleText = document.querySelector("#joinIdRuleText");
        if (joinIdRuleText) {
            joinIdRuleText.classList.remove("error-text");
            joinIdRuleText.innerText = "아이디는 영문/숫자로 이루어진 8~16자 문자로 구성되어야 합니다.";
        }
        var joinPasswordRuleText = document.querySelector("#joinPasswordRuleText");
        if (joinPasswordRuleText) {
            joinPasswordRuleText.classList.remove("error-text");
            joinPasswordRuleText.innerText = "비밀번호는 영문/숫자로 이루어진 8~16자 문자로 구성되어야 합니다.";
        }
        var joinNameRuleText = document.querySelector("#joinNameRuleText");
        if (joinNameRuleText) {
            joinNameRuleText.classList.remove("error-text");
            joinNameRuleText.innerText = "이름은 3~12자 문자로 구성되어야 합니다.";
        }
    };
    JoinPage.prototype.openErrorMessage = function (ruleText, msg) {
        if (ruleText) {
            ruleText.classList.add("error-text");
            ruleText.innerText = msg;
        }
    };
    JoinPage.prototype.render = function () {
        if (this.contents) {
            this.contents.innerHTML = "\n                <section class=\"container-layout limited-width padding-level-12 column-top-center-flex-layout gap-level-10\">\n                    <article class=\"box-layout padding-level-10 column-top-center-flex-layout gap-level-8 item-1-layout\" style=\"width: 480px;\">\n                        <div class=\"row-top-center-flex-layout\">\n                            <h1 class=\"title-text bold-text\">\uD68C\uC6D0\uAC00\uC785</h1>\n                        </div>\n                        <div class=\"column-top-stretch-flex-layout gap-level-6 item-1-layout\">\n                            <div class=\"column-top-stretch-flex-layout item-1-layout gap-level-4\">\n                                <div class=\"column-top-left-flex-layout item-1-layout gap-level-3\">\n                                    <input type=\"text\" id=\"joinId\" class=\"padding-level-5\" placeholder=\"\uC544\uC774\uB514\" name=\"joinId\" maxlength=\"16\" autocomplete=\"off\">\n                                    <span id=\"joinIdRuleText\">\uC544\uC774\uB514\uB294 \uC601\uBB38/\uC22B\uC790\uB85C \uC774\uB8E8\uC5B4\uC9C4 8~16\uC790 \uBB38\uC790\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</span>\n                                </div>\n            \n                                <input type=\"password\" id=\"joinPassword\" class=\"padding-level-5\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" name=\"joinPassword\" maxlength=\"16\" autocomplete=\"off\">\n            \n                                <div class=\"column-top-left-flex-layout item-1-layout gap-level-3\">\n                                    <input type=\"password\" id=\"joinConfirmPassword\" class=\"padding-level-5\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" maxlength=\"16\" autocomplete=\"off\">\n                                    <span id=\"joinPasswordRuleText\">\uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38/\uC22B\uC790\uB85C \uC774\uB8E8\uC5B4\uC9C4 8~16\uC790 \uBB38\uC790\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</span>\n                                </div>\n            \n                                <div class=\"column-top-left-flex-layout item-1-layout gap-level-3\">\n                                    <input type=\"text\" id=\"joinName\" class=\"padding-level-5\" placeholder=\"\uC774\uB984\" maxlength=\"12\" autocomplete=\"off\">\n                                    <span id=\"joinNameRuleText\">\uC774\uB984\uC740 3~12\uC790 \uBB38\uC790\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</span>\n                                </div>\n                            </div>\n        \n                            <button id=\"joinButton\" class=\"padding-level-5\">\uD68C\uC6D0\uAC00\uC785</button>\n                        </div>\n                    </article>\n                </section>";
        }
    };
    JoinPage.prototype.bindingEvents = function () {
        var _this = this;
        if (this.contents) {
            var joinId = document.querySelector("#joinId");
            var joinPassword = document.querySelector("#joinPassword");
            var joinConfirmPassword = document.querySelector("#joinConfirmPassword");
            var joinName = document.querySelector("#joinName");
            var joinIdRuleText = document.querySelector("#joinIdRuleText");
            var joinPasswordRuleText = document.querySelector("#joinPasswordRuleText");
            var joinNameRuleText = document.querySelector("#joinNameRuleText");
            var joinButton = document.querySelector("#joinButton");
            joinId === null || joinId === void 0 ? void 0 : joinId.addEventListener("focus", this.closeErrorMessage);
            joinId === null || joinId === void 0 ? void 0 : joinId.addEventListener("focusout", function () {
                if (!(joinId === null || joinId === void 0 ? void 0 : joinId.value) || joinId.value.replace(/[a-zA-Z0-9]/g, "").length || joinId.value.length < 8 || joinId.value.length > 16 || !/[a-zA-Z]/.test(joinId.value) || !/[0-9]/.test(joinId.value)) {
                    return;
                }
                getFetch("users", "id=" + joinId.value + "&type=idCheck")
                    .then(function (result) {
                    if (result.result.code == 104) {
                        _this.openErrorMessage(joinIdRuleText, "아이디가 중복됩니다.");
                    }
                    else if (result.result.code == 402) {
                        _this.openErrorMessage(joinNameRuleText, API_RESULT_CODE[402]);
                    }
                })
                    .catch(function (e) { return alert("error msg : " + e); });
            });
            joinPassword === null || joinPassword === void 0 ? void 0 : joinPassword.addEventListener("focus", this.closeErrorMessage);
            joinConfirmPassword === null || joinConfirmPassword === void 0 ? void 0 : joinConfirmPassword.addEventListener("focus", this.closeErrorMessage);
            joinName === null || joinName === void 0 ? void 0 : joinName.addEventListener("focus", this.closeErrorMessage);
            joinButton === null || joinButton === void 0 ? void 0 : joinButton.addEventListener("click", function () {
                var isError = false;
                if (!(joinId === null || joinId === void 0 ? void 0 : joinId.value)) {
                    _this.openErrorMessage(joinIdRuleText, API_RESULT_CODE[402]);
                    isError = true;
                }
                else if (joinId.value.replace(/[a-zA-Z0-9]/g, "").length || joinId.value.length < 8 || joinId.value.length > 16 || !/[a-zA-Z]/.test(joinId.value) || !/[0-9]/.test(joinId.value)) {
                    _this.openErrorMessage(joinIdRuleText, API_RESULT_CODE[406]);
                    isError = true;
                }
                if (!(joinPassword === null || joinPassword === void 0 ? void 0 : joinPassword.value)) {
                    _this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[403]);
                    isError = true;
                }
                else if (!(joinConfirmPassword === null || joinConfirmPassword === void 0 ? void 0 : joinConfirmPassword.value)) {
                    _this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[404]);
                    isError = true;
                }
                else if (joinPassword.value.replace(/[a-zA-Z0-9]/g, "").length || joinPassword.value.length < 8 || joinPassword.value.length > 16 || !/[a-zA-Z]/.test(joinPassword.value) || !/[0-9]/.test(joinPassword.value)) {
                    _this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[407]);
                    isError = true;
                }
                else if (joinConfirmPassword.value.replace(/[a-zA-Z0-9]/g, "").length || joinConfirmPassword.value.length < 8 || joinConfirmPassword.value.length > 16 || !/[a-zA-Z]/.test(joinConfirmPassword.value) || !/[0-9]/.test(joinConfirmPassword.value)) {
                    _this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[408]);
                    isError = true;
                }
                else if (joinPassword.value != joinConfirmPassword.value) {
                    _this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[426]);
                    isError = true;
                }
                if (!(joinName === null || joinName === void 0 ? void 0 : joinName.value)) {
                    _this.openErrorMessage(joinNameRuleText, API_RESULT_CODE[405]);
                    isError = true;
                }
                else if (joinName.value.length < 3 || joinName.value.length > 12) {
                    _this.openErrorMessage(joinNameRuleText, API_RESULT_CODE[409]);
                    isError = true;
                }
                if (!isError) {
                    postFetch("users", { id: joinId === null || joinId === void 0 ? void 0 : joinId.value, pass: joinPassword === null || joinPassword === void 0 ? void 0 : joinPassword.value, passCheck: joinConfirmPassword === null || joinConfirmPassword === void 0 ? void 0 : joinConfirmPassword.value, nickname: joinName === null || joinName === void 0 ? void 0 : joinName.value })
                        .then(function (result) {
                        if (result.result.code == 103) {
                            postFetch("users/login", { id: joinId === null || joinId === void 0 ? void 0 : joinId.value, pass: joinPassword === null || joinPassword === void 0 ? void 0 : joinPassword.value })
                                .then(function (result) { return navigate("main"); })
                                .catch(function (e) { return alert("error msg : " + e); });
                        }
                        else if (result.result.code == 402 || result.result.code == 406 || result.result.code == 410) {
                            _this.openErrorMessage(joinIdRuleText, API_RESULT_CODE[result.result.code]);
                        }
                        else if (result.result.code == 403 || result.result.code == 404 || result.result.code == 407 || result.result.code == 408 || result.result.code == 426) {
                            _this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[result.result.code]);
                        }
                        else if (result.result.code == 405 || result.result.code == 409) {
                            _this.openErrorMessage(joinNameRuleText, API_RESULT_CODE[result.result.code]);
                        }
                    })
                        .catch(function (e) { return alert("error msg : " + e); });
                }
            });
        }
    };
    return JoinPage;
}(Page));
