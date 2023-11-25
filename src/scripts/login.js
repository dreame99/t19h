var Login = /** @class */ (function () {
    function Login(container) {
        this.container = document.getElementById(container);
    }
    Login.prototype.updateContents = function () {
        var _a;
        if (this.container) {
            this.container.innerHTML = "\n            <article class=\"login\" style=\"display: flex; justify-content: center; padding: 56px;\">\n                <div class=\"inline-box\" style=\"max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;\">\n                    <span style=\"display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;\">\uB85C\uADF8\uC778</span>\n                    <input type=\"text\" id=\"id\" placeholder=\"\uC544\uC774\uB514\" maxlength=\"16\" style=\"margin-top: 52px; width: 300px; max-width: 100%;\">\n                    <input type=\"password\" id=\"password\" placeholder=\"\uBE44\uBC00\uBC88\uD638\" maxlength=\"16\" style=\"margin-top: 24px;\">\n                    <label style=\"display: flex; align-items: center; margin-top: 24px;\"><input type=\"checkbox\" id=\"auto\" style=\"margin-right: 12px;\">\uC790\uB3D9 \uB85C\uADF8\uC778</label>\n                    <button id=\"loginButton\" style=\"background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px;\">\uB85C\uADF8\uC778</button>\n                    <button style=\"background: #5288F1; border: none; color: #F1F1F1; margin-top: 24px;\">\uD68C\uC6D0\uAC00\uC785</button>\n                </div>\n            </article>";
            (_a = document.getElementById("loginButton")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () {
                var id = document.getElementById("id");
                var password = document.getElementById("password");
                var auto = document.getElementById("auto");
                console.log(id.value, password.value, auto.checked);
                fetch("https://reqres.in/api/login", {
                    method: "POST",
                    body: JSON.stringify({
                        id: id,
                        pass: password,
                        auto: auto.checked ? 1 : 0,
                    }),
                })
                    .then(function (response) { return response.json(); })
                    .then(function (result) {
                    alert(result.error);
                });
            });
        }
    };
    Login.prototype.init = function () {
        this.updateContents();
    };
    return Login;
}());
