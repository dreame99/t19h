class UserListPage extends Page {
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

            var userList: User[] = await this.searchUserList();

            var article = createElement("article");
            var div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
            article.appendChild(div);

            var titleContainer = createElement("div", "", "title-container", "width: 100%; display: flex; align-items: flex-end; justify-content: space-between;");

            var span = createElement("span", "", "title");
            span.innerHTML = "사용자 목록";
            titleContainer.appendChild(span);



            var dropDown = createElement("div", "", "", "display: flex; align-items: center; gap: 12px; cursor: pointer; position: relative; z-index: 2;");
            dropDown.innerHTML = `
                <span style="text-wrap: nowrap;">최신가입순</span>
                <svg viewBox="0 0 24 24" style="width: 24px; height: 24px;">
                    <path d="M4 7 L12 17 L20 7" style="fill: none; stroke: black; stroke-width: 2px;"></path>
                </svg>
            `;
            var ul = createElement("ul", "", "", "list-style: none; background: white; width: 100%; position: absolute; top: 100%; box-shadow: 0 8px 8px #0002; display: none;") as HTMLElement;
            var li1 = createElement("li", "", "", "margin: 12px;");
            li1.innerHTML = "최신가입순";
            li1.addEventListener("click", () => {
                var span = dropDown.querySelector("span") as HTMLElement;
                span.innerHTML = "최신가입순";
            });
            ul.appendChild(li1);
            var li2 = createElement("li", "", "", "margin: 12px;");
            li2.innerHTML = "점수높은순";
            li2.addEventListener("click", () => {
                var span = dropDown.querySelector("span") as HTMLElement;
                span.innerHTML = "점수높은순";
            });
            ul.appendChild(li2);
            dropDown.appendChild(ul);

            dropDown.addEventListener("click", () => {
                if( ul.style.display == "none" ) {
                    ul.style.display = "inline";
                } else {
                    ul.style.display = "none";
                }
            });

            titleContainer.appendChild(dropDown);



            div.appendChild(titleContainer);

            var userListContainer = createElement("article", "userList", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
            div.appendChild(userListContainer);
            userList.forEach(user => userListContainer.append((new UserAbridgement(user)).getElement()));
        
            var pageContainer = new PageContainer();
            //pageContainer.setTotalCount(90);
            var pageContainerElem = pageContainer.getElement();
            pageContainerElem.style.marginTop = "20px";
            div.appendChild(pageContainerElem);

            this.contents.appendChild(article);
        }
    }

    protected bindingEvents(): void {
    }
}