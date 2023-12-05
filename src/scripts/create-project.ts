class CreateProjectPage extends Page {
    private async searchProjectList(): Promise<Project[]> {
        var projectList: Array<Project> = [];
        /*
        await fetch(API_URL + "/projects", {
            method: "POST",
            body: JSON.stringify({date : "20231202"})
        })
        .then((response) => response.json())
        .then((result) => {
            newProjectList = result;
        })
        .catch(e => console.log(e));
        */
        for( var i = 0; i < 25; i++ ) {
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
        return projectList;
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = "";

            var projectList: Project[] = await this.searchProjectList();

            var article = createElement("article");
            var div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
            article.appendChild(div);
            var span = createElement("span", "", "title");
            span.innerHTML = "프로젝트 목록";
            div.appendChild(span);
            var projectListContainer = createElement("article", "projectList", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
            div.appendChild(projectListContainer);
            projectList.forEach(project => projectListContainer.append((new ProjectAbridgement(project)).getElement()));
            var pageCountContainer = createElement("article", "pageCount", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; justify-content: center; align-items: center;");
            div.appendChild(pageCountContainer);
            var leftButton = createElement("button", "", "", "width: 24px; height: 24px; padding: 0; background-color: #393939; color: white; border-radius: 12px 0 0 12px;");
            leftButton.innerHTML = "<";
            pageCountContainer.appendChild(leftButton);
            var page1 = createElement("div", "", "", "width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; cursor: pointer;");
            page1.innerHTML = "1";
            pageCountContainer.appendChild(page1);
            var page2 = createElement("div", "", "", "width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; cursor: pointer;");
            page2.innerHTML = "2";
            pageCountContainer.appendChild(page2);
            var page3 = createElement("div", "", "", "width: 24px; height: 24px; display: flex; justify-content: center; align-items: center; cursor: pointer;");
            page3.innerHTML = "3";
            pageCountContainer.appendChild(page3);
            var rightButton = createElement("button", "", "", "width: 24px; height: 24px; padding: 0; background-color: #393939; color: white; border-radius: 0 12px 12px 0;");
            rightButton.innerHTML = ">";
            pageCountContainer.appendChild(rightButton);

            this.contents.appendChild(article);
        }
    }

    protected bindingEvents(): void {
    }
}