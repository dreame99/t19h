var MainPage = /** @class */ (function () {
    function MainPage(container) {
        this.container = document.getElementById(container);
    }
    MainPage.prototype.render = function () {
        if (this.container) {
            this.container.innerHTML = "\n            <article id=\"newProject\" style=\"display: flex; justify-content: center; padding: 56px 0;\">\n                <div style=\"width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;\">\n                    <span style=\"display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;\">\uC774\uB2EC\uC758 \uC0C8\uB85C\uC6B4 \uD504\uB85C\uC81D\uD2B8</span>\n                    <article id=\"newProjectList\" style=\"margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;\">\n                    </article>\n                </div>\n            </article>\n            <article id=\"favoriteProject\" style=\"display: flex; justify-content: center; padding: 56px 0; background: white;\">\n                <div id=\"favoriteProjectList\" style=\"width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;\">\n                    <span style=\"display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;\">\uC778\uAE30 \uD504\uB85C\uC81D\uD2B8</span>\n                    <article style=\"margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;\">\n                        <div style=\"padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 400px; height: 431px; background: white; border-radius: 16px; border: 1px solid #DADADA;\">\n                        </div>\n                    </article>\n                </div>\n            </article>\n            <article id=\"memberRank\" style=\"display: flex; justify-content: center; padding: 56px 0;\">\n                <div id=\"memberRankList\" style=\"width: 100%; max-width: 1280px; display: inline-flex; flex-direction: column; align-items: flex-start;\">\n                    <span style=\"display: flex; justify-content: center; font-size: 32px; font-family: NIXGONFONTS-B;\">\uB2F9\uC2E0\uC758 \uC5F4\uC815\uC744 \uCE6D\uCC2C\uD569\uB2C8\uB2E4.</span>\n                    <article style=\"margin-top: 24px; display: flex; flex-wrap: wrap; gap: 20px;\">\n                        <div style=\"padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;\">\n                        </div>\n                        <div style=\"padding: 20px; width: 200px; height: 200px; background: white; border-radius: 16px; border: 1px solid #DADADA; border-radius: 50%;\">\n                        </div>\n                    </article>\n                </div>\n            </article>";
            var newProjectList = document.getElementById("newProjectList");
            var project = {
                recruitStartDate: "20231115",
                recruitEndDate: "20231215",
                title: "팀원구함",
                contents: "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.<br><br>프로젝트를 같이 진행할 동료들을 모으고, 프로젝트를 무사히 완료하여 점수를 획득하세요.<br><br>점수가 높을수록 여러분의 열정을 과시할 수 있습니다.",
                currentMember: 3,
                additionalRecruitMember: 3,
                skills: ["SpringBoot", "TypeScript"],
                watchCount: 4300,
                goodCount: 48,
                mentionCount: 0
            };
            var projectAbridgement = new ProjectAbridgement(project);
            projectAbridgement.render(newProjectList);
            var project = {
                recruitStartDate: "20231115",
                recruitEndDate: "20231215",
                title: "팀원구함",
                contents: "자신이 상상만 하던 프로덕트를 동료들과 함께 만들어보세요.",
                currentMember: 3,
                additionalRecruitMember: 3,
                skills: [],
                watchCount: 4300,
                goodCount: 48,
                mentionCount: 0
            };
            var projectAbridgement = new ProjectAbridgement(project);
            projectAbridgement.render(newProjectList);
            var project = {
                recruitStartDate: "20231115",
                recruitEndDate: "20231215",
                title: "팀원구함",
                contents: "자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>자신이!!!<br>",
                currentMember: 3,
                additionalRecruitMember: 3,
                skills: [],
                watchCount: 4300,
                goodCount: 48,
                mentionCount: 0
            };
            var projectAbridgement = new ProjectAbridgement(project);
            projectAbridgement.render(newProjectList);
            var projectAbridgement = new ProjectAbridgement(project);
            projectAbridgement.render(newProjectList);
        }
    };
    MainPage.prototype.init = function () {
        this.render();
    };
    return MainPage;
}());
