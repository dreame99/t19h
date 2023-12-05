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
var RESULT = {
    100: "success login",
    101: "login",
    102: "logout",
    103: "Join successful",
    104: "Search sucessful",
    105: "Logout seccess",
    400: "id or password null error",
    401: "id or password match error",
    402: "ID not entered",
    403: "Password not entered",
    404: "Password verification not entered",
    405: "Name not entered",
    406: "ID format mismatch",
    407: "Password format mismatch",
    408: "Password verification mismatch",
    409: "Name format mismatch",
    410: "ID duplication",
    411: "Search fail",
};
var JoinPage = /** @class */ (function (_super) {
    __extends(JoinPage, _super);
    function JoinPage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    JoinPage.prototype.closeErrorMessage = function (errorMessage) {
        //errorMessage.style.display = "none";
        errorMessage.style.color = "black";
    };
    JoinPage.prototype.openErrorMessage = function (errorMessage, msg) {
        if (msg) {
            errorMessage.innerText = msg;
        }
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
    };
    JoinPage.prototype.render = function () {
        if (this.contents) {
            this.contents.innerHTML = "\n            <article class=\"join\" style=\"display: flex; justify-content: center; padding: 56px;\">\n                <div class=\"inline-box\" style=\"max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;\">\n                    <span style=\"display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;\">\uD68C\uC6D0\uAC00\uC785</span>\n                    <input type=\"text\" id=\"id\" placeholder=\"\uC544\uC774\uB514\" maxlength=\"16\" style=\"margin-top: 52px; width: 300px; max-width: 100%;\">\n                    <span id=\"errorMessage1\" class=\"error\" style=\"margin-top: 12px; width: 300px;\">\uC544\uC774\uB514\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uB85C \uC774\uB8E8\uC5B4\uC9C4 8 ~ 16\uC790 \uBB38\uC790\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</span>\n                    <input type=\"password\" id=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" maxlength=\"16\" style=\"margin-top: 24px; width: 300px; max-width: 100%;\">\n                    <input type=\"password\" id=\"confirmPassword\" placeholder=\"\uBE44\uBC00\uBC88\uD638 \uD655\uC778\" maxlength=\"16\" style=\"margin-top: 24px; width: 300px; max-width: 100%;\">\n                    <span id=\"errorMessage2\" class=\"error\" style=\"margin-top: 12px; width: 300px;\">\uBE44\uBC00\uBC88\uD638\uB294 \uC601\uBB38\uACFC \uC22B\uC790\uB85C \uC774\uB8E8\uC5B4\uC9C4 8 ~ 16\uC790 \uBB38\uC790\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</span>\n                    <input type=\"text\" id=\"name\" placeholder=\"\uB2C9\uB124\uC784\" maxlength=\"12\" style=\"margin-top: 24px; width: 300px; max-width: 100%;\">\n                    <span id=\"errorMessage3\" class=\"error\" style=\"margin-top: 12px; width: 300px;\">\uB2C9\uB124\uC784\uC740 3 ~ 12\uC790 \uBB38\uC790\uB85C \uAD6C\uC131\uB418\uC5B4\uC57C \uD569\uB2C8\uB2E4.</span>\n                    <button id=\"joinButton\" style=\"background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px; width: 300px; max-width: 100%;\">\uAC00\uC785\uD558\uAE30</button>\n                </div>\n            </article>";
        }
    };
    JoinPage.prototype.bindingEvents = function () {
        var _this = this;
        var _a;
        if (this.contents) {
            var id = document.getElementById("id");
            var password = document.getElementById("password");
            var confirmPassword = document.getElementById("confirmPassword");
            var name = document.getElementById("name");
            var errorMessage1 = document.getElementById("errorMessage1");
            var errorMessage2 = document.getElementById("errorMessage2");
            var errorMessage3 = document.getElementById("errorMessage3");
            id.onfocus = function () { return _this.closeErrorMessage(errorMessage1); };
            password.onfocus = function () { return _this.closeErrorMessage(errorMessage2); };
            confirmPassword.onfocus = function () { return _this.closeErrorMessage(errorMessage2); };
            name.onfocus = function () { return _this.closeErrorMessage(errorMessage3); };
            id.onblur = function () {
                fetch("https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/user?" + new URLSearchParams({ id: id.value }).toString())
                    .then(function (response) { return response.json(); })
                    .then(function (result) {
                    if (result.result.code == 104) {
                        _this.openErrorMessage(errorMessage1, "아이디가 중복됩니다.");
                    }
                });
            };
            (_a = document.getElementById("joinButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                if (!id.value) {
                    _this.openErrorMessage(errorMessage1, "아이디를 입력하세요.");
                }
                else if (id.value.replace(/[a-zA-Z0-9]/g, "").length || id.value.length < 8 || id.value.length > 16 || !/[a-zA-Z]/.test(id.value) || !/[0-9]/.test(id.value)) {
                    _this.openErrorMessage(errorMessage1, "아이디는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.");
                }
                else if (!password.value) {
                    _this.openErrorMessage(errorMessage2, "비밀번호를 입력하세요.");
                }
                else if (!confirmPassword.value) {
                    _this.openErrorMessage(errorMessage2, "비밀번호 확인을 입력하세요.");
                }
                else if (password.value.replace(/[a-zA-Z0-9]/g, "").length || password.value.length < 8 || password.value.length > 16 || !/[a-zA-Z]/.test(password.value) || !/[0-9]/.test(password.value)) {
                    _this.openErrorMessage(errorMessage2, "비밀번호는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.");
                }
                else if (password.value != confirmPassword.value) {
                    _this.openErrorMessage(errorMessage2, "비밀번호가 일치하지 않습니다.");
                }
                else if (!name.value) {
                    _this.openErrorMessage(errorMessage3, "닉네임을 입력하세요.");
                }
                else if (name.value.length < 3 || name.value.length > 12) {
                    _this.openErrorMessage(errorMessage3, "닉네임은 3 ~ 12자 문자로 구성되어야 합니다.");
                }
                else {
                    var JOIN_URI = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/user";
                    fetch(JOIN_URI, {
                        headers: {
                            'Accept': 'application/json, text/plain',
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        method: "POST",
                        credentials: "include",
                        body: JSON.stringify({
                            id: id.value,
                            pass: password.value,
                            passCheck: confirmPassword.value,
                            nickname: name.value
                        }),
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (result) {
                        switch (result.result.code) {
                            case 103:
                                //join seccessful
                                break;
                            case 402:
                                //ID not entered
                                _this.openErrorMessage(errorMessage1, "아이디를 입력하세요.");
                                break;
                            case 403:
                                //Password not entered
                                _this.openErrorMessage(errorMessage2, "비밀번호를 입력하세요.");
                                break;
                            case 404:
                                //Password Verification not entered
                                _this.openErrorMessage(errorMessage2, "비밀번호 확인을 입력하세요.");
                                break;
                            case 405:
                                //Name not entered
                                _this.openErrorMessage(errorMessage3, "닉네임을 입력하세요.");
                                break;
                            case 406:
                                //ID format mismatch
                                _this.openErrorMessage(errorMessage1, "아이디는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.");
                                break;
                            case 407:
                                //Password format mismatch
                                _this.openErrorMessage(errorMessage2, "비밀번호는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.");
                                break;
                            case 408:
                                //Password verification mismatch
                                _this.openErrorMessage(errorMessage2, "비밀번호가 일치하지 않습니다.");
                                break;
                            case 409:
                                //Name format mismatch
                                _this.openErrorMessage(errorMessage3, "닉네임은 3 ~ 12자 문자로 구성되어야 합니다.");
                                break;
                            case 410:
                                //ID duplication
                                _this.openErrorMessage(errorMessage1, "아이디가 중복됩니다.");
                                break;
                        }
                    });
                }
            });
        }
    };
    return JoinPage;
}(Page));
