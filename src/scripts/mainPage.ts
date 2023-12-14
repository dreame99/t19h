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

function createTitleContainer(title: string): HTMLElement {
    var titleContainer = document.createElement("div");
    titleContainer.classList.add("title-container");
    var span = document.createElement("span");
    span.classList.add("title");
    span.innerHTML = title;
    titleContainer.appendChild(span);

    return titleContainer;
}

class MainPage extends Page {
    private async searchNewProjectList(): Promise<Project[]> {
        var newProjectList: Array<Project> = [];

        if( SERVER_INFO == "RUN" ) {
            await fetch(API_URL + "projects", {
                method: "POST",
                body: JSON.stringify({type: "최신순", searchStartDate : "20231201", searchEndDate : "20231231", count: 10})
            })
            .then((response) => response.json())
            .then((result) => {
                newProjectList = result;
            })
            .catch(e => console.log(e));
        } else {
            for( var i = 0; i < 10; i++ ) {
                newProjectList.push({
                    id : "" + (Math.random() * 1000000 | 0),
                    teamRecruitmentStartDate : "2023-11-15",
                    teamRecruitmentEndDate : "2023-12-15",
                    title : "팀원구함",
                    content : "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i * 2),
                    personnel : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i)),
                    skills : [{name : "bootstrap", image : "skills/bootstrap-original.png"}, {name : "figma", image : "skills/figma-original.png"}, {name : "mongodb", image : "mongodb-original.png"}].slice(0, i),
                    countViews : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(12, i)),
                    countGreats : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(6, i)),
                    countComments : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i))
                });
            }
        }
        return newProjectList;
    }

    private async searchPopularProjectList(): Promise<Project[]> {
        var popularProjectList: Array<Project> = [];

        if( SERVER_INFO == "RUN" ) {
            await fetch(API_URL + "projects", {
                method: "POST",
                body: JSON.stringify({type: "인기많은순", count: 9})
            })
            .then((response) => response.json())
            .then((result) => {
                popularProjectList = result;
            })
            .catch(e => console.log(e));
        } else {
            for( var i = 0; i < 9; i++ ) {
                popularProjectList.push({
                    id : "" + (Math.random() * 1000000 | 0),
                    teamRecruitmentStartDate : "2023-11-15",
                    teamRecruitmentEndDate : "2023-12-15",
                    title : "팀원구함",
                    content : "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br>".repeat(i * 2),
                    personnel : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i)),
                    skills : [{name : "bootstrap", image : "skills/bootstrap-original.png"}, {name : "figma", image : "skills/figma-original.png"}, {name : "mongodb", image : "mongodb-original.png"}].slice(0, i),
                    countViews : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(12, i)),
                    countGreats : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(6, i)),
                    countComments : Math.min(Number.MAX_SAFE_INTEGER, Math.pow(2, i))
                });
            }
        }
        
        return popularProjectList;
    }

    private async searchHighestScoreMemberList(): Promise<User[]> {
        var highestScoreMemberList: Array<User> = [];
        if( SERVER_INFO == "RUN" ) {
            await fetch(API_URL + "projects", {
                method: "POST",
                body: JSON.stringify({type: "인기많은순"})
            })
            .then((response) => response.json())
            .then((result) => {
                highestScoreMemberList = result;
            })
            .catch(e => console.log(e));
        } else {
            for( var i = 0; i < 10; i++ ) {
                highestScoreMemberList.push({
                    name: "내가세상가장매콤한사나이",
                    imagePath: "./src/assets/images/avatar" + (((Math.random() * 10) | 0) + 1) + ".png",
                    point: Math.pow(10, 10 - i)
                });
            }
        }
        
        return highestScoreMemberList;
    }

    private async renderNewProjectList(): Promise<void> {
        var newProjectList: Project[] = await this.searchNewProjectList();
        if( newProjectList.length ) {
            var article = document.createElement("article");
            var bucket = document.createElement("div");
            bucket.classList.add("bucket");
            article.appendChild(bucket);

            bucket.appendChild(createTitleContainer("이달의 새로운 프로젝트"));

            var newProject = document.createElement("article");
            newProject.classList.add("box");
            bucket.appendChild(newProject);
        
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
            var div = createElement("div", "", "bucket");
            article.appendChild(div);
            
            div.appendChild(createTitleContainer("인기 프로젝트"));

            var popularProjectContainer = createElement("article", "popularProject", "list-box");
            div.appendChild(popularProjectContainer);

            popularProjectList.forEach(popularProject => popularProjectContainer.append((new ProjectAbridgement(popularProject)).getElement()));

            this.contents.appendChild(article);
        }
    }

    private async renderHighesScoreMemberList(): Promise<void> {
        var highestScoreMemberList: User[] = await this.searchHighestScoreMemberList();
        if( highestScoreMemberList.length > 0 ) {
            var article = createElement("article");
            var div = createElement("div", "", "bucket");
            article.appendChild(div);
            
            div.appendChild(createTitleContainer("당신의 열정을 칭찬합니다."));

            var highestScoreMember = createElement("article", "highestScoreMember", "box");
            div.appendChild(highestScoreMember);
        
            var carousel = new Carousel();
            highestScoreMember.appendChild(carousel.getElement());
            highestScoreMemberList.forEach(user => carousel.append((new UserAbridgement(user)).getElement()));

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