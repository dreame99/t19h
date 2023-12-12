class LoginManager {
    public static LOGIN_URI: string = "users/login";
    public static LOGOUT_URI: string = "users/logout";
    public static AUTH_URI: string = "users/auth";
    
    public static async login(data?: Object): Promise<number> {
        var resultCode = 0;
        if( SERVER_INFO != "DEV" ) {
            await fetch(API_URL + this.LOGIN_URI, {
                method: "POST",
                body: JSON.stringify(data),
            })
            .then((response) => response.json())
            .then((result) => {
                resultCode = result.result.code;
            });
        }

        return resultCode;
    }

    public static logout(): void {
        if( SERVER_INFO != "DEV" ) {
            fetch(API_URL + this.LOGOUT_URI, {
                method: "POST",
                credentials : "include",
            })
            .then((response) => response.json())
            .then((result) => {
                if( result.result.code == 105 ) {
                    navigate("main");
                }
            })
            .catch(() => navigate("main"));
        }
    }

    public static async isLogin(): Promise<boolean> {
        var isLogin = false;

        if( SERVER_INFO != "DEV" ) {
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
        }
        
        return isLogin;
    }
}