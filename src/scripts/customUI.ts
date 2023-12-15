interface Skill {
    id?: string;
    name: string;
    image: string;
}
interface Project {
    id?: string;
    teamRecruitmentStartDate: string;
    teamRecruitmentEndDate: string;
    title: string;
    content: string;
    personnel: number;
    skills: {name: string, image: string}[];
    countViews: number;
    countGreats: number;
    countComments: number;
    recruitState?: boolean;
}
interface User {
    id?: string;
    nickname: string;
    fileRealName: string;
    score: number;
    confidentSkills?: Skill[];
    wantToStudySkills?: Skill[];
    disclosure?: boolean;
}

function getSkillCardElement(skill: Skill, clickFunc?: string) {
    return `
        <div data-name="skillCard">
            <span data-name="skillId" style="display: none;">${skill.id}</span>
            <img src="${IMG_PATH}/${skill.image}" title="${skill.name}" style="width: 48px; height: 48px;">
        </div>`;
}

function getProjectCardElement(project: Project, skillListHtml?: string, clickFunc?: string) {
    return `
    <article class="box-layout column-top-stretch-flex-layout padding-level-8 gap-level-6 clickable" data-name="projectCard" onclick="${clickFunc}">
        <span data-name="projectId" style="display: none;">${project.id}</span>
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
    </article>`;
}

function getUserCardElement(user: User, clickFunc?: string) {
    return `
        <div class="column-top-center-flex-layout gap-level-4" data-name="userCard">
            <div class="column-top-center-flex-layout">
                <span data-name="userId" style="display: none;">${user.id}</span>
                <span class="filled round horsetail padding-level-3">${user.score.toLocaleString()}점</span>
                <img class="bordered round" src="${IMG_PATH}/${user.fileRealName? user.fileRealName : "profile/99321b41-ed25-4472-8157-56a94c81a5cb_avatar10.png"}" style="width: 200px; height: 200px; margin-top: -19px;">
            </div>
            <span>${user.nickname}</span>
        </div>`;
}

window.addEventListener("scroll", () => {
    var headerContainer: HTMLElement | null = document.getElementById("headerContainer");
    var contentsContainer: HTMLElement | null = document.getElementById("contentsContainer");
    
    if( headerContainer && contentsContainer ) {
        if( window.scrollY > headerContainer.clientHeight ) {
            headerContainer.classList.add("fixed");
            contentsContainer.classList.add("fixed");
        } else {
            headerContainer.classList.remove("fixed");
            contentsContainer.classList.remove("fixed");
        }
    }
});

function toDateString(date: string): string {
    if( date.length == 8 ) {
        return date.substring(0, 4) + "-" + date.substring(4, 6) + "-" + date.substring(6, 8);
    }
    
    return date;
}

function toSummaryNumber(n: number): string {
    // kilo, million, billion, trillion, quadrillion
    var units = ["", "K", "M", "B", "T", "Q"];
    var idx = Math.min(units.length - 1, (("" + n).length - 1) / 3 | 0);

    return Math.round(((n / Math.pow(1000, idx))) * 10) / 10 + units[idx];
}