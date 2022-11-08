<template>
    <article class="portfolio" data-page="portfolio">
        <header>
            <h2 class="h2 article-title">作品集</h2>
        </header>

        <section class="projects">
            <ul class="project-list">
                <li class="project-item active" data-filter-item data-category="web development">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-1.jpg" alt="finance" loading="lazy" />
                        </figure>

                        <h3 class="project-title">Finance</h3>

                        <p class="project-category">Web development</p>
                    </a>
                </li>

                <li class="project-item active" data-filter-item data-category="web development">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-2.png" alt="orizon" loading="lazy" />
                        </figure>

                        <h3 class="project-title">后台管理系统</h3>

                        <p class="project-category">前端开发</p>
                    </a>
                </li>

                <li class="project-item active" data-filter-item data-category="web design">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-3.jpg" alt="fundo" loading="lazy" />
                        </figure>

                        <h3 class="project-title">Fundo</h3>

                        <p class="project-category">Web design</p>
                    </a>
                </li>

                <li class="project-item active" data-filter-item data-category="applications">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-4.png" alt="brawlhalla" loading="lazy" />
                        </figure>

                        <h3 class="project-title">Brawlhalla</h3>

                        <p class="project-category">Applications</p>
                    </a>
                </li>

                <li class="project-item active" data-filter-item data-category="web design">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-5.png" alt="dsm." loading="lazy" />
                        </figure>

                        <h3 class="project-title">DSM.</h3>

                        <p class="project-category">Web design</p>
                    </a>
                </li>

                <li class="project-item active" data-filter-item data-category="web design">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-6.png" alt="metaspark" loading="lazy" />
                        </figure>

                        <h3 class="project-title">MetaSpark</h3>

                        <p class="project-category">Web design</p>
                    </a>
                </li>

                <li class="project-item active" data-filter-item data-category="web development">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-7.png" alt="summary" loading="lazy" />
                        </figure>

                        <h3 class="project-title">Summary</h3>

                        <p class="project-category">Web development</p>
                    </a>
                </li>

                <li class="project-item active" data-filter-item data-category="applications">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-8.jpg" alt="task manager" loading="lazy" />
                        </figure>

                        <h3 class="project-title">Task Manager</h3>

                        <p class="project-category">Applications</p>
                    </a>
                </li>

                <li class="project-item active" data-filter-item data-category="web development">
                    <a href="#">
                        <figure class="project-img">
                            <div class="project-item-icon-box">
                                <ion-icon name="eye-outline"></ion-icon>
                            </div>

                            <img src="@/assets/images/project-9.png" alt="arrival" loading="lazy" />
                        </figure>

                        <h3 class="project-title">Arrival</h3>

                        <p class="project-category">Web development</p>
                    </a>
                </li>
            </ul>
        </section>
    </article>

    <div class="box" :style="'bottom:' + boxheight + 'px'" @touchstart='touchstart' @touchmove='touchmove'></div>
</template>


<script setup>
import { ref } from 'vue';
const boxheight = ref(0)
const startY = ref(0)
const touchstart = (e) => {
    // 如果你要阻止点击事件，请反注释下一行代码
    // e.preventDefault()
    startY.value = e.touches[0].clientY
   console.log('手指起始点' +  e.touches[0].clientY);
}
const touchmove = (e) => {
    console.log(2,e);
    boxheight.value = e.touches[0].clientY
}
</script>

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