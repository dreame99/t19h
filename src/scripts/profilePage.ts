class ProfilePage extends Page {
    protected async render(): Promise<void> {
        if( this.contents ) {
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