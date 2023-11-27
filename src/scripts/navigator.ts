enum PAGES {
    MAIN = "메인 페이지",
    LOGIN = "로그인 페이지",
    JOIN = "회원가입 페이지",
};

function navigateTo(page: PAGES): void {
    var isLogin = LoginManager.isLogin();

    switch( page ) {
        case PAGES.MAIN :
            new MainPage("contents").init();
            break;
        case PAGES.LOGIN :
            if( isLogin ) {
                new MainPage("contents").init();
            } else {
                new LoginPage("contents").init();
            }
            break;
        case PAGES.JOIN :
            if( isLogin ) {
                new MainPage("contents").init();
            } else {
                // navigate to join page
                new JoinPage("contents").init();
            }
            break;
        default :
            new MainPage("contents").init();
    }
}

window.addEventListener("load", () => {
    switch( window.location.pathname ) {
        case "/login" :
            navigateTo(PAGES.LOGIN);
            break;
        case "/join" :
            navigateTo(PAGES.JOIN);
            break;
        default :
            navigateTo(PAGES.MAIN);
    }

    document.getElementById("logo")?.addEventListener("click", () => navigateTo(PAGES.MAIN));
    document.getElementById("toLogin")?.addEventListener("click", () => navigateTo(PAGES.LOGIN));
    document.getElementById("toJoin")?.addEventListener("click", () => navigateTo(PAGES.JOIN));
});