const API_URL = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app" as string;

class LoginManager {
    public static LOGIN_URI = "/user/login";
    public static LOGOUT_URI = "/user/logout";
    public static AUTH_URI = "/user/auth";
    
    public static login(data?: Object): void {
        fetch(API_URL + this.LOGIN_URI, {
            method: "POST",
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((result) => {
            if( result.result.code == 100 ) {
                // login success
            } else if( result.resultCode == 200 ) {
                // login fail
            }
        });
    }

    public static logout(): void {
        fetch(API_URL + this.LOGOUT_URI, {
            method: "POST",
            credentials : "include",
        })
        .then((response) => response.json())
        .then((result) => {
            navigate("main");
        });
    }

    public static async isLogin(): Promise<boolean> {
        var isLogin = false;
        
        await fetch(API_URL + this.AUTH_URI, {
            credentials : "include",
        })
        .then((response) => response.json())
        .then((result) => {
            isLogin = result.result.code == 101;
        })
        .catch(e => {
            console.log("error : " + e);
        });
        
        return isLogin;
    }
}