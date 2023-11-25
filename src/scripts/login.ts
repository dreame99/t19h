class Login {
    private container: HTMLElement | null;

    constructor(container: string) {
        this.container = document.getElementById(container);
    }

    private updateContents(): void {
        if( this.container ) {
            this.container.innerHTML = `
            <article class="login" style="display: flex; justify-content: center; padding: 56px;">
                <div class="inline-box" style="max-width: 100%; display: inline-flex; flex-direction: column; background-color: white; padding: 64px; border: 1px solid #DADADA; border-radius: 16px;">
                    <span style="display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;">로그인</span>
                    <input type="text" id="id" placeholder="아이디" maxlength="16" style="margin-top: 52px; width: 300px; max-width: 100%;">
                    <input type="password" id="password" placeholder="비밀번호" maxlength="16" style="margin-top: 24px;">
                    <label style="display: flex; align-items: center; margin-top: 24px;"><input type="checkbox" id="auto" style="margin-right: 12px;">자동 로그인</label>
                    <button id="loginButton" style="background: #5288F1; border: none; color: #F1F1F1; margin-top: 40px;">로그인</button>
                    <button style="background: #5288F1; border: none; color: #F1F1F1; margin-top: 24px;">회원가입</button>
                </div>
            </article>`;

            document.getElementById("loginButton")?.addEventListener("click", () => {
                var id = document.getElementById("id") as HTMLInputElement;
                var password = document.getElementById("password") as HTMLInputElement;
                var auto = document.getElementById("auto") as HTMLInputElement;
                console.log(id.value, password.value, auto.checked);

                fetch("https://reqres.in/api/login", {
                    method: "POST",
                    body: JSON.stringify({
                        id: id,
                        pass: password,
                        auto: auto.checked? 1 : 0,
                    }),
                })
                .then((response) => response.json())
                .then((result) => {
                    alert(result.error);
                });
            });
        }
    }
  
    public init(): void {
        this.updateContents();
    }
}