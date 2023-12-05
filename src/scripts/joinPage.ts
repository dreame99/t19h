const RESULT = {
100 : "success login",
101 : "login",
102 : "logout",
103 : "Join successful",
104 : "Search sucessful",
105 : "Logout seccess",
400 : "id or password null error",
401 : "id or password match error",
402 : "ID not entered",
403 : "Password not entered",
404 : "Password verification not entered",
405 : "Name not entered",
406 : "ID format mismatch",
407 : "Password format mismatch",
408 : "Password verification mismatch",
409 : "Name format mismatch",
410 : "ID duplication",
411 : "Search fail",
} as const;

class JoinPage extends Page {
    private closeErrorMessage(errorMessage: HTMLElement): void {
        //errorMessage.style.display = "none";
        errorMessage.style.color = "black";
    }

    private openErrorMessage(errorMessage: HTMLElement, msg?: string): void {
        if( msg ) {
            errorMessage.innerText = msg;
        }
        errorMessage.style.color = "red";
        errorMessage.style.display = "block";
    }

    protected render(): void {
        if( this.contents ) {
            this.contents.innerHTML = `
            <article class="join" style="display: flex; justify-content: center; padding: 56px;">
                <div class="inline-box" style="max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;">
                    <span style="display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;">회원가입</span>
                    <input type="text" id="id" placeholder="아이디" maxlength="16" style="margin-top: 52px; width: 300px; max-width: 100%;">
                    <span id="errorMessage1" class="error" style="margin-top: 12px; width: 300px;">아이디는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.</span>
                    <input type="password" id="password" placeholder="비밀번호" maxlength="16" style="margin-top: 24px; width: 300px; max-width: 100%;">
                    <input type="password" id="confirmPassword" placeholder="비밀번호 확인" maxlength="16" style="margin-top: 24px; width: 300px; max-width: 100%;">
                    <span id="errorMessage2" class="error" style="margin-top: 12px; width: 300px;">비밀번호는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.</span>
                    <input type="text" id="name" placeholder="닉네임" maxlength="12" style="margin-top: 24px; width: 300px; max-width: 100%;">
                    <span id="errorMessage3" class="error" style="margin-top: 12px; width: 300px;">닉네임은 3 ~ 12자 문자로 구성되어야 합니다.</span>
                    <button id="joinButton" style="background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px; width: 300px; max-width: 100%;">가입하기</button>
                </div>
            </article>`;
        }
    }

    protected bindingEvents(): void {
        if( this.contents ) {
            var id = document.getElementById("id") as HTMLInputElement;
            var password = document.getElementById("password") as HTMLInputElement;
            var confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
            var name = document.getElementById("name") as HTMLInputElement;

            var errorMessage1 = document.getElementById("errorMessage1") as HTMLInputElement;
            var errorMessage2 = document.getElementById("errorMessage2") as HTMLInputElement;
            var errorMessage3 = document.getElementById("errorMessage3") as HTMLInputElement;

            id.onfocus = () => this.closeErrorMessage(errorMessage1);
            password.onfocus = () => this.closeErrorMessage(errorMessage2);
            confirmPassword.onfocus = () => this.closeErrorMessage(errorMessage2);
            name.onfocus = () => this.closeErrorMessage(errorMessage3);

            id.onblur = () => {
                fetch("https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/user?" + new URLSearchParams({id : id.value}).toString())
                .then((response) => response.json())
                .then((result) => {
                    if( result.result.code == 104 ) {
                        this.openErrorMessage(errorMessage1, "아이디가 중복됩니다.");
                    }
                });
            };

            document.getElementById("joinButton")?.addEventListener("click", () => {
                if( !id.value ) {
                    this.openErrorMessage(errorMessage1, "아이디를 입력하세요.");
                } else if( id.value.replace(/[a-zA-Z0-9]/g, "").length || id.value.length < 8 || id.value.length > 16 || !/[a-zA-Z]/.test(id.value) || !/[0-9]/.test(id.value) ) {
                    this.openErrorMessage(errorMessage1, "아이디는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.");
                } else if( !password.value ) {
                    this.openErrorMessage(errorMessage2, "비밀번호를 입력하세요.");
                } else if( !confirmPassword.value ) {
                    this.openErrorMessage(errorMessage2, "비밀번호 확인을 입력하세요.");
                } else if( password.value.replace(/[a-zA-Z0-9]/g, "").length || password.value.length < 8 || password.value.length > 16 || !/[a-zA-Z]/.test(password.value) || !/[0-9]/.test(password.value)  ) {
                    this.openErrorMessage(errorMessage2, "비밀번호는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.");
                } else if( password.value != confirmPassword.value ) {
                    this.openErrorMessage(errorMessage2, "비밀번호가 일치하지 않습니다.");
                } else if( !name.value ) {
                    this.openErrorMessage(errorMessage3, "닉네임을 입력하세요.");
                } else if( name.value.length < 3 || name.value.length > 12 ) {
                    this.openErrorMessage(errorMessage3, "닉네임은 3 ~ 12자 문자로 구성되어야 합니다.");
                } else {
                    const JOIN_URI = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/user";
                    fetch(JOIN_URI, {
                        headers: {
                            'Accept': 'application/json, text/plain',
                            'Content-Type': 'application/json;charset=UTF-8'
                        },
                        method: "POST",
                        credentials : "include",
                        body: JSON.stringify({
                            id : id.value,
                            pass : password.value,
                            passCheck : confirmPassword.value,
                            nickname : name.value
                        }),
                    })
                    .then((response) => response.json())
                    .then((result) => {
                        switch( result.result.code ) {
                            case 103 :
                                //join seccessful
                                break;
                            case 402 :
                                //ID not entered
                                this.openErrorMessage(errorMessage1, "아이디를 입력하세요.");
                                break;
                            case 403 :
                                //Password not entered
                                this.openErrorMessage(errorMessage2, "비밀번호를 입력하세요.");
                                break;
                            case 404 :
                                //Password Verification not entered
                                this.openErrorMessage(errorMessage2, "비밀번호 확인을 입력하세요.");
                                break;
                            case 405 :
                                //Name not entered
                                this.openErrorMessage(errorMessage3, "닉네임을 입력하세요.");
                                break;
                            case 406 :
                                //ID format mismatch
                                this.openErrorMessage(errorMessage1, "아이디는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.");
                                break;
                            case 407 :
                                //Password format mismatch
                                this.openErrorMessage(errorMessage2, "비밀번호는 영문과 숫자로 이루어진 8 ~ 16자 문자로 구성되어야 합니다.");
                                break;
                            case 408 :
                                //Password verification mismatch
                                this.openErrorMessage(errorMessage2, "비밀번호가 일치하지 않습니다.");
                                break;
                            case 409 :
                                //Name format mismatch
                                this.openErrorMessage(errorMessage3, "닉네임은 3 ~ 12자 문자로 구성되어야 합니다.");
                                break;
                            case 410 :
                                //ID duplication
                                this.openErrorMessage(errorMessage1, "아이디가 중복됩니다.");
                                break;
                        }
                    });
                }
            });
        }
    }
}