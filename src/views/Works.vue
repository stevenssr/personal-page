<template>
    <article class="portfolio" data-page="portfolio">
        <header>
            <h2 class="h2 article-title">作品集</h2>
        </header>

        <section class="projects">
            <ul class="project-list">
                <li class="project-item active" data-filter-item data-category="applications">
                    <div>
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/code6.png" alt="brawlhalla" loading="lazy" />
                        </figure>

                        <h3 class="project-title">停车小程序</h3>

                        <p class="project-category">前端开发</p>
                    </div>
                </li>
                
                <li class="project-item active" data-filter-item data-category="web development">
                    <div>
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/code3.png" alt="finance" loading="lazy" />
                        </figure>

                        <h3 class="project-title">透明标签小程序 / App</h3>

                        <p class="project-category">前端开发</p>
                    </div>
                </li>

                <li class="project-item active" data-filter-item data-category="web development">
                    <div>
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-2.png" alt="orizon" loading="lazy" />
                        </figure>

                        <h3 class="project-title">后台管理系统</h3>

                        <p class="project-category">前端开发</p>
                    </div>
                </li>

                <li class="project-item active" data-filter-item data-category="web design">
                    <div>
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/code4.png" alt="fundo" loading="lazy" />
                        </figure>

                        <h3 class="project-title">物流园区小程序 司机端 / 管理端</h3>

                        <p class="project-category">前端开发</p>
                    </div>
                </li>

               
            </ul>
        </section>
    </article>

    <!-- <div class="box" :style="'height:' + boxheight + 'px'" @touchstart='touchstart' @touchmove='touchmove'></div> -->
</template>


<!-- <script setup>
import { ref } from 'vue';
const boxheight = ref(300)
const startY = ref(0)


const touchstart = (e) => {
    startY.value = e.touches[0].clientY
    console.log('手指起始点' + e.touches[0].clientY);
}
const touchmove = (e) => {
    console.log(2, e.touches[0].clientY);
    boxheight.value = boxheight.value + (startY.value - e.touches[0].clientY)
}
</script> -->

<style>
.box {
    width: 100vw;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 300px;
    background: red;
}
</style>