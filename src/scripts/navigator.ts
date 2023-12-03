type PAGE = "main" | "login" | "join";

window.addEventListener("load", () => {
    switch( window.location.pathname ) {
        case "/login" :
            navigate("login");
            break;
        case "/join" :
            navigate("join");
            break;
        default :
            navigate("main");
    }

    var headerLogo: HTMLElement | null = document.getElementById("headerLogo");
    if( headerLogo ) {
        headerLogo.onclick = () => navigate("main");
    }
    
    var headerMenuButton: HTMLElement | null = document.getElementById("headerMenuButton");
    if( headerMenuButton ) {
        headerMenuButton.onclick = () => {
            var menu = document.getElementsByClassName("menu")[0] as HTMLElement;
            if( menu.style.display == "flex" ) {
                menu.style.display = "none";
            } else {
                menu.style.display = "flex";
            }
        };
    }
    
    var headerLoginButton: HTMLElement | null = document.getElementById("headerLoginButton");
    if( headerLoginButton ) {
        headerLoginButton.onclick = () => navigate("login");
    }
    
    var headerJoinButton: HTMLElement | null = document.getElementById("headerJoinButton");
    if( headerJoinButton ) {
        headerJoinButton.onclick = () => navigate("join");
    }
    
    var headerAlarmButton: HTMLElement | null = document.getElementById("headerAlarmButton");
    if( headerAlarmButton ) {
        headerAlarmButton.onclick = () => {

        };
    }
    
    var headerLogoutButton: HTMLElement | null = document.getElementById("headerLogoutButton");
    if( headerLogoutButton ) {
        headerLogoutButton.onclick = () => {
            LoginManager.logout();
        };
    }
});

async function navigate(page: PAGE): Promise<void> {
    var isLogin = await LoginManager.isLogin();
    console.log(isLogin);

    var headerMenuButton = document.getElementById("headerMenuButton") as HTMLElement;
    var headerBackwardButton = document.getElementById("headerBackwardButton") as HTMLElement;
    var headerLoginButton = document.getElementById("headerLoginButton") as HTMLElement;
    var headerJoinButton = document.getElementById("headerJoinButton") as HTMLElement;
    var headerAlarmButton = document.getElementById("headerAlarmButton") as HTMLElement;
    var headerLogoutButton = document.getElementById("headerLogoutButton") as HTMLElement;

    if( isLogin ) {
        headerLoginButton.style.display = "none";
        headerJoinButton.style.display = "none";
        headerAlarmButton.style.display = "block";
        headerLogoutButton.style.display = "block";
    } else {
        headerLoginButton.style.display = "block";
        headerJoinButton.style.display = "block";
        headerAlarmButton.style.display = "none";
        headerLogoutButton.style.display = "none";
    }

    var header = document.getElementById("header") as HTMLElement;
    var contents = document.getElementById("contents") as HTMLElement;
    
    switch( page ) {
        case "main" :
            headerMenuButton.style.display = "block";
            headerBackwardButton.style.display = "none";
            new MainPage(contents).init();
            break;
        case "login" :
            if( isLogin ) {
                headerMenuButton.style.display = "block";
                headerBackwardButton.style.display = "none";
                new MainPage(contents).init();
            } else {
                new LoginPage(contents).init();
            }
            break;
        case "join" :
            if( isLogin ) {
                headerMenuButton.style.display = "block";
                headerBackwardButton.style.display = "none";
                new MainPage(contents).init();
            } else {
                new JoinPage("contents").init();
            }
            break;
        default :
            headerMenuButton.style.display = "block";
            headerBackwardButton.style.display = "none";
            new MainPage(contents).init();
    }
}