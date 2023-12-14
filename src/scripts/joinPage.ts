class JoinPage extends Page {
    private closeErrorMessage(): void {
        var joinIdRuleText: HTMLElement | null = document.querySelector("#joinIdRuleText");
        if( joinIdRuleText ) {
            joinIdRuleText.classList.remove("error-text");
            joinIdRuleText.innerText = "아이디는 영문/숫자로 이루어진 8~16자 문자로 구성되어야 합니다.";
        }

        var joinPasswordRuleText: HTMLElement | null = document.querySelector("#joinPasswordRuleText");
        if( joinPasswordRuleText ) {
            joinPasswordRuleText.classList.remove("error-text");
            joinPasswordRuleText.innerText = "비밀번호는 영문/숫자로 이루어진 8~16자 문자로 구성되어야 합니다.";
        }

        var joinNameRuleText: HTMLElement | null = document.querySelector("#joinNameRuleText");
        if( joinNameRuleText ) {
            joinNameRuleText.classList.remove("error-text");
            joinNameRuleText.innerText = "이름은 3~12자 문자로 구성되어야 합니다.";
        }
    }

    private openErrorMessage(ruleText: HTMLElement | null, msg: string): void {
        if( ruleText ) {
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
                            <h1 class="title-text bold-text">회원가입</h1>
                        </div>
                        <div class="column-top-stretch-flex-layout gap-level-6 item-1-layout">
                            <div class="column-top-stretch-flex-layout item-1-layout gap-level-4">
                                <div class="column-top-left-flex-layout item-1-layout gap-level-3">
                                    <input type="text" id="joinId" class="padding-level-5" placeholder="아이디" maxlength="16">
                                    <span id="joinIdRuleText">아이디는 영문/숫자로 이루어진 8~16자 문자로 구성되어야 합니다.</span>
                                </div>
            
                                <input type="password" id="joinPassword" class="padding-level-5" placeholder="비밀번호" maxlength="16">
            
                                <div class="column-top-left-flex-layout item-1-layout gap-level-3">
                                    <input type="password" id="joinConfirmPassword" class="padding-level-5" placeholder="비밀번호" maxlength="16">
                                    <span id="joinPasswordRuleText">비밀번호는 영문/숫자로 이루어진 8~16자 문자로 구성되어야 합니다.</span>
                                </div>
            
                                <div class="column-top-left-flex-layout item-1-layout gap-level-3">
                                    <input type="text" id="joinName" class="padding-level-5" placeholder="이름" maxlength="12">
                                    <span id="joinNameRuleText">이름은 3~12자 문자로 구성되어야 합니다.</span>
                                </div>
                            </div>
        
                            <button id="joinButton" class="padding-level-5">회원가입</button>
                        </div>
                    </article>
                </section>`;
        }
    }

    protected bindingEvents(): void {
        if( this.contents ) {
            var joinId: HTMLInputElement | null = document.querySelector("#joinId");
            var joinPassword: HTMLInputElement | null = document.querySelector("#joinPassword");
            var joinConfirmPassword: HTMLInputElement | null = document.querySelector("#joinConfirmPassword");
            var joinName: HTMLInputElement | null = document.querySelector("#joinName");
            var joinIdRuleText: HTMLElement | null = document.querySelector("#joinIdRuleText");
            var joinPasswordRuleText: HTMLElement | null = document.querySelector("#joinPasswordRuleText");
            var joinNameRuleText: HTMLElement | null = document.querySelector("#joinNameRuleText");
            var joinButton: HTMLElement | null = document.querySelector("#joinButton");

            joinId?.addEventListener("focus", this.closeErrorMessage);
            joinId?.addEventListener("focusout", () => {
                if( !joinId?.value || joinId.value.replace(/[a-zA-Z0-9]/g, "").length || joinId.value.length < 8 || joinId.value.length > 16 || !/[a-zA-Z]/.test(joinId.value) || !/[0-9]/.test(joinId.value) ) {
                    return;
                }

                getFetch("users", "id=" + joinId.value)
                .then(result => {
                    if( result.result.code == 104 ) {
                        this.openErrorMessage(joinIdRuleText, "아이디가 중복됩니다.");
                    } else if( result.result.code == 402 ) {
                        this.openErrorMessage(joinNameRuleText, API_RESULT_CODE[402]);
                    }
                })
                .catch(e => alert("error msg : " + e));
            });
            joinPassword?.addEventListener("focus", this.closeErrorMessage);
            joinConfirmPassword?.addEventListener("focus", this.closeErrorMessage);
            joinName?.addEventListener("focus", this.closeErrorMessage);
            joinButton?.addEventListener("click", () => {
                var isError: boolean = false;
                if( !joinId?.value ) {
                    this.openErrorMessage(joinIdRuleText, API_RESULT_CODE[402]);
                    isError = true;
                } else if( joinId.value.replace(/[a-zA-Z0-9]/g, "").length || joinId.value.length < 8 || joinId.value.length > 16 || !/[a-zA-Z]/.test(joinId.value) || !/[0-9]/.test(joinId.value) ) {
                    this.openErrorMessage(joinIdRuleText, API_RESULT_CODE[406]);
                    isError = true;
                }

                if( !joinPassword?.value ) {
                    this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[403]);
                    isError = true;
                } else if( !joinConfirmPassword?.value ) {
                    this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[404]);
                    isError = true;
                } else if( joinPassword.value.replace(/[a-zA-Z0-9]/g, "").length || joinPassword.value.length < 8 || joinPassword.value.length > 16 || !/[a-zA-Z]/.test(joinPassword.value) || !/[0-9]/.test(joinPassword.value)  ) {
                    this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[407]);
                    isError = true;
                } else if( joinConfirmPassword.value.replace(/[a-zA-Z0-9]/g, "").length || joinConfirmPassword.value.length < 8 || joinConfirmPassword.value.length > 16 || !/[a-zA-Z]/.test(joinConfirmPassword.value) || !/[0-9]/.test(joinConfirmPassword.value)  ) {
                    this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[408]);
                    isError = true;
                } else if( joinPassword.value != joinConfirmPassword.value ) {
                    this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[426]);
                    isError = true;
                }

                if( !joinName?.value ) {
                    this.openErrorMessage(joinNameRuleText, API_RESULT_CODE[405]);
                    isError = true;
                } else if( joinName.value.length < 3 || joinName.value.length > 12 ) {
                    this.openErrorMessage(joinNameRuleText, API_RESULT_CODE[409]);
                    isError = true;
                }

                if( !isError ) {
                    postFetch("users", {id : joinId?.value, pass : joinPassword?.value, passCheck : joinConfirmPassword?.value, nickname : joinName?.value})
                    .then(result => {
                        if( result.result.code == 103 ) {
                            postFetch("users/login", {id : joinId?.value, pass : joinPassword?.value})
                            .then(result => navigate("main"))
                            .catch(e => alert("error msg : " + e));
                        } else if( result.result.code == 402 || result.result.code == 406 || result.result.code == 410 ) {
                            this.openErrorMessage(joinIdRuleText, API_RESULT_CODE[result.result.code]);
                        } else if( result.result.code == 403 || result.result.code == 404 || result.result.code == 407 || result.result.code == 408 || result.result.code == 426 ) {
                            this.openErrorMessage(joinPasswordRuleText, API_RESULT_CODE[result.result.code]);
                        } else if( result.result.code == 405 || result.result.code == 409 ) {
                            this.openErrorMessage(joinNameRuleText, API_RESULT_CODE[result.result.code]);
                        }
                    })
                    .catch(e => alert("error msg : " + e));
                }
            });
        }
    }
}