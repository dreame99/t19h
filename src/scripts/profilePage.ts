class ProfilePage extends Page {
    private skillList: Skill[] = [];

    private updateSearchList(skillList: Skill[], containerId: string): void {
        var searchList: HTMLElement | null = document.querySelector("#searchList");
        if( searchList ) {
            searchList.innerHTML = "";
            var html = "";
            skillList.forEach(skill => {
                html += `
                    <li class="row-middle-left-flex-layout gap-level-3 clickable" onclick="ProfilePage.addSkillCard(this, '${containerId}')">
                        ${getSkillCardElement(skill)}
                        <span>${skill.name}</spna>
                    </li>`;
            });
            searchList.innerHTML = html;
        }
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = `
                <section class="container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10">
                    <h1 class="title-text bold-text">프로필</h1>
                    <article class="box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8">
                        <div class="row-top-right-flex-layout">
                            <div class="toggle-button">
                                <input type="checkbox" id="disclosure">
                                <div class="toggle-layer"></div>
                            </div>
                        </div>
                        <div id="userContainer" class="row-top-center-flex-layout">
                            <div class="column-top-center-flex-layout gap-level-4" data-name="userCard">
                                <div class="column-top-center-flex-layout">
                                    <span data-name="userId" style="display: none;"></span>
                                    <span class="filled round horsetail padding-level-3">1,234점</span>
                                    <img class="bordered round" src="./src/assets/images/avatars/avatar-2.png" style="width: 200px; height: 200px;">
                                </div>
                                <span>수원통감자</span>
                            </div>
                        </div>
                    </article>
                    <article class="box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8">
                        <div class="row-middle-stretch-flex-layout">
                            <div class="row-middle-left-flex-layout wrap">
                                <span>자신있는 기술</span>
                                <button id="addUseSkillButton" class="icon-button transparent-button" title="add skill"> <svg class="icon" viewBox="0 0 24 24"> <path class="add-icon"/> </svg> </button>
                            </div>
                            <div id="useSkillContainer" class="row-middle-left-flex-layout wrap gap-level-2">
                            </div>
                        </div>
                        <div class="row-middle-stretch-flex-layout">
                            <div class="row-middle-left-flex-layout wrap">
                                <span>공부하고 싶은 기술</span>
                                <button id="addWannaSkillButton" class="icon-button transparent-button" title="add skill"> <svg class="icon" viewBox="0 0 24 24"> <path class="add-icon"/> </svg> </button>
                            </div>
                            <div id="wannaSkillContainer" class="row-middle-left-flex-layout wrap gap-level-2">
                            </div>
                        </div>
                    </article>
                </section>

                <section id="screenCover" class="screen-cover">
                </section>
        
                <section id="layerPopup" class="fix-center-pos box-layout padding-level-10 column-top-center-flex-layout gap-level-8 item-1-layout" style="display: none; z-index: 100;">
                    <span class="title-text row-top-center-flex-layout">스킬 조회</span>
                    <div class="column-top-left-flex-layout gap-level-4">
                        <span class="bold-text">등록된 기술</span>
                        <div id="popupSkillContainer" class="row-middle-left-flex-layout wrap gap-level-2">
                        </div>
                    </div>
                    <div class="column-top-left-flex-layout gap-level-4 item-1-layout">
                        <span class="bold-text">검색</span>
                        <div class="column-top-stretch-flex-layout">
                            <div class="row-middle-stretch-flex-layout bordered">
                                <input type="text" id="searchInput" class="noborder padding-level-5" placeholder="검색어를 입력하세요">
                                <button class="icon-button transparent-button" title="search"> <svg class="icon" viewBox="0 0 24 24"> <path class="search-icon"/> </svg> </button>
                            </div>
                            <ul id="searchList" class="list-layout" style="box-shadow: 0 8px 8px #0002; border-radius: 0 0 12px 12px; max-height: 392px; overflow: auto;">
                            </ul>
                        </div>
                    </div>
                </section>`;
        }
    }

    protected bindingEvents(): void {
        var screenCover: HTMLElement | null = document.querySelector("#screenCover");
        var layerPopup: HTMLElement | null = document.querySelector("#layerPopup");
        var addUseSkillButton: HTMLElement | null = document.querySelector("#addUseSkillButton");
        var addWannaSkillButton: HTMLElement | null = document.querySelector("#addWannaSkillButton");
        var searchInput: HTMLInputElement | null = document.querySelector("#searchInput");
        var disclosure: HTMLInputElement | null = document.querySelector("#disclosure");
        
        var currentSkillContainer: string = "";
        addUseSkillButton?.addEventListener("click", () => {
            currentSkillContainer = "useSkillContainer";
            this.openSkillSearchPopup("useSkillContainer")
        });
        addWannaSkillButton?.addEventListener("click", () => {
            currentSkillContainer = "wannaSkillContainer";
            this.openSkillSearchPopup("wannaSkillContainer")
        });
        screenCover?.addEventListener("click", function() {
            if( screenCover && layerPopup ) {
                if( screenCover.style.display == "block" ) {
                    screenCover.style.display = "none";
                    layerPopup.style.display = "none";
                }
            }
        });
        searchInput?.addEventListener("input", () => {
            var list = this.skillList.filter(skill => {
                if( searchInput ) {
                    return skill.name.toUpperCase().includes(searchInput.value.toUpperCase())
                }
                return true;
            });
            this.updateSearchList(list, currentSkillContainer);
        });
        disclosure?.addEventListener("change", () => ProfilePage.updateProfile());
    }

    private openSkillSearchPopup(containerId: string): void {
        var screenCover: HTMLElement | null = document.querySelector("#screenCover");
        var layerPopup: HTMLElement | null = document.querySelector("#layerPopup");

        if( screenCover && layerPopup ) {
            if( screenCover.style.display != "block" ) {
                screenCover.style.display = "block";
                layerPopup.style.display = "flex";
    
                var popupSkillContainer: HTMLElement | null = document.querySelector("#popupSkillContainer");
                if( popupSkillContainer ) {
                    popupSkillContainer.innerHTML = "";

                    var skillContainer: HTMLElement | null = document.querySelector("#" + containerId);
                    if( skillContainer ) {
                        popupSkillContainer.innerHTML = skillContainer.innerHTML;
                    }
                }
                
                getFetch("skills").then(result => {
                    console.log(result);
                    this.skillList = result.data as Skill[];
                    this.updateSearchList(this.skillList, containerId);
                }).catch((e) => {
                    alert("error msg : " + e);
                    this.skillList = [{id:"1", name:"spring", image:"skills/spring-original.png"}
                    , {id:"2", name:"css3", image:"skills/css3-original.png"}
                    , {id:"3", name:"bootstrap", image:"skills/bootstrap-original.png"}
                    , {id:"4", name:"android", image:"skills/android-original.png"}
                    , {id:"5", name:"figma", image:"skills/figma-original.png"}
                    , {id:"6", name:"intellij", image:"skills/intellij-original.png"}
                    , {id:"7", name:"nodejs", image:"skills/nodejs-original.png"}
                    , {id:"8", name:"vscode", image:"skills/vscode-original.png"}
                    , {id:"9", name:"swift", image:"skills/ swift-original.png"}];
                    this.updateSearchList(this.skillList, containerId);
                });
            }
        }
    }

    private static updateProfile() {
        var disclosure: HTMLInputElement | null = document.querySelector("#disclosure");
        var useSkillContainer: HTMLInputElement | null = document.querySelector("#useSkillContainer");
        var wannaSkillContainer: HTMLInputElement | null = document.querySelector("#wannaSkillContainer");
        
        var confidentSkills = useSkillContainer? [...useSkillContainer.querySelectorAll("[data-name=skillId]")].map(o => o.innerHTML) : [];
        var wantToStudySkills = wannaSkillContainer? [...wannaSkillContainer.querySelectorAll("[data-name=skillId]")].map(o => o.innerHTML) : [];
        var data = {
            disclosure : disclosure?.checked,
            confidentSkills : confidentSkills,
            wantToStudySkills : wantToStudySkills,
        };
        
        patchFetch("users", data)
        .then(result => {
            console.log(result);
        })
        .catch(e => alert("error msg : " + e));
    }

    public static addSkillCard(skillItem: HTMLElement, containerId: string) {
        var skillCard: HTMLElement | null = skillItem.querySelector("[data-name=skillCard]") as HTMLElement;
        var skillId: string | undefined = skillCard.querySelector("[data-name=skillId]")?.innerHTML;
        
        if( skillId ) {
            var skillContainer: HTMLElement | null = document.querySelector("#" + containerId);
            var popupSkillContainer: HTMLElement | null = document.querySelector("#popupSkillContainer");
            if( skillContainer && popupSkillContainer ) {
                var isDuplicate: boolean = [...skillContainer.querySelectorAll("[data-name=skillId]")].filter(o => o.innerHTML == skillId).length >= 1;
                if( !isDuplicate ) {
                    skillContainer.appendChild(skillCard.cloneNode(true));
                    popupSkillContainer.appendChild(skillCard.cloneNode(true));
                    this.updateProfile();
                }
            }
        }
    }
}
