interface Project {
    recruitStartDate: string;
    recruitEndDate: string;
    title: string;
    contents: string;
    currentMember: number;
    additionalRecruitMember: number;
    skills: Array<string>;
    watchCount: number;
    goodCount: number;
    mentionCount: number;
}

class ProjectAbridgement {
    private project: Project;
    private projectAbridgement: HTMLElement;

    constructor(project: Project) {
        this.project = project;

        this.projectAbridgement = document.createElement("div");
        this.projectAbridgement.classList.add("project-abridgement");

        var skillList: string = "";
        this.project.skills.forEach(v => {
            skillList += `<img title=${v} src=${"./src/assets/images/" + v + "-original.png"} style="width: 36px; height: 36px;">`;
        });

        this.projectAbridgement.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center;">
                <span class="recruitPeriod" style="overflow: hidden; text-overflow: ellipsis;">${toDateString(this.project.recruitStartDate)} ~ ${toDateString(this.project.recruitEndDate)}</span>
                <div class="state running" style="padding: 12px; border-radius: 999em; background: #5288F1; color: white;">모집중</div>
            </div>
            <span class="title" style="font-size: 2rem; font-family: 'NIXGONFONTS-B';">${this.project.title}</span>
            <span class="contents" style="display: -webkit-box; -webkit-line-clamp: 5; overflow: hidden; -webkit-box-orient: vertical;">${this.project.contents}</span>
            <div class="line" style="height: 1px; background: #DCDCDC;"></div>
            <div style="display: flex; justify-content: space-between; flex-wrap: wrap;">
                <div style="display: flex; gap: 20px;">
                    <span>현재 인원</span>
                    <span class="currentMember" style="overflow-wrap: anywhere;">${this.project.currentMember}</span>
                </div>
                <div style="display: flex; gap: 20px;">
                    <span>추가 모집</span>
                    <span class="additionalRecruitMember" style="overflow-wrap: anywhere;">${this.project.additionalRecruitMember}</span>
                </div>
            </div>
            <div>
                <span>사용 기술 스택</span>
                <div class="skillList" style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 12px;">
                    ${skillList}
                </div>
            </div>
            <div style="display: flex; justify-content: flex-end; flex-wrap: wrap; gap: 20px;">
                <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="24" height="24">
                        <path d="M12 6C8.76718 6 5.95962 8.31059 4.20477 11.7955C4.17606 11.8526 4.1548 11.8948 4.13687 11.9316C4.12106 11.964 4.11125 11.9853 4.10483 12C4.11125 12.0147 4.12106 12.036 4.13687 12.0684C4.1548 12.1052 4.17606 12.1474 4.20477 12.2045C5.95962 15.6894 8.76718 18 12 18C15.2328 18 18.0403 15.6894 19.7952 12.2045C19.8239 12.1474 19.8452 12.1052 19.8631 12.0684C19.8789 12.036 19.8887 12.0147 19.8951 12C19.8887 11.9853 19.8789 11.964 19.8631 11.9316C19.8452 11.8948 19.8239 11.8526 19.7952 11.7955C18.0403 8.31059 15.2328 6 12 6ZM2.41846 10.896C4.35815 7.04403 7.71977 4 12 4C16.2802 4 19.6418 7.04403 21.5815 10.896C21.5885 10.91 21.5958 10.9242 21.6032 10.9389C21.6945 11.119 21.8124 11.3515 21.8652 11.6381C21.9071 11.8661 21.9071 12.1339 21.8652 12.3619C21.8124 12.6485 21.6945 12.8811 21.6032 13.0611C21.5958 13.0758 21.5885 13.09 21.5815 13.104C19.6418 16.956 16.2802 20 12 20C7.71977 20 4.35815 16.956 2.41846 13.104C2.41145 13.09 2.4042 13.0758 2.39679 13.0611C2.30547 12.881 2.18756 12.6485 2.13482 12.3619C2.09288 12.1339 2.09288 11.8661 2.13482 11.6381C2.18756 11.3515 2.30547 11.119 2.39679 10.9389C2.4042 10.9242 2.41145 10.91 2.41846 10.896ZM12 10C10.8954 10 9.99999 10.8954 9.99999 12C9.99999 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM7.99999 12C7.99999 9.79086 9.79085 8 12 8C14.2091 8 16 9.79086 16 12C16 14.2091 14.2091 16 12 16C9.79085 16 7.99999 14.2091 7.99999 12Z"/>
                    </svg>
                    <span style="overflow-wrap: anywhere;">${this.project.watchCount}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="24" height="24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M7.78125 4C4.53699 4 2 6.81981 2 10.1559C2 11.8911 2.27768 13.32 3.31283 14.8234C4.3005 16.258 5.9429 17.7056 8.49134 19.6155L12 22L15.5084 19.6158C18.057 17.7058 19.6995 16.258 20.6872 14.8234C21.7223 13.32 22 11.8911 22 10.1559C22 6.81982 19.463 4 16.2188 4C14.5909 4 13.1818 4.66321 12 5.86323C10.8182 4.66321 9.40906 4 7.78125 4ZM7.78125 6C5.77551 6 4 7.7855 4 10.1559C4 10.7049 4.03107 11.1875 4.10853 11.6325C4.23826 12.378 4.49814 13.0182 4.96014 13.6893C5.74532 14.8297 7.14861 16.11 9.69156 18.0157L12 19.7494L14.3084 18.0157C16.8514 16.11 18.2547 14.8297 19.0399 13.6893C19.7777 12.6176 20 11.6245 20 10.1559C20 7.7855 18.2245 6 16.2188 6C14.9831 6 13.8501 6.58627 12.8033 7.99831C12.6147 8.25274 12.3167 8.40277 12 8.40277C11.6833 8.40277 11.3853 8.25274 11.1967 7.99831C10.1499 6.58627 9.01689 6 7.78125 6Z"/>
                    </svg>
                    <span style="overflow-wrap: anywhere;">${this.project.goodCount}</span>
                </div>
                <div style="display: flex; align-items: center; gap: 8px;">
                    <svg width="24" height="24">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.84572 18.6204C6.74782 18.0072 6.4668 17.4522 6.05816 17.0088C4.18319 15.5427 3 13.3942 3 11C3 6.58173 7.02944 3 12 3C16.9706 3 21 6.58173 21 11C21 15.4183 16.9706 19 12 19C11.1546 19 10.3365 18.8964 9.56074 18.7027C9.45389 18.676 9.34187 18.72 9.28125 18.8119C9.15858 18.998 9.02331 19.1851 8.87719 19.3674C8.64734 19.6542 8.39065 19.9289 8.11392 20.1685C7.59543 20.6174 7.00662 20.943 6.39232 20.9932C6.37166 20.9949 6.35097 20.9963 6.33025 20.9974C6.28866 20.9995 6.26498 20.9519 6.28953 20.9182C6.30109 20.9024 6.3125 20.8865 6.32376 20.8704C6.67743 20.3664 6.88397 19.7586 6.88397 19.1044C6.88397 19.0915 6.88389 19.0786 6.88373 19.0658C6.88185 18.9146 6.86893 18.7659 6.84572 18.6204ZM4.66223 18.4535C2.45613 16.6579 1 14.0103 1 11C1 5.26221 6.15283 1 12 1C17.8472 1 23 5.26221 23 11C23 16.7378 17.8472 21 12 21C11.3978 21 10.8057 20.9559 10.2276 20.8709C9.93606 21.2084 9.60764 21.5363 9.24519 21.8294C8.55521 22.3873 7.59485 22.9353 6.43241 22.9948L6.43238 22.9948C4.55136 23.0909 3.75168 21.003 4.67402 19.7392C4.81033 19.5524 4.88397 19.3363 4.88397 19.1044C4.88397 18.8684 4.80711 18.6449 4.66223 18.4535Z"/>
                    </svg>
                    <span style="overflow-wrap: anywhere;">${this.project.mentionCount}</span>
                </div>
            </div>`;
    }

    public render(container: HTMLElement): void {
        container.innerHTML += this.projectAbridgement.outerHTML;
    }

    public getElement(): HTMLElement {
        return this.projectAbridgement;
    }
}