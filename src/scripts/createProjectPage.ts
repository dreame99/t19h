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
            article.classList.add("container-layout");
            article.classList.add("column-start-flex-layout");
            article.classList.add("limited-width");
            
            var titleContainer = document.createElement("div");
            titleContainer.classList.add("title-container");
            titleContainer.classList.add("column-start-flex-layout");
            article.appendChild(titleContainer);

            var title = document.createElement("span");
            title.classList.add("title");
            title.innerHTML = "프로젝트 만들기";
            titleContainer.appendChild(title);
            

            var box = document.createElement("div");
            box.classList.add("box-layout");
            box.classList.add("column-flex-layout");
            article.appendChild(box);

            box.innerHTML = `
                <div class="row-stretch-center-flex-layout">
                    <div class="column-start-inline-flex-layout">
                        <div class="column-input-container">
                            <span class="bold-text">프로젝트명</span>
                            <input type="text" placeholder="프로젝트명"/>
                        </div>
                        <div class="column-input-container">
                            <span class="bold-text">프로젝트 인원</span>
                            <input type="text" placeholder="프로젝트 인원" onblur="this.value = this.value.replace(/[^0-9]/g, '')" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')">
                        </div>
                    </div>

                    <div class="column-start-inline-flex-layout">
                        <div class="column-input-container">
                            <span class="bold-text">프로젝트 기간</span>
                            <div>
                                <div class="row-input-container bordered">
                                    <input type="text" class="noborder" placeholder="시작일자" onblur="this.value = this.value.replace(/[^0-9]/g, '')" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')">
                                    <button class="icon-button transparent-button" title="logout"> <svg class="icon" viewBox="0 0 24 24"> <path class="calendar-icon"/> </svg> </button>
                                </div>
                                <div class="row-input-container bordered">
                                    <input type="text" class="noborder" placeholder="종료일자" onblur="this.value = this.value.replace(/[^0-9]/g, '')" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')">
                                    <button class="icon-button transparent-button" title="logout"> <svg class="icon" viewBox="0 0 24 24"> <path class="calendar-icon"/> </svg> </button>
                                </div>
                            </div>
                        </div>
                        <div class="column-input-container">
                            <span class="bold-text">모집 기간</span>
                            <div>
                            <div class="row-input-container bordered">
                                <input type="text" class="noborder" placeholder="시작일자" onblur="this.value = this.value.replace(/[^0-9]/g, '')" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')">
                                <button class="icon-button transparent-button" title="logout"> <svg class="icon" viewBox="0 0 24 24"> <path class="calendar-icon"/> </svg> </button>
                            </div>
                            <div class="row-input-container bordered">
                                <input type="text" class="noborder" placeholder="종료일자" onblur="this.value = this.value.replace(/[^0-9]/g, '')" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')">
                                <button class="icon-button transparent-button" title="logout"> <svg class="icon" viewBox="0 0 24 24"> <path class="calendar-icon"/> </svg> </button>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="row-flex-layout">
                    <div class="column-input-container">
                        <span class="bold-text">사용 기술</span>
                        <div class="column-center-start-flex-layout">
                            <button class="icon-button transparent-button" title="add skill"> <svg class="icon" viewBox="0 0 24 24"> <path class="add-icon"/> </svg> </button>
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