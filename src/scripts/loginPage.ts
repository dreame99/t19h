class LoginPage extends Page {
    private closeErrorMessage(): void {
        var loginRuleText: HTMLElement | null = document.querySelector("#loginRuleText");
        if( loginRuleText ) {
            loginRuleText.style.display = "none";
        }
    }

    private openErrorMessage(ruleText: HTMLElement | null, msg: string): void {
        if( ruleText ) {
            ruleText.style.display = "block";
            ruleText.classList.add("error-text");
            ruleText.innerText = msg;
        }
    }

    protected render(): void {
        if( this.contents ) {
            this.contents.innerHTML = `
                <section class="container-layout limited-width padding-level-12 column-top-center-flex-layout gap-level-10">
                    <article class="box-layout padding-level-10 column-top-center-flex-layout gap-level-8 item-1-layout" style="width: 480px;">
                        <div class="row-top-center-flex-layout">
                            <h1 class="title-text bold-text">로그인</h1>
                        </div>
                        <div class="column-top-stretch-flex-layout gap-level-6">
                            <div class="column-top-stretch-flex-layout item-1-layout gap-level-4">
                                <input type="text" id="loginId" class="padding-level-5" placeholder="아이디" maxlength="16">
                                <div class="column-top-left-flex-layout item-1-layout gap-level-3">
                                    <input type="password" id="loginPassword" class="padding-level-5" placeholder="비밀번호" maxlength="16">
                                    <span id="loginRuleText" class="error-text" style="display: none;">아이디 또는 비밀번호의 형식이 올바르지 않습니다.</span>
                                    <label class="row-middle-left-flex-layout gap-level-2"><input type="checkbox" id="autoLoginCheckbox">자동 로그인</label>
                                </div>
                            </div>
                            <div class="column-top-stretch-flex-layout item-1-layout gap-level-4">
                                <button id="loginButton" class="padding-level-5">로그인</button>
                                <button id="joinButton" class="padding-level-5">회원가입</button>
                            </div>
                        </div>
                    </article>
                </section>`;
        }
    }

    protected bindingEvents(): void {
        var loginRuleText: HTMLElement | null = document.querySelector("#loginRuleText");
        var loginId: HTMLInputElement | null = document.querySelector("#loginId");
        var loginPassword: HTMLInputElement | null = document.querySelector("#loginPassword");
        var autoLoginCheckbox: HTMLInputElement | null = document.querySelector("#autoLoginCheckbox");
        var loginButton: HTMLButtonElement | null = document.querySelector("#loginButton");
        var joinButton: HTMLButtonElement | null = document.querySelector("#joinButton");

        loginId?.addEventListener("focus", this.closeErrorMessage);
        loginPassword?.addEventListener("focus", this.closeErrorMessage);
        loginButton?.addEventListener("click", () => {
            if( !loginId?.value ) {
                this.openErrorMessage(loginRuleText, API_RESULT_CODE[400]);
            } else if( !loginPassword?.value ) {
                this.openErrorMessage(loginRuleText, API_RESULT_CODE[400]);
            } else {
                postFetch("users/login", {id : loginId.value, pass : loginPassword.value, auto : autoLoginCheckbox && autoLoginCheckbox.checked? 1 : 0})
                .then(result => {
                    if( result.result.code == 100 ) {
                        navigate("main");
                    } else {
                        this.openErrorMessage(loginRuleText, API_RESULT_CODE[result.result.code]);
                    }
                })
                .catch(e => alert("error msg : " + e));
            }
        });

        joinButton?.addEventListener("click", () => navigate("join"));
    }
}