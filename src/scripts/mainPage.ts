abstract class Page {
    protected contents: HTMLElement;

    constructor(contents: HTMLElement) {
        this.contents = contents;
    }

    protected abstract render(): void;

    protected abstract bindingEvents(): void;
  
    public init(): void {
        this.render();
        this.bindingEvents();
    }
}

class MainPage extends Page {
    private async searchNewProjectList(): Promise<Project[]> {
        var newProjectList: Array<Project> = [];
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
        for( var i = 0; i < 5; i++ ) {
            newProjectList.push({
                recruitStartDate : "20231115",
                recruitEndDate : "20231215",
                title : "팀원구함",
                contents : "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i * 2),
                currentMember : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(42, i)),
                additionalRecruitMember : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(53, i)),
                skills: ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"].slice(0, i),
                watchCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(64, i)),
                goodCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(75, i)),
                mentionCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(86, i))
            });
        }
        return newProjectList;
    }

    private async searchPopularProjectList(): Promise<Project[]> {
        var popularProjectList: Array<Project> = [];
        /*
        await fetch(API_URL + "/projects", {
            method: "POST",
            body: JSON.stringify({type: "인기많은순"})
        })
        .then((response) => response.json())
        .then((result) => {
            popularProjectList = result;
        })
        .catch(e => console.log(e));
        */
        for( var i = 0; i < 15; i++ ) {
            popularProjectList.push({
                recruitStartDate : "20231115",
                recruitEndDate : "20231215",
                title : "팀원구함",
                contents : "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i),
                currentMember : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(42, i)),
                additionalRecruitMember : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(53, i)),
                skills: ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"].slice(0, i),
                watchCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(64, i)),
                goodCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(75, i)),
                mentionCount: Math.min(Number.MAX_SAFE_INTEGER, Math.pow(86, i))
            });
        }
        
        return popularProjectList;
    }

    private async searchHighestScoreMemberList(): Promise<number[]> {
        var highestScoreMemberList: Array<number> = [];
        /*
        await fetch(API_URL + "/projects", {
            method: "POST",
            body: JSON.stringify({type: "인기많은순"})
        })
        .then((response) => response.json())
        .then((result) => {
            highestScoreMemberList = result;
        })
        .catch(e => console.log(e));
        */
        for( var i = 0; i < 15; i++ ) {
            highestScoreMemberList.push(1);
        }
        
        return highestScoreMemberList;
    }

    private async renderNewProjectList(): Promise<void> {
        var newProjectList: Project[] = await this.searchNewProjectList();
        if( newProjectList.length ) {
            var article = createElement("article");
            var div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
            article.appendChild(div);
            var span = createElement("span", "", "title");
            span.innerHTML = "이달의 새로운 프로젝트";
            div.appendChild(span);
            var newProject = createElement("article", "newProject", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
            div.appendChild(newProject);
        
            var carousel = new Carousel();
            newProject.appendChild(carousel.getElement());
            newProjectList.forEach(newProject => carousel.append((new ProjectAbridgement(newProject)).getElement()));

            this.contents.appendChild(article);
        }
    }

    private async renderPopularProjectList(): Promise<void> {
        var popularProjectList: Project[] = await this.searchPopularProjectList();

        if( popularProjectList.length > 0 ) {
            var article = createElement("article");
            var div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
            article.appendChild(div);
            var span = createElement("span", "", "title");
            span.innerHTML = "인기 프로젝트";
            div.appendChild(span);
            var popularProjectContainer = createElement("article", "popularProject", "", "margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
            div.appendChild(popularProjectContainer);

            popularProjectList.forEach(popularProject => popularProjectContainer.append((new ProjectAbridgement(popularProject)).getElement()));

            this.contents.appendChild(article);
        }
    }

    private async renderHighesScoreMemberList(): Promise<void> {
        var highestScoreMemberList: number[] = await this.searchHighestScoreMemberList();
        if( highestScoreMemberList.length > 0 ) {
            var article = createElement("article");
            var div = createElement("div", "", "", "width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;");
            article.appendChild(div);
            var span = createElement("span", "", "title");
            span.innerHTML = "당신의 열정을 칭찬합니다.";
            div.appendChild(span);
            var highestScoreMember = createElement("article", "highestScoreMember", "", "width: 100%; margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;");
            div.appendChild(highestScoreMember);
        
            var carousel = new Carousel();
            highestScoreMember.appendChild(carousel.getElement());
            highestScoreMemberList.forEach(member => {
                var div = document.createElement("div") as HTMLElement;
                div.style.padding = "20px";
                div.style.width = "200px";
                div.style.height = "200px";
                div.style.background = "white";
                carousel.append(div);
            });

            this.contents.appendChild(article);
        }
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = "";

            await this.renderNewProjectList();
            await this.renderPopularProjectList();
            await this.renderHighesScoreMemberList();
        }
    }

    protected bindingEvents(): void {
    }
}