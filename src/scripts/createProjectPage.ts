function createElemWithClass(tag: string, className?: string, parentElem?: HTMLElement): HTMLElement {
    var elem = document.createElement(tag);

    if( className ) {
        className.split(" ").forEach(v => {
            elem.classList.add(v);
        });
    }

    if( parentElem ) {
        parentElem.appendChild(elem);
    }

    return elem;
}
interface FetchResult {
    code: number;
    message: string;
}
interface FetchResponse {
    result: FetchResult;
    data?: object[] | object;
    option?: any;
}

const API_RESULT_CODE: {[key : string] : string} = {
"100" : "성공적으로 로그인 되었습니다."
, "103" : "성공적으로 회원가입 되었습니다."
, "402" : "아이디가 입력되지 않았습니다."
, "403" : "비밀번호가 입력되지 않았습니다."
, "404" : "비밀번호 확인이 입력되지 않았습니다."
, "405" : "이름이 입력되지 않았습니다."
, "406" : "아이디 형식이 올바르지 않습니다."
, "407" : "비밀번호 형식이 올바르지 않습니다."
, "408" : "비밀번호 확인 형식이 올바르지 않습니다."
, "409" : "이름 형식이 올바르지 않습니다."
, "410" : "아이디가 중복됩니다."
, "400" : "아이디 또는 비밀번호가 입력되지 않았습니다."
, "401" : "아이디 또는 비밀번호의 형식이 올바르지 않습니다."
, "104" : "성공적으로 조회되었습니다."
, "411" : "조회에 실패했습니다."
, "426" : "비밀번호와 비밀번호 확인이 서로 일치하지 않습니다."
};

