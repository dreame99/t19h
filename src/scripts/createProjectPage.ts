class CreateProjectPage extends Page {
    private async searchUserList(): Promise<User[]> {
        var userList: User[] = [];

        if( SERVER_INFO == "RUN" ) {
            await fetch(API_URL + "/users", {
                method: "POST",
                body: JSON.stringify({type : "최신가입순", count : 1 , page : 1})
            })
            .then((response) => response.json())
            .then((result) => {
                userList = result;
            })
            .catch(e => console.log(e));
        } else {
            for( var i = 0; i < 10; i++ ) {
                userList.push({
                    name: "내가세상가장매콤한사나이",
                    imagePath: "./src/assets/images/avatar" + (((Math.random() * 10) | 0) + 1) + ".png",
                    point: Math.pow(10, 10 - i)
                });
            }
        }
        return userList;
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = "";

            var article = document.createElement("article");
            var div = createElement("div", "", "bucket");
            article.appendChild(div);

            var titleContainer = createElement("div", "", "title-container");
            var span = createElement("span", "", "title");
            span.innerHTML = "프로젝트 만들기";
            titleContainer.appendChild(span);
            div.appendChild(titleContainer);

            var box = createElement("div", "", "box");
            div.appendChild(box);
            box.innerHTML = `
                <div style="display: flex; align-items: flex-start; justify-content: space-between; width: 100%;">
                    <div style="display: flex; flex-direction: column; gap: 28px;">
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <span>프로젝트명</span>
                            <input type="text" placeholder="프로젝트명"/>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <span>프로젝트 인원</span>
                            <input type="text" placeholder="프로젝트 인원"/>
                        </div>
                    </div>
                    <div style="display: flex; flex-direction: column; gap: 28px;">
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <span>프로젝트 기간</span>
                            <div>
                                <input type="text" placeholder="시작일자"/>
                                <input type="text" placeholder="종료일자"/>
                            </div>
                        </div>
                        <div style="display: flex; flex-direction: column; gap: 12px;">
                            <span>모집 기간</span>
                            <div>
                                <input type="text" placeholder="시작일자"/>
                                <input type="text" placeholder="종료일자"/>
                            </div>
                        </div>
                    </div>
                </div>

                <div style="width: 100%;">
                    <div style="display: flex; flex-direction: column; gap: 12px;">
                        <span>사용 기술</span>
                        <div style="width: 400px; height: 56px; background-color: #F1F1F1;">
                        </div>
                    </div>
                </div>

                <textarea placeholder="내용을 입력하세요." style="width: 100%; height: 400px; background-color: #F1F1F1; border: 1px solid #DCDCDC;"></textarea>

                <button>생성하기</button>
            `;

            this.contents.appendChild(article);
        }
    }

    protected bindingEvents(): void {
    }
}