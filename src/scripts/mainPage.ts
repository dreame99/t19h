class MainPage extends Page {
    private PAGE_COUNT: number = 9;

    private async searchLatestProjectList(): Promise<Project[]> {
        var date: Date = new Date();
        var y: string = "" + date.getFullYear();
        var m: string = "" + (date.getMonth() + 1);
        m = (Number(m) < 10? "0" + m : m);

        var cond = "count=" + this.PAGE_COUNT + "&start=" + (y + "-" + m + "-01") + "&end=" + (y + "-" + m + "-31");
        
        var projectList: Project[] = [];

        await getFetch("projects", cond).then(result => {
            if( result.result.code == 104 ) {
                projectList = result.data as Project[];
            } else {
                alert(API_RESULT_CODE[result.result.code]);
            }
        }).catch((e) => {
            for( var i = 0; i < this.PAGE_COUNT; i++ ) {
                projectList.push({
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
        });

        return projectList;
    }

    private async updateLatestProjectList(): Promise<void> {
        var projectCarousel: HTMLElement | null = document.querySelector("#projectCarousel");
        var projectList: Project[] = await this.searchLatestProjectList();

        if( projectCarousel ) {
            var html = "";
            projectList.forEach(project => {
                var skillListHtml = "";
                project.skills.forEach(skill => skillListHtml += getSkillCardElement(skill));
                html += getProjectCardElement(project, skillListHtml);
            });
            projectCarousel.innerHTML = html;
        }
    }

    private async searchBestProjectList(): Promise<Project[]> {
        var cond = "count=" + this.PAGE_COUNT + "&sort=best";
        
        var projectList: Project[] = [];

        await getFetch("projects", cond).then(result => {
            if( result.result.code == 104 ) {
                projectList = result.data as Project[];
            } else {
                alert(API_RESULT_CODE[result.result.code]);
            }
        }).catch((e) => {
            for( var i = 0; i < this.PAGE_COUNT; i++ ) {
                projectList.push({
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
        });

        return projectList;
    }

    private async updateBestProjectList(): Promise<void> {
        var bestProjectContainer: HTMLElement | null = document.querySelector("#bestProjectContainer");
        var projectList: Project[] = await this.searchBestProjectList();

        if( bestProjectContainer ) {
            var html = "";
            projectList.forEach(project => {
                var skillListHtml = "";
                project.skills.forEach(skill => skillListHtml += getSkillCardElement(skill));
                html += getProjectCardElement(project, skillListHtml);
            });
            bestProjectContainer.innerHTML = html;
        }
    }

    private async searchUserList(): Promise<User[]> {
        var cond = "count=" + this.PAGE_COUNT + "&sort=score";
        
        var userList: User[] = [];

        await getFetch("users", cond).then(result => {
            if( result.result.code == 104 ) {
                userList = result.data as User[];
            } else {
                alert(API_RESULT_CODE[result.result.code]);
            }
        })
        .catch(e => alert("error msg : " + e));

        return userList;
    }

    private async updateUserList(): Promise<void> {
        var userCarousel: HTMLElement | null = document.querySelector("#userCarousel");
        var userList: User[] = await this.searchUserList();

        if( userCarousel ) {
            var html = "";
            userList.forEach(user => html += getUserCardElement(user));
            userCarousel.innerHTML = html;
        }
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = `
                <section class="container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10" style="overflow: hidden;">
                    <article class="row-middle-stretch-flex-layout">
                        <h1 class="title-text bold-text">이달의 새로운 프로젝트</h1>
                    </article>
        
                    <article id="projectContainer">
                        <article id="projectCarousel" class="row-top-left-flex-layout gap-level-8 item-3-layout" data-name="carousel">
                        </article>
                    </article>
                </section>
        
                <section class="container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10">
                    <article class="row-middle-stretch-flex-layout">
                        <h1 class="title-text bold-text">인기 프로젝트</h1>
                    </article>
        
                    <article id="bestProjectContainer" class="row-top-left-flex-layout gap-level-8 wrap item-3-layout">
                    </article>
                </section>
        
                <section class="container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10" style="overflow: hidden;">
                    <article class="row-middle-stretch-flex-layout">
                        <h1 class="title-text bold-text">당신의 열정을 칭찬합니다!</h1>
                    </article>
        
                    <article id="userContainer">
                        <article id="userCarousel" class="row-top-left-flex-layout gap-level-8 item-5-layout" data-name="carousel">
                        </article>
                    </article>
                </section>`;

            this.updateLatestProjectList();
            this.updateBestProjectList();
            this.updateUserList();
        }
    }

    protected bindingEvents(): void {
        var projectContainer: HTMLElement | null = document.querySelector("#projectContainer");
        var projectCarousel: HTMLElement | null = document.querySelector("#projectCarousel");
        var userContainer: HTMLElement | null = document.querySelector("#userContainer");
        var userCarousel: HTMLElement | null = document.querySelector("#userCarousel");
        var originX: number;
        var prevX: number;
        var isProjectDrag: boolean = false;
        var isUserDrag: boolean = false;
        
        projectCarousel?.addEventListener("mousedown", e => {
            if( projectCarousel && projectContainer ) {
                isProjectDrag = true;
                originX = projectCarousel.getBoundingClientRect().x - projectContainer.getBoundingClientRect().x;
                prevX = e.clientX;
            }
        });
        userCarousel?.addEventListener("mousedown", e => {
            if( userCarousel && userContainer ) {
                isUserDrag = true;
                originX = userCarousel.getBoundingClientRect().x - userContainer.getBoundingClientRect().x;
                prevX = e.clientX;
            }
        });

        window.addEventListener("mousemove", e => {
            if( isProjectDrag ) {
                if( projectCarousel && projectContainer ) {
                    var gap = 32;
                    var itemWidth = (projectContainer.getBoundingClientRect().width - gap * 2) / 3;
                    var listWidth = Math.max(0, projectCarousel.children.length - 1) * gap + projectCarousel.children.length * itemWidth;
    
                    projectCarousel.style.left = Math.min(0, Math.max(-(listWidth - projectCarousel.clientWidth), originX + e.clientX - prevX)) + "px";
                }
            }
            if( isUserDrag ) {
                if( userCarousel && userContainer ) {
                    var gap = 32;
                    var itemWidth = 200;
                    var listWidth = Math.max(0, userCarousel.children.length - 1) * gap + userCarousel.children.length * itemWidth;
    
                    userCarousel.style.left = Math.min(0, Math.max(-(listWidth - userCarousel.clientWidth), originX + e.clientX - prevX)) + "px";
                }
            }
        });

        window.addEventListener("mouseup", e => {
            isProjectDrag = false;
            isUserDrag = false;
        });
    }
}