class JoinPage {
    private container: HTMLElement | null;

    constructor(container: string) {
        this.container = document.getElementById(container);
    }

    private render(): void {
        if( this.container ) {
            this.container.innerHTML = `
            <article class="join" style="display: flex; justify-content: center; padding: 56px;">
                <div class="inline-box" style="max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;">
                    <span style="display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;">회원가입</span>
                    <input type="text" id="id" placeholder="아이디" maxlength="16" style="margin-top: 52px; width: 300px; max-width: 100%;">
                    <input type="password" id="password" placeholder="비밀번호" maxlength="16" style="margin-top: 24px; width: 300px; max-width: 100%;">
                    <input type="password" id="confirmPassword" placeholder="비밀번호 확인" maxlength="16" style="margin-top: 24px; width: 300px; max-width: 100%;">
                    <span style="margin-top: 12px;">8~16자의 영문, 숫자, 특수문자를 사용해 주세요.</span>
                    <input type="text" id="name" placeholder="닉네임" maxlength="12" style="margin-top: 24px; width: 300px; max-width: 100%;">
                    <span style="margin-top: 12px;">최대 12글자까지 가능합니다.</span>
                    <button id="joinButton" style="background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px; width: 300px; max-width: 100%;">가입하기</button>
                </div>
            </article>`;
        }
    }

    private updateEvents(): void {
        if( this.container ) {
            document.getElementById("joinButton")?.addEventListener("click", () => {
                var id = document.getElementById("id") as HTMLInputElement;
                var password = document.getElementById("password") as HTMLInputElement;
                var confirmPassword = document.getElementById("confirmPassword") as HTMLInputElement;
                var name = document.getElementById("name") as HTMLInputElement;

                if( !id.value ) {
                } else if( !password.value ) {
                } else if( !confirmPassword.value ) {
                } else if( !name.value ) {
                } else {
                    const JOIN_URI = "https://reqres.in/api/join";

                    fetch(JOIN_URI, {
                        method: "POST",
                        body: JSON.stringify({id, password, name}),
                    })
                    .then((response) => response.json())
                    .then((result) => {
                        if( result.resultCode == 100 ) {
                            // join success
                        } else if( result.resultCode == 200 ) {
                            // join fail
                        }
                    });
                }
            });
        }
    }
  
    public init(): void {
        this.render();
        this.updateEvents();
    }
}