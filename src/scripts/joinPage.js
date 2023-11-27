var JoinPage = /** @class */ (function () {
    function JoinPage(container) {
        this.container = document.getElementById(container);
    }
    JoinPage.prototype.render = function () {
        if (this.container) {
            this.container.innerHTML = "\n            <article class=\"join\" style=\"display: flex; justify-content: center; padding: 56px;\">\n                <div class=\"inline-box\" style=\"max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;\">\n                    <span style=\"display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;\">\uD68C\uC6D0\uAC00\uC785</span>\n                    <input type=\"text\" id=\"id\" placeholder=\"\uC544\uC774\uB514\" maxlength=\"16\" style=\"margin-top: 52px; width: 300px; max-width: 100%;\">\n                    <input type=\"password\" id=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" maxlength=\"16\" style=\"margin-top: 24px; width: 300px; max-width: 100%;\">\n                    <input type=\"password\" id=\"confirmPassword\" placeholder=\"\uBE44\uBC00\uBC88\uD638 \uD655\uC778\" maxlength=\"16\" style=\"margin-top: 24px; width: 300px; max-width: 100%;\">\n                    <span style=\"margin-top: 12px;\">8~16\uC790\uC758 \uC601\uBB38, \uC22B\uC790, \uD2B9\uC218\uBB38\uC790\uB97C \uC0AC\uC6A9\uD574 \uC8FC\uC138\uC694.</span>\n                    <input type=\"text\" id=\"name\" placeholder=\"\uB2C9\uB124\uC784\" maxlength=\"12\" style=\"margin-top: 24px; width: 300px; max-width: 100%;\">\n                    <span style=\"margin-top: 12px;\">\uCD5C\uB300 12\uAE00\uC790\uAE4C\uC9C0 \uAC00\uB2A5\uD569\uB2C8\uB2E4.</span>\n                    <button id=\"joinButton\" style=\"background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px; width: 300px; max-width: 100%;\">\uAC00\uC785\uD558\uAE30</button>\n                </div>\n            </article>";
        }
    };
    JoinPage.prototype.updateEvents = function () {
        var _a;
        if (this.container) {
            (_a = document.getElementById("joinButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                var id = document.getElementById("id");
                var password = document.getElementById("password");
                var confirmPassword = document.getElementById("confirmPassword");
                var name = document.getElementById("name");
                if (!id.value) {
                }
                else if (!password.value) {
                }
                else if (!confirmPassword.value) {
                }
                else if (!name.value) {
                }
                else {
                    var JOIN_URI = "https://reqres.in/api/join";
                    fetch(JOIN_URI, {
                        method: "POST",
                        body: JSON.stringify({ id: id, password: password, name: name }),
                    })
                        .then(function (response) { return response.json(); })
                        .then(function (result) {
                        if (result.resultCode == 100) {
                            // join success
                        }
                        else if (result.resultCode == 200) {
                            // join fail
                        }
                    });
                }
            });
        }
    };
    JoinPage.prototype.init = function () {
        this.render();
        this.updateEvents();
    };
    return JoinPage;
}());
