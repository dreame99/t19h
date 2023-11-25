var PAGES;
(function (PAGES) {
    PAGES["MAIN"] = "\uBA54\uC778 \uD398\uC774\uC9C0";
    PAGES["LOGIN"] = "\uB85C\uADF8\uC778 \uD398\uC774\uC9C0";
})(PAGES || (PAGES = {}));
function navigateTo(page) {
    if (page == PAGES.MAIN) {
        new Main("contents").init();
    }
    else if (page == PAGES.LOGIN) {
        new Login("contents").init();
    }
}
window.addEventListener("load", function () {
    var _a, _b;
    if (window.location.pathname.split("/").filter(function (c) { return c; })[0] == "login") {
        navigateTo(PAGES.LOGIN);
    }
    else {
        navigateTo(PAGES.MAIN);
    }
    (_a = document.getElementById("logo")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", function () { return navigateTo(PAGES.MAIN); });
    (_b = document.getElementById("toLogin")) === null || _b === void 0 ? void 0 : _b.addEventListener("click", function () { return navigateTo(PAGES.LOGIN); });
});
