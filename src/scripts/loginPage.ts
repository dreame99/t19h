class LoginPage extends Page {
    private closeErrorMessage(): void {
        var errorMessage = document.querySelector(".login .error") as HTMLElement | null;
        if( errorMessage ) {
            errorMessage.style.display = "none";
        }
    }

    private openErrorMessage(msg?: string): void {
        var errorMessage = document.querySelector(".login .error") as HTMLElement | null;
        if( errorMessage ) {
            if( msg ) {
                errorMessage.innerText = msg;
            }
            errorMessage.style.display = "block";
        }
    }

    protected render(): void {
        if( this.contents ) {
            this.contents.innerHTML = `
            <article class="login" style="display: flex; justify-content: center; padding: 56px;">
                <div class="inline-box" style="max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;">
                    <span style="display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;">로그인</span>
                    <input type="text" id="id" placeholder="아이디" maxlength="16" style="margin-top: 52px; width: 300px; max-width: 100%;">
                    <input type="password" id="password" placeholder="비밀번호" maxlength="16" style="margin-top: 24px;">
                    <span class="error" style="display: none; color: red; margin-top: 12px;">아이디 또는 비밀번호가 올바르지 않습니다.</span>
                    <label style="display: flex; align-items: center; margin-top: 24px;"><input type="checkbox" id="auto" style="margin-right: 12px;">자동 로그인</label>
                    <button id="loginButton" style="background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px;">로그인</button>
                    <button id="joinButton" style="background: #5288F1; border: none; color: #F1F1F1; margin-top: 24px;">회원가입</button>
                </div>
            </article>`;
        }
    }

    private bindingEvents(): void {
        if( this.contents ) {
            const inputElements = document.querySelectorAll("input");
            inputElements.forEach((inputElement) => {
                inputElement.addEventListener("click", this.closeErrorMessage);
            });
            
            document.getElementById("loginButton")?.addEventListener("click", () => {
                var id = document.getElementById("id") as HTMLInputElement;
                var password = document.getElementById("password") as HTMLInputElement;
                var auto = document.getElementById("auto") as HTMLInputElement;

                if( !id.value ) {
                    this.openErrorMessage("아이디 또는 비밀번호가 입력되지 않았습니다.");
                } else if( !password.value ) {
                    this.openErrorMessage("아이디 또는 비밀번호가 입력되지 않았습니다.");
                } else {
                    const API_URL = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app" as string;
                    const LOGIN_URI = "/user/login";
                    fetch(API_URL + LOGIN_URI, {
                        headers: {
                            'Accept': 'application/json, text/plain',
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        method: "POST",
                        credentials : "include",
                        body: JSON.stringify({id: id.value, pass: password.value, auto: auto.checked? 1 : 0}),
                    })
                    .then((response) => response.json())
                    .then((result) => {
                        console.log(result);
                        if( result.result.code == 100 ) {
                            // success login
                            navigate("main");
                        } else if( result.result.code == 400 ) {
                            // id or password null error
                            this.openErrorMessage("아이디 또는 비밀번호가 입력되지 않았습니다.");
                        } else if( result.result.code == 401 ) {
                            // id or password match error
                            this.openErrorMessage("아이디 또는 비밀번호가 올바르지 않습니다.");
                        }
                    })
                    .catch(e => {
                        alert("error : " + e);
                    });
                }
            });
            
            document.getElementById("joinButton")?.addEventListener("click", () => {
                navigate("join");
            });
        }
    }
  
    public init(): void {
        this.render();
        this.bindingEvents();
    }
}