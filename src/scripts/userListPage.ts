class UserListPage extends Page {
    private PAGE_COUNT: number = 10;
    private MAX_PAGE: number = 10;
    
    private totalCount: number | undefined;
    private currentPage: number = 1;
    private phase: number = 1;
    private maxPhase: number = 1;
    private selectedPos: number = 1;

    private async searchUserList(): Promise<User[]> {
        var cond = "count=" + this.PAGE_COUNT + "&page=" + this.currentPage;
        var sort: HTMLElement | null = document.querySelector("#sort");
        if( sort ) {
            cond += "&sort=" + sort.dataset.name;
        }
        
        var userList: User[] = [];

        await getFetch("users", cond).then(result => {
            if( result.result.code == 104 ) {
                userList = result.data as User[];
                this.totalCount = result.option?.countTotal;
                this.updatePageCount();
            } else {
                alert(API_RESULT_CODE[result.result.code]);
            }
        })
        .catch(e => alert("error msg : " + e));

        return userList;
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

    private async updateUserList(): Promise<void> {
        var userContainer: HTMLElement | null = document.querySelector("#userContainer");
        var userList: User[] = await this.searchUserList();

        if( userContainer ) {
            var html = "";
            userList.forEach(user => html += getUserCardElement(user));
            userContainer.innerHTML = html;
        }
    }

    protected async render(): Promise<void> {
        if( this.contents ) {
            this.contents.innerHTML = `
                <section class="container-layout limited-width padding-level-12 column-top-stretch-flex-layout gap-level-10">
                    <article class="row-middle-stretch-flex-layout">
                        <h1 class="title-text bold-text">사용자 목록</h1>
                        <div class="row-middle-right-flex-layout" style="position: relative;">
                            <div id="sortDropDown" class="row-middle-left-flex-layout clickable">
                                <span id="sort" data-name="latest">최신순</span>
                                <button class="icon-button transparent-button"> <svg class="icon" viewBox="0 0 24 24"> <path class="bottom-icon"/> </svg> </button>
                            </div>
                            
                            <ul id="sortMenu" class="box-layout" style="position: absolute; top: 100%; left: 0; width: 100%; display: none;">
                                <li class="padding-level-4 clickable" data-name="latest">최신순</li>
                                <li class="padding-level-4 clickable" data-name="score">점수순</li>
                            </ul>
                        </div>
                    </article>
        
                    <article id="userContainer" class="row-top-left-flex-layout gap-level-8 item-5-layout wrap">
                    </article>
        
                    <article class="row-middle-center-flex-layout">
                        <button id="prevPageButton" class="icon-button transparent-button"> <svg class="icon" viewBox="0 0 24 24"> <path class="left-icon"/> </svg> </button>
                        <div id="pageContainer" class="row-middle-center-flex-layout">
                        </div>
                        <button id="nextPageButton" class="icon-button transparent-button"> <svg class="icon" viewBox="0 0 24 24"> <path class="right-icon"/> </svg> </button>
                    </article>
                </section>`;
        
            this.updateUserList();
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
                this.updateUserList();
            }
        });
        prevPageButton?.addEventListener("click", () => {
            this.phase = Math.min(this.maxPhase, this.phase - 1);
            this.updateUserList();
        });
        nextPageButton?.addEventListener("click", () => {
            this.phase = Math.min(this.maxPhase, this.phase + 1);
            this.updateUserList();
        });
        pageContainer?.addEventListener("click", e => {
            var target: HTMLElement | null = e.target as HTMLElement;
            if( target ) {
                pageContainer?.querySelectorAll("span").forEach((page, i) => {
                    if( page == target ) {
                        this.selectedPos = i + 1;
                        this.updateUserList();
                    }
                })
            }
        });
    }

    public static openUserDetail(userCard: HTMLElement) {
        var userId: string | undefined = userCard.querySelector("[data-name=userId]")?.innerHTML;
        if( userId ) {
            console.log(userId);
            //navigate("profile", {userId});
            navigate("profile");
        }
    }
}