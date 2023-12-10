class ProjectListPage extends Page {
    private async searchProjectList(): Promise<Project[]> {
        var projectList: Array<Project> = [];

        if( SERVER_INFO == "RUN" ) {
            await fetch(API_URL + "/projects", {
                method: "POST",
                body: JSON.stringify({type : "최신순", count : 1 , page : 1})
            })
            .then((response) => response.json())
            .then((result) => {
                projectList = result;
            })
            .catch(e => console.log(e));
        } else {
            for( var i = 0; i < 9; i++ ) {
                projectList.push({
                    recruitStartDate : "20231115",
                    recruitEndDate : "20231215",
                    title : "팀원구함",
                    contents : "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i * 2),
                    currentMember : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i)),
                    additionalRecruitMember : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i)),
                    skills: ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"].slice(0, i),
                    watchCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(12, i)),
                    goodCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(6, i)),
                    mentionCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i))
                });
            }
        }
        return projectList;
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = "";

            var projectList: Project[] = await this.searchProjectList();

            var article = createElement("article");
            var div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
            article.appendChild(div);

            var titleContainer = createElement("div", "", "title-container", "width: 100%; display: flex; align-items: flex-end; justify-content: space-between;");

            var span = createElement("span", "", "title");
            span.innerHTML = "프로젝트 목록";
            titleContainer.appendChild(span);



            var dropDown = createElement("div", "", "", "display: flex; align-items: center; gap: 12px; cursor: pointer; position: relative;");
            dropDown.innerHTML = `
                <span style="text-wrap: nowrap;">최신순</span>
                <svg viewBox="0 0 24 24" style="width: 24px; height: 24px;">
                    <path d="M4 7 L12 17 L20 7" style="fill: none; stroke: black; stroke-width: 2px;"></path>
                </svg>
            `;
            var ul = createElement("ul", "", "", "list-style: none; background: white; width: 100%; position: absolute; top: 100%; box-shadow: 0 8px 8px #0002; display: none;") as HTMLElement;
            var li1 = createElement("li", "", "", "margin: 12px;");
            li1.innerHTML = "최신순";
            li1.addEventListener("click", () => {
                var span = dropDown.querySelector("span") as HTMLElement;
                span.innerHTML = "최신순";
            });
            ul.appendChild(li1);
            var li2 = createElement("li", "", "", "margin: 12px;");
            li2.innerHTML = "인기순";
            li2.addEventListener("click", () => {
                var span = dropDown.querySelector("span") as HTMLElement;
                span.innerHTML = "인기순";
            });
            ul.appendChild(li2);
            var li3 = createElement("li", "", "", "margin: 12px;");
            li3.innerHTML = "과거순";
            li3.addEventListener("click", () => {
                var span = dropDown.querySelector("span") as HTMLElement;
                span.innerHTML = "과거순";
            });
            ul.appendChild(li3);
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

            var projectListContainer = createElement("article", "projectList", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
            div.appendChild(projectListContainer);
            projectList.forEach(project => projectListContainer.append((new ProjectAbridgement(project)).getElement()));
        
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