const API_URL = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/";
function postFetch(uri: string, data?: object): Promise<FetchResponse> {
    console.log("post fetch to " + API_URL + uri);
    console.log("data ", data);
    return fetch(API_URL + uri, {
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}

function getFetch(uri: string, data?: string): Promise<FetchResponse> {
    console.log("get fetch to " + API_URL + uri);
    console.log("data ", data);
    var cond: string = "";
    if( data && data.length ) {
        cond = "?" + data;
    }
    return fetch(API_URL + uri + cond, {
        headers: {
            'Accept': 'application/json, text/plain',
            'Content-Type': 'application/json;charset=UTF-8'
        },
        method: "GET",
        credentials: "include",
    })
    .then(response => response.json());
}





interface Skill {
    id: string;
    name: string;
    image: string;
}

class CreateProjectPage extends Page {
    private updateSearchList(skillList: Skill[]): void {
        var searchList: HTMLElement | null = document.querySelector("#searchList");
        if( searchList ) {
            searchList.innerHTML = "";
            skillList.forEach(skill => {
                var li = document.createElement("li");
                li.classList.add("row-middle-left-flex-layout", "gap-level-3", "clickable");
                
                var img = document.createElement("img");
                img.src = "./src/assets/images/skills/" + skill.image;
                img.style.width = "32px";
                img.style.height = "32px";
                li.append(img);

                var span = document.createElement("span");
                span.innerText = skill.name;
                li.append(span);

                var hidden = document.createElement("span");
                hidden.style.visibility = "hidden";
                hidden.innerText = skill.id;
                li.append(hidden);

                li.addEventListener("click", function() {
                    var spans = this.getElementsByTagName("span");
                    if( spans ) {
                        var projectSkillContainer: HTMLElement | null = document.querySelector("#projectSkillContainer");
                        if( projectSkillContainer ) {
                            projectSkillContainer.appendChild(this.getElementsByTagName("img")[0].cloneNode(true));
                        }
        
                        var popupSkillContainer: HTMLElement | null = document.querySelector("#popupSkillContainer");
                        if( popupSkillContainer ) {
                            popupSkillContainer.appendChild(this.getElementsByTagName("img")[0].cloneNode(true));
                        }
                        console.log(spans[1].textContent);
                    }
                });

                searchList?.appendChild(li);
            });
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
                            </div>
            
                            <div class="column-top-left-flex-layout gap-level-4">
                                <span class="bold-text">프로젝트 기간</span>
                                <div class="row-top-left-flex-layout gap-level-2">
                                    <input type="date" id="projectStartDate" class="padding-level-5">
                                    <input type="date" id="projectEndDate" class="padding-level-5">
                                </div>
                            </div>
                        </div>
        
                        <div class="row-top-left-flex-layout item-2-layout">
                            <div class="column-top-left-flex-layout gap-level-4">
                                <span class="bold-text">모집 인원</span>
                                <input type="text" id="personnel" class="padding-level-5" onblur="this.value = this.value.replace(/[^0-9]/g, '')" onkeyup="this.value = this.value.replace(/[^0-9]/g, '')">
                            </div>
            
                            <div class="column-top-left-flex-layout gap-level-4">
                                <span class="bold-text">모집 기간</span>
                                <div class="row-top-left-flex-layout gap-level-2">
                                    <input type="date" id="recruitStartDate" class="padding-level-5">
                                    <input type="date" id="recruitEndDate" class="padding-level-5">
                                </div>
                            </div>
                        </div>
        
                        <div class="row-top-stretch-flex-layout item-1-layout">
                            <div class="column-top-left-flex-layout gap-level-4 item-1-layout">
                                <span class="bold-text">기술 스택</span>
                                <div class="row-middle-left-flex-layout wrap gap-level-2">
                                    <div id="projectSkillContainer" class="row-middle-left-flex-layout wrap gap-level-2">
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
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
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
        var skillList: Skill[] = [];
        var screenCover: HTMLElement | null = document.querySelector("#screenCover");
        var layerPopup: HTMLElement | null = document.querySelector("#layerPopup");
        var addSkillButton: HTMLElement | null = document.querySelector("#addSkillButton");
        var searchInput: HTMLInputElement | null = document.querySelector("#searchInput");
        var searchList: HTMLElement | null = document.querySelector("#searchList");
        var projectCreateButton: HTMLElement | null = document.querySelector("#projectCreateButton");
        
        projectCreateButton?.addEventListener("click", () => {
            // 프로젝트명 체크
            var title: HTMLInputElement | null = document.getElementById("title") as HTMLInputElement;
            if( !title || !title.value ) {
                alert("제목 입력해");
            }

            // 프로젝트 기간 체크

            // 모집 인원 체크

            // 모집 기간 체크

            // 스킬 체크

            postFetch("projects", {title : title.value, skills: []}).then(result => {
                console.log(result);
            });
        });

        addSkillButton?.addEventListener("click", () => {
            if( screenCover && layerPopup ) {
                if( screenCover.style.display != "block" ) {
                    screenCover.style.display = "block";
                    layerPopup.style.display = "flex";
                    document.body.style.overflow = "hidden";
                    
                    getFetch("skills").then(result => {
                        console.log(result);
                        skillList = result.data as Skill[];
                        this.updateSearchList(skillList);
                    }).catch((e) => {
                        skillList = [{id:"1", name:"spring", image:"spring-original.png"}
                        , {id:"2", name:"css3", image:"css3-original.png"}
                        , {id:"3", name:"bootstrap", image:"bootstrap-original.png"}
                        , {id:"4", name:"android", image:"android-original.png"}
                        , {id:"5", name:"figma", image:"figma-original.png"}
                        , {id:"6", name:"intellij", image:"intellij-original.png"}
                        , {id:"7", name:"nodejs", image:"nodejs-original.png"}
                        , {id:"8", name:"vscode", image:"vscode-original.png"}
                        , {id:"9", name:"swift", image:"swift-original.png"}];
                        this.updateSearchList(skillList);
                    });
                }
            }
        });
        screenCover?.addEventListener("click", function() {
            if( screenCover && layerPopup ) {
                if( screenCover.style.display == "block" ) {
                    screenCover.style.display = "none";
                    layerPopup.style.display = "none";
                    document.body.style.overflow = "auto";
                }
            }
        });
        searchInput?.addEventListener("input", () => {
            var list = skillList.filter(skill => {
                if( searchInput ) {
                    return skill.name.toUpperCase().includes(searchInput.value.toUpperCase())
                }
                return true;
            });
            this.updateSearchList(list);
        });
    }
}