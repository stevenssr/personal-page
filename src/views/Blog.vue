<template>
    <article class="blog">
        <header>
            <h2 class="h2 article-title">博客</h2>
        </header>

        <section class="blog-posts">
            <ul class="blog-posts-list">
                <li class="blog-post-item">
                    <div>
                        <figure class="blog-banner-box">
                            <img src="@/assets/images/code1.png" alt="Design conferences in 2022" loading="lazy"  />
                        </figure>

                        <div class="blog-content">
                            <div class="blog-meta">
                                <p class="blog-category">开发</p>

                                <span class="dot"></span>

                                <time datetime="2022-02-23">2022 03 18</time>
                            </div>

                            <h3 class="h3 blog-item-title">关于js中高阶函数的使用</h3>

                            <p class="blog-text">
                                让我们看看一些内置高阶函数的例子，看看它与不使用高阶函数的方案对比如何。
                            </p>
                        </div>
                    </div>
                </li>

                <li class="blog-post-item">
                    <div>
                        <figure class="blog-banner-box">
                            <img src="@/assets/images/code2.png" alt="Best fonts every designer" loading="lazy" />
                        </figure>

                        <div class="blog-content">
                            <div class="blog-meta">
                                <p class="blog-category">开发</p>

                                <span class="dot"></span>

                                <time datetime="2022-02-23">2022 05 16</time>
                            </div>

                            <h3 class="h3 blog-item-title">在小程序中使用echarts</h3>

                            <p class="blog-text">
                                echarts是一个基于 JavaScript 的开源可视化图表库
                            </p>
                        </div>
                    </div>
                </li>
            </ul>
        </section>
    </article>
</template>
