class ProjectListPage extends Page {
    private PAGE_COUNT: number = 9;
    private MAX_PAGE: number = 10;
    
    private totalCount: number | undefined;
    private currentPage: number = 1;
    private phase: number = 1;
    private maxPhase: number = 1;
    private selectedPos: number = 1;

    private async searchProjectList(): Promise<Project[]> {
        var cond = "count=" + this.PAGE_COUNT + "&page=" + this.currentPage;
        var sort: HTMLElement | null = document.querySelector("#sort");
        if( sort ) {
            cond += "&sort=" + sort.dataset.name;
        }
        
        var projectList: Project[] = [];

        await getFetch("projects", cond).then(result => {
            if( result.result.code == 104 ) {
                projectList = result.data as Project[];
                this.totalCount = result.option?.countList;
                this.updatePageCount();
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
            this.totalCount = 100;
            this.updatePageCount();
        });

        return projectList;
    }

    private updatePageCount(): void {
        console.log("totalCount", this.totalCount);
        if( this.totalCount ) {
            var totalPage: number = Math.ceil(this.totalCount / this.PAGE_COUNT);
            console.log("maxPage", totalPage);

            this.currentPage = Math.min(totalPage, (this.phase - 1) * this.MAX_PAGE + this.selectedPos);
            this.maxPhase = Math.max(1, Math.ceil(totalPage / 10));
            console.log("currentPage", this.currentPage);
            console.log("maxPhase", this.maxPhase);

            var count = Math.min(this.MAX_PAGE, totalPage - (this.phase - 1) * this.MAX_PAGE);
            var pageContainer: HTMLElement | null = document.querySelector("#pageContainer");
            if( pageContainer ) {
                var html = "";
                for( var i = 1; i <= count; i++ ) {
                    var textClass = "";
                    if( i == this.currentPage - (this.phase - 1) * this.MAX_PAGE || i == count && i < this.currentPage - (this.phase - 1) * this.MAX_PAGE ) {
                        textClass = "highlight-text";
                    }
                    html += `<span class="padding-level-3 clickable ${textClass}">${i + (this.phase - 1) * this.MAX_PAGE}</span>`;
                }
                pageContainer.innerHTML = html;
            }
        }
    }

    private async updateProjectList(): Promise<void> {
        var projectContainer: HTMLElement | null = document.querySelector("#projectContainer");
        var projectList: Project[] = await this.searchProjectList();

        if( projectContainer ) {
            var html = "";
            projectList.forEach(project => {
                var skillListHtml = "";
                project.skills.forEach(skill => {
                    skillListHtml += `
                        <div data-name="skillCard">
                            <span data-name="skillId" style="display: none;"></span>
                            <img src="${API_URL}/${skill.image}" title="${skill.name}" style="width: 48px; height: 48px;">
                        </div>`;
                });
                
                html += `
                    <article class="box-layout column-top-stretch-flex-layout padding-level-8 gap-level-6 clickable" data-name="projectCard" onclick="ProjectListPage.openProjectDetail(this)">
                        <span data-name="projectId" style="display: none;">210312492937sad</span>
                        <div class="row-middle-stretch-flex-layout">
                            <span>${project.teamRecruitmentStartDate} ~ ${project.teamRecruitmentEndDate}</span>
                            <span class="padding-level-4 round filled">모집중</span>
                        </div>
                        <div>
                            <span class="title-text">${project.title}</span>
                        </div>
                        <div style="display: -webkit-box; -webkit-line-clamp: 5; -webkit-box-orient: vertical; overflow: hidden;">
                            ${project.content}
                        </div>
                        <div class="line"></div>
                        <div class="row-middle-stretch-flex-layout gap-level-5">
                            <div class="row-middle-stretch-flex-layout gap-level-2">
                                <span class="bold-text">현재 인원</span>
                                <span>1명</span>
                            </div>
                            <div class="row-middle-stretch-flex-layout gap-level-2">
                                <span class="bold-text">모집 인원</span>
                                <span>${toSummaryNumber(project.personnel)}명</span>
                            </div>
                        </div>
                        <div class="column-middle-left-flex-layout gap-level-5">
                            <span class="bold-text">기술 스택</span>
                            <div class="row-top-left-flex-layout gap-level-2 wrap">
                                ${skillListHtml}
                            </div>
                        </div>
                        <div class="row-middle-right-flex-layout gap-level-5 wrap">
                            <div class="row-middle-left-flex-layout gap-level-2">
                                <svg class="icon" viewBox="0 0 24 24"> <path class="eye-icon"/> </svg>
                                <span>${toSummaryNumber(project.countViews)}</span>
                            </div>
                            <div class="row-middle-left-flex-layout gap-level-2">
                                <svg class="icon" viewBox="0 0 24 24"> <path class="heart-icon"/> </svg>
                                <span>${toSummaryNumber(project.countGreats)}</span>
                            </div>
                            <div class="row-middle-left-flex-layout gap-level-2">
                                <svg class="icon" viewBox="0 0 24 24"> <path class="bubble-icon"/> </svg>
                                <span>${toSummaryNumber(project.countViews)}</span>
                            </div>
                        </div>
                    </article>`
            });
            projectContainer.innerHTML = html;
        }
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = `
                <section class="container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10">
                    <article class="row-middle-stretch-flex-layout">
                        <h1 class="title-text bold-text">프로젝트 목록</h1>
                        <div class="row-middle-right-flex-layout" style="position: relative;">
                            <div id="sortDropDown" class="row-middle-left-flex-layout clickable">
                                <span id="sort" data-name="latest">최신순</span>
                                <button class="icon-button transparent-button"> <svg class="icon" viewBox="0 0 24 24"> <path class="bottom-icon"/> </svg> </button>
                            </div>
                            
                            <ul id="sortMenu" class="box-layout" style="position: absolute; top: 100%; left: 0; width: 100%; display: none;">
                                <li class="padding-level-4 clickable" data-name="latest">최신순</li>
                                <li class="padding-level-4 clickable" data-name="old">과거순</li>
                                <li class="padding-level-4 clickable" data-name="best">인기순</li>
                            </ul>
                        </div>
                    </article>

                    <article id="projectContainer" class="row-top-left-flex-layout gap-level-8 item-3-layout wrap">
                    </article>

                    <article class="row-middle-center-flex-layout">
                        <button id="prevPageButton" class="icon-button transparent-button"> <svg class="icon" viewBox="0 0 24 24"> <path class="left-icon"/> </svg> </button>
                        <div id="pageContainer" class="row-middle-center-flex-layout">
                        </div>
                        <button id="nextPageButton" class="icon-button transparent-button"> <svg class="icon" viewBox="0 0 24 24"> <path class="right-icon"/> </svg> </button>
                    </article>
                </section>`;
            
            this.updateProjectList();
        }
    }

