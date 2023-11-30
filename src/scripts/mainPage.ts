class MainPage {
    private container: HTMLElement | null;

    constructor(container: string) {
        this.container = document.getElementById(container);
    }

    private render(): void {
        if( this.container ) {
            this.container.innerHTML = `
            <article id="newProject" style="display: flex; justify-content: center; padding: 56px 0;">
                <div style="width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;">
                    <span style="display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;">이달의 새로운 프로젝트</span>
                    <article id="newProjectList" style="margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;">
                    </article>
                </div>
            </article>
            <article id="favoriteProject" style="display: flex; justify-content: center; padding: 56px 0; background: white;">
                <div id="favoriteProjectList" style="width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;">
                    <span style="display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;">인기 프로젝트</span>
                    <article style="margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;">
                        <div style="padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;">
                        </div>
                        <div style="padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;">
                        </div>
                        <div style="padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;">
                        </div>
                        <div style="padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;">
                        </div>
                        <div style="padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;">
                        </div>
                    </article>
                </div>
            </article>
            <article id="memberRank" style="display: flex; justify-content: center; padding: 56px 0;">
                <div id="memberRankList" style="width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;">
                    <span style="display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;">당신의 열정을 칭찬합니다.</span>
                    <article style="margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;">
                        <div style="padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;">
                        </div>
                        <div style="padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;">
                        </div>
                        <div style="padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;">
                        </div>
                        <div style="padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;">
                        </div>
                        <div style="padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;">
                        </div>
                        <div style="padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;">
                        </div>
                        <div style="padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;">
                        </div>
                        <div style="padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;">
                        </div>
                    </article>
                </div>
            </article>`;

            var newProjectList = document.getElementById("newProjectList") as HTMLElement;
            var project: Project = {
                recruitStartDate : "20231115",
                recruitEndDate : "20231215",
                title : "팀원구함",
                contents : "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br><br>프로젝트를 같이 진행할 동료들을 모으고, 프로젝트를 무사히 완료하여 점수를 획득하세요.<br><br>점수가 높을수록 여러분의 열정을 과시할 수 있습니다.",
                currentMember : 3,
                additionalRecruitMember : 3,
                skills: ["SpringBoot", "TypeScript"],
                watchCount: 4300,
                goodCount: 48,
                mentionCount: 0
            };
            var projectAbridgement: ProjectAbridgement = new ProjectAbridgement(project);
            projectAbridgement.render(newProjectList);

            var project: Project = {
                recruitStartDate : "20231115",
                recruitEndDate : "20231215",
                title : "팀원구함",
                contents : "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.",
                currentMember : 3,
                additionalRecruitMember : 3,
                skills: [],
                watchCount: 4300,
                goodCount: 48,
                mentionCount: 0
            };
            var projectAbridgement: ProjectAbridgement = new ProjectAbridgement(project);
            projectAbridgement.render(newProjectList);

            var project: Project = {
                recruitStartDate : "20231115",
                recruitEndDate : "20231215",
                title : "팀원구함",
                contents : "자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>",
                currentMember : 3,
                additionalRecruitMember : 3,
                skills: [],
                watchCount: 4300,
                goodCount: 48,
                mentionCount: 0
            };
            var projectAbridgement: ProjectAbridgement = new ProjectAbridgement(project);
            projectAbridgement.render(newProjectList);

            var projectAbridgement: ProjectAbridgement = new ProjectAbridgement(project);
            projectAbridgement.render(newProjectList);
        }
    }
  
    public init(): void {
        this.render();
    }
}