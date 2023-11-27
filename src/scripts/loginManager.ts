class LoginManager {
    public static LOGIN_URI = "https://reqres.in/api/login";
    public static LOGOUT_URI = "https://reqres.in/api/logout";

    public static login(data?: Object): void {
        fetch(this.LOGIN_URI, {
            method: "POST",
            body: JSON.stringify(data),
        })
        .then((response) => response.json())
        .then((result) => {
            result = {
                result : "success",
                data : {
                    name : "차영운",
                    skill : ["HTML"],
                    study : [],
                    profile : ""
                }
            }
            if( result.resultCode == 100 ) {
                // login success
            } else if( result.resultCode == 200 ) {
                // login fail
            }
        });
    }

    public static logout(): void {
        fetch(this.LOGOUT_URI, {method: "POST"})
        .then((response) => response.json())
        .then((result) => {
            result = {
                result : "success",
                data : {
                    name : "차영운",
                    skill : ["HTML"],
                    study : [],
                    profile : ""
                }
            }

            if( result.resultCode == 100 ) {
                // logout success
            } else if( result.resultCode == 200 ) {
                // logout fail
            }
        });
    }

    public static isLogin(): boolean {
        var value = document.cookie.match('(^|;) ?' + "SESSIONID" + '=([^;]*)(;|$)');
        return !!value;
    }
}