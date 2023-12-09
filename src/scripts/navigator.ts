const PAGES = ["main", "login", "join", "profile", "create-project", "project-list", "project-room", "member-list"] as const;
const AUTH_PAGE = {main : MainPage, login : MainPage, join : MainPage, profile : MainPage, "create-project" : MainPage, "project-list" : CreateProjectPage, "project-room" : MainPage, "member-list" : UserListPage};
const UNAUTH_PAGE = {main : MainPage, login : LoginPage, join : JoinPage, profile : MainPage, "create-project" : LoginPage, "project-list" : LoginPage, "project-room" : MainPage, "member-list" : LoginPage};
type PAGE = typeof PAGES[number];

const SERVER_INFO: string = "STAGE";

function navigateToMainPage(): void {
    console.log("navigateToMainPage");
    navigate("main");
}

function navigateToLoginPage(): void {
    console.log("navigateToLoginPage");
    navigate("login");
}

function navigateToJoinPage(): void {
    console.log("navigateToJoinPage");
    navigate("join");
}

function toggleMenuPopup(): void {
    console.log("toggleMenuPopup");
    var menu = document.getElementsByClassName("menu")[0] as HTMLElement;
    if( menu ) {
        menu.style.display = menu.style.display == "flex"? "none" : "flex";
    }
}

function toggleAlarmPopup(): void {
    console.log("toggleAlarmPopup");
}

function closeMenuPopup(): void {
    var menu = document.getElementsByClassName("menu")[0] as HTMLElement;
    if( menu ) {
        menu.style.display = "none";
    }
}

window.addEventListener("load", () => {
    var path = window.location.pathname.substring(1) as PAGE;
    if( PAGES.includes(path) ) {
        navigate(path as PAGE);
    } else {
        navigate("main");
    }

    document.getElementById("headerLogo")?.addEventListener("click", navigateToMainPage);
    document.getElementById("headerMenuButton")?.addEventListener("click", toggleMenuPopup);
    document.getElementById("headerLoginButton")?.addEventListener("click", navigateToLoginPage);
    document.getElementById("headerJoinButton")?.addEventListener("click", navigateToJoinPage);
    document.getElementById("headerAlarmButton")?.addEventListener("click", toggleAlarmPopup);
    document.getElementById("headerLogoutButton")?.addEventListener("click", LoginManager.logout);

    document.querySelectorAll("[data-nav]")?.forEach((elem: Element) => {
        (elem as HTMLElement).onclick = () => {
            var path: string | undefined = (elem as HTMLElement).dataset.nav;

            if( path && PAGES.includes(path as PAGE) ) {
                navigate(path as PAGE);
            } else {
                navigate("main");
            }
        }
    });
});

async function navigate(page: PAGE): Promise<void> {
    console.log("navigate to", page);
    var isLogin = await LoginManager.isLogin();
    console.log("login?", isLogin);

    var headerMenuButton = document.getElementById("headerMenuButton") as HTMLElement;
    var headerBackwardButton = document.getElementById("headerBackwardButton") as HTMLElement;
    headerMenuButton.style.display = "block";

    /*
    if( page == "main" ) {
        headerMenuButton.style.display = "block";
        headerBackwardButton.style.display = "none";
    } else {
        headerMenuButton.style.display = "none";
        headerBackwardButton.style.display = "block";
    }
    */

    document.querySelectorAll(isLogin? ".loginIcon" : ".logoutIcon").forEach(icon => (icon as HTMLElement).style.display = "block");
    document.querySelectorAll(isLogin? ".logoutIcon" : ".loginIcon").forEach(icon => (icon as HTMLElement).style.display = "none");

    var pageName = PAGES.includes(page)? page : "main";
    var pageFunc = (isLogin? AUTH_PAGE[pageName] : UNAUTH_PAGE[pageName])
    if( pageFunc ) {
        new pageFunc(document.getElementById("contents") as HTMLElement).init();
    }

    window.scrollTo(0, 0);
    closeMenuPopup();
}