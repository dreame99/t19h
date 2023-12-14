class ProfilePage extends Page {
    private async searchUserList(): Promise<User[]> {
        var userList: User[] = [];

        if( SERVER_INFO == "RUN" ) {
            await fetch(API_URL + "/users" + "/2104895732577")
            .then((response) => response.json())
            .then((result) => {
                userList = result;
            })
            .catch(e => console.log(e));
        } else {
            for( var i = 0; i < 10; i++ ) {
                userList.push({
                    name: "내가세상가장매콤한사나이",
                    imagePath: "./src/assets/images/avatar" + (((Math.random() * 10) | 0) + 1) + ".png",
                    point: Math.pow(10, 10 - i)
                });
            }
        }
        return userList;
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = "";

            var article = document.createElement("article");
            this.contents.appendChild(article);
            
            var bucket = createElement("div", "", "bucket");
            article.appendChild(bucket);

            bucket.appendChild(createTitleContainer("프로필"));

            var imageBox = document.createElement("article");
            imageBox.classList.add("box");
            imageBox.classList.add("fill");
            bucket.appendChild(imageBox);

            var toggleContainer = document.createElement("div");
            toggleContainer.classList.add("row-end-center-flex-layout");
            imageBox.appendChild(toggleContainer);

            var toggleButton = document.createElement("div");
            toggleButton.classList.add("toggle-button");
            toggleContainer.appendChild(toggleButton);
            
            var checkbox = document.createElement("input");
            checkbox.setAttribute("type", "checkbox");
            toggleButton.appendChild(checkbox);
            
            var toggleLayer = document.createElement("div");
            toggleLayer.classList.add("toggle-layer");
            toggleButton.appendChild(toggleLayer);


            var userAbridgement = new UserAbridgement({
                name: "내가세상가장매콤한사나이",
                imagePath: "./src/assets/images/avatar" + (((Math.random() * 10) | 0) + 1) + ".png",
                point: 1175000
            });
            imageBox.appendChild(userAbridgement.getElement());

            var skillBox = document.createElement("article");
            skillBox.classList.add("box");
            skillBox.classList.add("fill");
            bucket.appendChild(skillBox);

            var confidenceSkills = document.createElement("div");
            confidenceSkills.classList.add("row-stretch-center-flex-layout");
            skillBox.appendChild(confidenceSkills);

            var iconText = document.createElement("div");
            iconText.classList.add("icon-text");
            confidenceSkills.appendChild(iconText);
            
            var span = document.createElement("span");
            span.classList.add("bold");
            span.innerHTML = "자신있는 기술";
            iconText.appendChild(span);

            var icon = document.createElement("button");
            icon.classList.add("icon-button");
            icon.classList.add("transparent-button");
            icon.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24"> <path class="add-icon"/> </svg> </button>
            `;
            iconText.appendChild(icon);

            var skillList = document.createElement("div");
            skillList.classList.add("skill-list");
            confidenceSkills.appendChild(skillList);

            for( var i = 0; i < 18; i++ ) {
                var img1 = document.createElement("img");
                img1.classList.add("skill");
                var skills = ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"];
                var idx = Math.random() * skills.length | 0;
                img1.setAttribute("src", "./src/assets/images/" + skills[idx] + "-original.png");
                img1.setAttribute("title", skills[idx]);
                skillList.appendChild(img1);
            }
            

            var wannaSkills = document.createElement("div");
            wannaSkills.classList.add("row-stretch-center-flex-layout");
            skillBox.appendChild(wannaSkills);

            var iconText = document.createElement("div");
            iconText.classList.add("icon-text");
            wannaSkills.appendChild(iconText);
            
            var span = document.createElement("span");
            span.classList.add("bold");
            span.innerHTML = "공부하고 싶은 기술";
            iconText.appendChild(span);

            var icon = document.createElement("button");
            icon.classList.add("icon-button");
            icon.classList.add("transparent-button");
            icon.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24"> <path class="add-icon"/> </svg> </button>
            `;
            iconText.appendChild(icon);

            var skillList = document.createElement("div");
            skillList.classList.add("skill-list");
            wannaSkills.appendChild(skillList);

            for( var i = 0; i < 4; i++ ) {
                var img1 = document.createElement("img");
                img1.classList.add("skill");
                var skills = ["bootstrap", "mongodb", "figma", "github", "git", "html5", "java", "spring", "javascript", "typescript", "kotlin", "nodejs", "react", "vuejs"];
                var idx = Math.random() * skills.length | 0;
                img1.setAttribute("src", "./src/assets/images/" + skills[idx] + "-original.png");
                img1.setAttribute("title", skills[idx]);
                skillList.appendChild(img1);
            }

            this.contents.innerHTML = `
                <section class="container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10">
                    <h1 class="title-text bold-text">프로필</h1>
                    <article class="box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8">
                        <div class="row-top-right-flex-layout">
                            <div class="toggle-button">
                                <input type="checkbox">
                                <div class="toggle-layer"></div>
                            </div>
                        </div>
                        <div class="column-top-center-flex-layout gap-level-4" data-name="userCard">
                            <div class="column-top-center-flex-layout">
                                <span data-name="userId" style="display: none;"></span>
                                <span class="filled round horsetail padding-level-3">1,234점</span>
                                <img class="bordered round" src="./src/assets/images/avatars/avatar-2.png" style="width: 200px; height: 200px;">
                            </div>
                            <span>수원통감자</span>
                        </div>
                    </article>
                    <article class="box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8">
                        <div class="row-middle-stretch-flex-layout">
                            <div class="row-middle-left-flex-layout wrap">
                                <span>자신있는 기술</span>
                                <button id="addUseSkillButton" class="icon-button transparent-button" title="add skill"> <svg class="icon" viewBox="0 0 24 24"> <path class="add-icon"/> </svg> </button>
                            </div>
                            <div id="useSKillContainer" class="row-middle-left-flex-layout wrap gap-level-2">
                                <div data-name="skilLCard">
                                    <span data-name="skillId" style="display: hidden;"></span>
                                    <img src="./src/assets/images/skills/aftereffects-original.png" title="aftereffects" style="width: 48px; height: 48px;">
                                </div>
                                <div data-name="skilLCard">
                                    <span data-name="skillId" style="display: hidden;"></span>
                                    <img src="./src/assets/images/skills/aftereffects-original.png" title="aftereffects" style="width: 48px; height: 48px;">
                                </div>
                            </div>
                        </div>
                        <div class="row-middle-stretch-flex-layout">
                            <div class="row-middle-left-flex-layout wrap">
                                <span>공부하고 싶은 기술</span>
                                <button id="addWannaSkillButton" class="icon-button transparent-button" title="add skill"> <svg class="icon" viewBox="0 0 24 24"> <path class="add-icon"/> </svg> </button>
                            </div>
                            <div id="wannaSkillContainer" class="row-middle-left-flex-layout wrap gap-level-2">
                                <div data-name="skilLCard">
                                    <span data-name="skillId" style="display: hidden;"></span>
                                    <img src="./src/assets/images/skills/aftereffects-original.png" title="aftereffects" style="width: 48px; height: 48px;">
                                </div>
                                <div data-name="skilLCard">
                                    <span data-name="skillId" style="display: hidden;"></span>
                                    <img src="./src/assets/images/skills/aftereffects-original.png" title="aftereffects" style="width: 48px; height: 48px;">
                                </div>
                                <div data-name="skilLCard">
                                    <span data-name="skillId" style="display: hidden;"></span>
                                    <img src="./src/assets/images/skills/aftereffects-original.png" title="aftereffects" style="width: 48px; height: 48px;">
                                </div>
                                <div data-name="skilLCard">
                                    <span data-name="skillId" style="display: hidden;"></span>
                                    <img src="./src/assets/images/skills/aftereffects-original.png" title="aftereffects" style="width: 48px; height: 48px;">
                                </div>
                            </div>
                        </div>
                    </article>
                </section>`;
        }
    }

    protected bindingEvents(): void {
    }
}