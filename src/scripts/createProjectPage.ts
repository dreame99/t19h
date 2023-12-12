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
    result: object;
    data?: object[] | object;
}

const API_URL = "https://port-0-team-api-57lz2alpl3myze.sel4.cloudtype.app/";
function postFetch(uri: string, data?: object): Promise<FetchResult> {
    console.log("post fetch to " + API_URL + uri);
    return fetch(API_URL + uri, {
        headers: {"Content-Type": "application/json"},
        method: "POST",
        credentials: "include",
        body: JSON.stringify(data),
    })
    .then(response => response.json());
}

function getFetch(uri: string, data?: string): Promise<FetchResult> {
    console.log("get fetch to " + API_URL + uri);
    var cond: string = "";
    if( data && data.length ) {
        cond = "?" + data;
    }
    return fetch(API_URL + uri + cond, {
        headers: {"Content-Type": "application/json"},
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
                li.innerText = skill.name;
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
                                    <div class="row-middle-left-flex-layout wrap gap-level-2">
                                        <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                                        <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                                        <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                                        <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                                        <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
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
        
                <section id="layerPopup" class="center-pos box-layout padding-level-10 column-top-center-flex-layout gap-level-8 item-1-layout" style="display: none; z-index: 100;">
                    <span class="title-text row-top-center-flex-layout">스킬 조회</span>
                    <div class="column-top-left-flex-layout gap-level-5">
                        <span class="bold-text">등록된 기술</span>
                        <div class="row-middle-left-flex-layout wrap gap-level-2">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                            <img src="./src/assets/images/skills/aftereffects-original.png" style="width: 48px; height: 48px;">
                        </div>
                    </div>
                    <div class="column-top-left-flex-layout gap-level-5 item-1-layout">
                        <span class="bold-text">검색</span>
                        <div class="column-top-stretch-flex-layout">
                            <div class="row-middle-stretch-flex-layout bordered">
                                <input type="text" id="searchInput" class="noborder padding-level-5" placeholder="검색어를 입력하세요">
                                <button class="icon-button transparent-button" title="search"> <svg class="icon" viewBox="0 0 24 24"> <path class="search-icon"/> </svg> </button>
                            </div>
                            <ul id="searchList" class="list-layout" style="box-shadow: 0 8px 8px #0002; border-radius: 0 0 12px 12px; max-height: 220px; overflow: auto;">
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
            var title: HTMLInputElement | null = document.getElementById("title") as HTMLInputElement;
            if( !title || !title.value ) {
                alert("제목 입력해");
            }

            postFetch("projects", {title, skills: []}).then(result => {
                console.log(result);
            });
        });

        addSkillButton?.addEventListener("click", () => {
            if( screenCover && layerPopup ) {
                if( screenCover.style.display != "block" ) {
                    screenCover.style.display = "block";
                    layerPopup.style.display = "flex";
                    
                    getFetch("skills").then(result => {
                        console.log(result);
                        skillList = result.data as Skill[];
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