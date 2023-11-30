var PAGES;
(function (PAGES) {
    PAGES["MAIN"] = "\uBA54\uC778 \uD398\uC774\uC9C0";
    PAGES["LOGIN"] = "\uB85C\uADF8\uC778 \uD398\uC774\uC9C0";
    PAGES["JOIN"] = "\uD68C\uC6D0\uAC00\uC785 \uD398\uC774\uC9C0";
})(PAGES || (PAGES = {}));
;
function navigateTo(page) {
    var isLogin = LoginManager.isLogin();
    switch (page) {
        case PAGES.MAIN:
            new MainPage("contents").init();
            break;
        case PAGES.LOGIN:
            if (isLogin) {
                new MainPage("contents").init();
            }
            else {
                new LoginPage("contents").init();
            }
            break;
        case PAGES.JOIN:
            if (isLogin) {
                new MainPage("contents").init();
            }
            else {
                // navigate to join page
                new JoinPage("contents").init();
            }
            break;
        default:
            new MainPage("contents").init();
    }
}
window.addEventListener("load", function () {
    var _a, _b, _c;
    switch (window.location.pathname) {
        case "/login":
            navigateTo(PAGES.LOGIN);
            break;
        case "/join":
            navigateTo(PAGES.JOIN);
            break;
        default:
            navigateTo(PAGES.MAIN);
    }
    (_a = document.getElementById("logo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return navigateTo(PAGES.MAIN); });
    (_b = document.getElementById("toLogin")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return navigateTo(PAGES.LOGIN); });
    (_c = document.getElementById("toJoin")) === null || _c === void 0 ? void 0 : _c.addEventListener("click", function () { return navigateTo(PAGES.JOIN); });
    fetch("https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/user/auth", { method: "POST" })
        .then(function (response) { return response.json(); })
        .then(function (result) {
        console.log(result);
    });
});
