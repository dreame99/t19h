class CreateProjectPage extends Page {
    private skillList: Skill[] = [];

    private closeErrorMessage(): void {
        var titleRuleText: HTMLElement | null = document.querySelector("#titleRuleText");
        if( titleRuleText ) {
            titleRuleText.style.display = "none";
        }

        var projectDateRuleText: HTMLElement | null = document.querySelector("#projectDateRuleText");
        if( projectDateRuleText ) {
            projectDateRuleText.style.display = "none";
        }
        
        var recruitRuleText: HTMLElement | null = document.querySelector("#recruitRuleText");
        if( recruitRuleText ) {
            recruitRuleText.style.display = "none";
        }
        
        var recruitDateRuleText: HTMLElement | null = document.querySelector("#recruitDateRuleText");
        if( recruitDateRuleText ) {
            recruitDateRuleText.style.display = "none";
        }
    }

    private openErrorMessage(ruleText: HTMLElement | null, msg: string): void {
        if( ruleText ) {
            ruleText.style.display = "block";
            ruleText.classList.add("error-text");
            ruleText.innerText = msg;
        }
    }

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
                    <h1 class="title-text bold-text">프로젝트 생성</h1>
                    <article class="box-layout padding-level-10 column-top-stretch-flex-layout gap-level-8">
                        <div class="row-top-left-flex-layout item-2-layout">
                            <div class="column-top-left-flex-layout gap-level-4">
                                <span class="bold-text">프로젝트명</span>
                                <input type="text" id="title" class="padding-level-5">
                                <span id="titleRuleText" class="error-text" style="display: none;"></span>
                            </div>
            
                            <div class="column-top-left-flex-layout gap-level-4">
                                <span class="bold-text">프로젝트 기간</span>
                                <div class="row-top-left-flex-layout gap-level-2">
                                    <input type="date" id="projectStartDate" class="padding-level-5">
                                    <input type="date" id="projectEndDate" class="padding-level-5">
                                </div>
                                <span id="projectDateRuleText" class="error-text" style="display: none;"></span>
                            </div>
                        </div>
        
                        <div class="row-top-left-flex-layout item-2-layout">
                            <div class="column-top-left-flex-layout gap-level-4">
                                <span class="bold-text">모집 인원</span>
                                <input type="text" id="personnel" class="padding-level-5" onblur="this.value = this.value.replace(/[^0-9]/g, '')" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')">
                                <span id="recruitRuleText" class="error-text" style="display: none;"></span>
                            </div>
            
                            <div class="column-top-left-flex-layout gap-level-4">
                                <span class="bold-text">모집 기간</span>
                                <div class="row-top-left-flex-layout gap-level-2">
                                    <input type="date" id="recruitStartDate" class="padding-level-5">
                                    <input type="date" id="recruitEndDate" class="padding-level-5">
                                </div>
                                <span id="recruitDateRuleText" class="error-text" style="display: none;"></span>
                            </div>
                        </div>
        
                        <div class="row-top-stretch-flex-layout item-1-layout">
                            <div class="column-top-left-flex-layout gap-level-4 item-1-layout">
                                <span class="bold-text">기술 스택</span>
                                <div class="row-middle-left-flex-layout wrap gap-level-2">
                                    <div id="projectSkillContainer" class="row-middle-left-flex-layout wrap gap-level-2">
                                    </div>
                                    <button id="addSkillButton" class="icon-button transparent-button" title="add skill"> <svg class="icon" viewBox="0 0 24 24"> <path class="add-icon"/> </svg> </button>
                                </div>
                            </div>
                        </div>
        
                        <div class="item-1-layout">
                            <textarea id="projectContents" style="height: 400px;"></textarea>
                        </div>
        
                        <div class="row-top-center-flex-layout">
                            <button id="projectCreateButton" class="padding-level-5">생성하기</button>
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
        var addSkillButton: HTMLElement | null = document.querySelector("#addSkillButton");
        var searchInput: HTMLInputElement | null = document.querySelector("#searchInput");
        var projectCreateButton: HTMLElement | null = document.querySelector("#projectCreateButton");
        var title: HTMLInputElement | null = document.querySelector("#title");
        var titleRuleText: HTMLElement | null = document.querySelector("#titleRuleText");
        var projectStartDate: HTMLInputElement | null = document.querySelector("#projectStartDate");
        var projectEndDate: HTMLInputElement | null = document.querySelector("#projectEndDate");
        var projectDateRuleText: HTMLElement | null = document.querySelector("#projectDateRuleText");
        var personnel: HTMLInputElement | null = document.querySelector("#personnel");
        var recruitRuleText: HTMLElement | null = document.querySelector("#recruitRuleText");
        var recruitStartDate: HTMLInputElement | null = document.querySelector("#recruitStartDate");
        var recruitEndDate: HTMLInputElement | null = document.querySelector("#recruitEndDate");
        var recruitDateRuleText: HTMLElement | null = document.querySelector("#recruitDateRuleText");
        var projectContents: HTMLTextAreaElement | null = document.querySelector("#projectContents");
        var projectSkillContainer: HTMLElement | null = document.querySelector("#projectSkillContainer");
        
        title?.addEventListener("focus", this.closeErrorMessage);
        projectStartDate?.addEventListener("focus", this.closeErrorMessage);
        projectEndDate?.addEventListener("focus", this.closeErrorMessage);
        personnel?.addEventListener("focus", this.closeErrorMessage);
        recruitStartDate?.addEventListener("focus", this.closeErrorMessage);
        recruitEndDate?.addEventListener("focus", this.closeErrorMessage);

        projectCreateButton?.addEventListener("click", () => {
            var isError: boolean = false;

            // 프로젝트명 체크
            if( !title || !title.value ) {
                this.openErrorMessage(titleRuleText, API_RESULT_CODE[413]);
                isError = true;
            }

            // 모집 인원 체크
            if( !personnel || !personnel.value ) {
                this.openErrorMessage(recruitRuleText, API_RESULT_CODE[414]);
                isError = true;
            }

            // 프로젝트 기간 체크
            if( !projectStartDate || !projectStartDate.value ) {
                this.openErrorMessage(projectDateRuleText, API_RESULT_CODE[415]);
                isError = true;
            } else if( !projectEndDate || !projectEndDate.value ) {
                this.openErrorMessage(projectDateRuleText, API_RESULT_CODE[416]);
                isError = true;
            } else if( projectStartDate.value.replace(/-/g, "") > projectEndDate.value.replace(/-/g, "") ) {
                this.openErrorMessage(projectDateRuleText, API_RESULT_CODE[424]);
                isError = true;
            }

            // 모집 기간 체크
            if( !recruitStartDate || !recruitStartDate.value ) {
                this.openErrorMessage(recruitDateRuleText, API_RESULT_CODE[417]);
                isError = true;
            } else if( !recruitEndDate || !recruitEndDate.value ) {
                this.openErrorMessage(recruitDateRuleText, API_RESULT_CODE[418]);
                isError = true;
            } else if( recruitStartDate.value.replace(/-/g, "") > recruitEndDate.value.replace(/-/g, "") ) {
                this.openErrorMessage(recruitDateRuleText, API_RESULT_CODE[425]);
                isError = true;
            }

            if( !isError ) {
                postFetch("projects", {
                    title : title?.value
                    , personnel : personnel?.value
                    , projectStartDate : projectStartDate?.value
                    , projectEndDate : projectEndDate?.value
                    , teamRecruitmentStartDate : recruitStartDate?.value
                    , teamRecruitmentEndDate : recruitEndDate?.value
                    , content : projectContents?.value
                    , skills : projectSkillContainer? [...projectSkillContainer.querySelectorAll("[data-name=skillId]")].map(o => o.innerHTML) : []})
                .then(result => {
                    console.log(result);
                    if( result.result.code == 106 ) {
                        navigate("main");
                    } else if( result.result.code == 413 ) {
                        this.openErrorMessage(titleRuleText, API_RESULT_CODE[result.result.code]);
                    } else if( result.result.code == 414 || result.result.code == 419 ) {
                        this.openErrorMessage(recruitRuleText, API_RESULT_CODE[result.result.code]);
                    } else if( result.result.code == 415 || result.result.code == 416 || result.result.code == 420 || result.result.code == 421 || result.result.code == 424 ) {
                        this.openErrorMessage(projectDateRuleText, API_RESULT_CODE[result.result.code]);
                    } else if( result.result.code == 417 || result.result.code == 418 || result.result.code == 422 || result.result.code == 423 || result.result.code == 425 ) {
                        this.openErrorMessage(recruitDateRuleText, API_RESULT_CODE[result.result.code]);
                    }
                })
                .catch(e => alert("error msg : " + e));
            }
        });

        addSkillButton?.addEventListener("click", () => this.openSkillSearchPopup("projectSkillContainer"));
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
            this.updateSearchList(list, "projectSkillContainer");
        });
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

    public static addSkillCard(skillItem: HTMLElement) {
        var skillCard: HTMLElement | null = skillItem.querySelector("[data-name=skillCard]") as HTMLElement;
        var skillId: string | undefined = skillCard.querySelector("[data-name=skillId]")?.innerHTML;
        
        if( skillId ) {
            var projectSkillContainer: HTMLElement | null = document.querySelector("#projectSkillContainer");
            var popupSkillContainer: HTMLElement | null = document.querySelector("#popupSkillContainer");
            if( projectSkillContainer && popupSkillContainer ) {
                var isDuplicate: boolean = [...projectSkillContainer.querySelectorAll("[data-name=skillId]")].filter(o => o.innerHTML == skillId).length >= 1;
                if( !isDuplicate ) {
                    projectSkillContainer.appendChild(skillCard.cloneNode(true));
                    popupSkillContainer.appendChild(skillCard.cloneNode(true));
                }
            }
        }
    }
}