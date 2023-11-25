enum PAGES {
    MAIN = "메인 페이지",
    LOGIN = "로그인 페이지",
}

function navigateTo(page : PAGES) : void {
    if( page == PAGES.MAIN ) {
        new Main("contents").init();
    } else if( page == PAGES.LOGIN ) {
        new Login("contents").init();
    }
}

window.addEventListener("load", () => {
    if( window.location.pathname.split("/").filter(c => c)[0] == "login" ) {
        navigateTo(PAGES.LOGIN);
    } else {
        navigateTo(PAGES.MAIN);
    }
    document.getElementById("logo")?.addEventListener("click", () => navigateTo(PAGES.MAIN));
    document.getElementById("toLogin")?.addEventListener("click", () => navigateTo(PAGES.LOGIN));
});