    protected bindingEvents(): void {
        var sort: HTMLElement | null = document.querySelector("#sort");
        var sortDropDown: HTMLElement | null = document.querySelector("#sortDropDown");
        var sortMenu: HTMLElement | null = document.querySelector("#sortMenu");
        var prevPageButton: HTMLElement | null = document.querySelector("#prevPageButton");
        var nextPageButton: HTMLElement | null = document.querySelector("#nextPageButton");
        var pageContainer: HTMLElement | null = document.querySelector("#pageContainer");
        
        sortDropDown?.addEventListener("click", () => {
            if( sortMenu ) {
                sortMenu.style.display = sortMenu.style.display == "none"? "block" : "none";
            }
        });
        sortMenu?.addEventListener("click", (e) => {
            var target: HTMLElement | null = e.target as HTMLElement | null;
            if( sort && target ) {
                sort.innerText = target.innerText;
                sort.dataset.name = target.dataset.name;
                if( sortMenu ) {
                    sortMenu.style.display = "none";
                }
                this.updateProjectList();
            }
        });
        prevPageButton?.addEventListener("click", () => {
            this.phase = Math.min(this.maxPhase, this.phase - 1);
            this.updateProjectList();
        });
        nextPageButton?.addEventListener("click", () => {
            this.phase = Math.min(this.maxPhase, this.phase + 1);
            this.updateProjectList();
        });
        pageContainer?.addEventListener("click", e => {
            var target: HTMLElement | null = e.target as HTMLElement;
            if( target ) {
                pageContainer?.querySelectorAll("span").forEach((page, i) => {
                    if( page == target ) {
                        this.selectedPos = i + 1;
                        this.updateProjectList();
                    }
                })
            }
        });
    }

    public static openProjectDetail(projectCard: HTMLElement) {
        var projectId: string | undefined = projectCard.querySelector("[data-name=projectId]")?.innerHTML;
        if( projectId ) {
            console.log(projectId);
            //navigate("create-project", {projectId});
            navigate("create-project");
        }
    }
}