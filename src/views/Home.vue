<script setup lang="ts">
import { ref } from "vue";
const sidebarMoreShow = ref(false);

const showMore = () => {
  sidebarMoreShow.value = !sidebarMoreShow.value;
};
</script>

<template>
  <aside :class="sidebarMoreShow ? 'sidebar active' : 'sidebar'">
    <div class="sidebar-info">
      <figure class="avatar-box">
        <img src="@/assets/images/my-avatar.png" alt="Richard hanrick" width="80" />
      </figure>

      <div class="info-content">
        <h1 class="name" title="Richard hanrick">周浩 | ZhouHao</h1>

        <p class="title">前端开发工程师</p>
      </div>

      <button class="info_more-btn" @click="showMore">
        <span>Show Contacts</span>
        <ion-icon name="chevron-down"></ion-icon>
      </button>
    </div>

    <div class="sidebar-info_more">
      <div class="separator"></div>

      <ul class="contacts-list">
        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="mail-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Email</p>

            <a href="mailto:zhouhao@email.cn" class="contact-link">zhouhao@email.cn</a>
          </div>
        </li>

        <!-- <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="phone-portrait-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Phone</p>

            <a href="tel:+12133522795" class="contact-link">+1 (213) 352-2795</a>
          </div>
        </li> -->

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="calendar-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Birthday</p>

            <time datetime="1982-06-23">1998</time>
          </div>
        </li>

        <li class="contact-item">
          <div class="icon-box">
            <ion-icon name="location-outline"></ion-icon>
          </div>

          <div class="contact-info">
            <p class="contact-title">Location</p>

            <address>Wuhan, Hubei</address>
          </div>
        </li>
      </ul>

      <div class="separator"></div>

      <ul class="social-list">
        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-facebook"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-twitter"></ion-icon>
          </a>
        </li>

        <li class="social-item">
          <a href="#" class="social-link">
            <ion-icon name="logo-instagram"></ion-icon>
          </a>
        </li>
      </ul>
    </div>
  </aside>

  <!--
        - #ABOUT
      -->

  <article class="about active" data-page="about">
    <header>
      <h2 class="h2 article-title">关于我</h2>
    </header>

    <section class="about-text">
      <p>
        我是来自武汉的产品经理和前端工程师。在网络开发和前端开发领域。我喜欢把复杂的问题 变成简单、漂亮和直观的设计。
      </p>

      <p>
        我的工作是建立你的网站，使其具有功能性和用户友好性，同时具有吸引力。用户友好，同时又有吸引力。此外，我还会为您的产品添加个人特色
        触摸你的产品，并确保它是醒目的和易于使用的。使用。我的目标是以最有创意的方式传达你的信息和身份。的方式传达你的信息和身份。我为许多著名的品牌公司进行网页设计。
      </p>
    </section>

    <!--
  - service
-->

    <section class="service">
      <h3 class="h3 service-title">我在做什么</h3>

      <ul class="service-list">
        <li class="service-item">
          <div class="service-icon-box">
            <img src="@/assets/images/icon-design.svg
        " alt="design icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">网页设计</h4>

            <p class="service-item-text">
              最现代化和高质量的设计，在专业的水平。
            </p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="@/assets/images/icon-dev.svg" alt="Web development icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">网页开发</h4>

            <p class="service-item-text">
              专业水平的高质量网站开发。
            </p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="@/assets/images/icon-app.svg" alt="mobile app icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">手机 App</h4>

            <p class="service-item-text">
              iOS和Android应用程序的专业开发。
            </p>
          </div>
        </li>

        <li class="service-item">
          <div class="service-icon-box">
            <img src="@/assets/images/icon-photo.svg" alt="camera icon" width="40" />
          </div>

          <div class="service-content-box">
            <h4 class="h4 service-item-title">拍照</h4>

            <p class="service-item-text">
              我在专业拍摄任何类别的高质量照片的水平。
            </p>
          </div>
        </li>
      </ul>
    </section>

    <!--
  - testimonials
-->

    <section class="testimonials">
      <h3 class="h3 testimonials-title">推荐信</h3>

      <ul class="testimonials-list has-scrollbar">

        
        <li class="testimonials-item">
          <div class="content-card" data-testimonials-item>
            <figure class="testimonials-avatar-box">
              <img src="@/assets/images/avatar-1.png" alt="Emily evans" width="60" data-testimonials-avatar />
            </figure>

            <h4 class="h4 testimonials-item-title" data-testimonials-title>
              Elon Musk
            </h4>

            <div class="testimonials-text" data-testimonials-text>
              <p>
                周浩被雇来帮我们创造了特斯拉汽车,SpaceX火箭。公司全靠他
              </p>
            </div>
          </div>
        </li>


        <li class="testimonials-item">
          <div class="content-card" data-testimonials-item>
            <figure class="testimonials-avatar-box">
              <img src="@/assets/images/avatar-1.png" alt="Daniel lewis" width="60" data-testimonials-avatar />
            </figure>

            <h4 class="h4 testimonials-item-title" data-testimonials-title>
              马云
            </h4>

            <div class="testimonials-text" data-testimonials-text>
              <p>
                周浩被雇来创造一个公司形象。我们对完成的工作非常满意。她有丰富的经验，非常关心客户的需求。这是一种很有价值的东西。
              </p>
            </div>
          </div>
        </li>
      </ul>
    </section>

    <!--
  - testimonials modal
-->

    <div class="modal-container" data-modal-container>
      <div class="overlay" data-overlay></div>

      <section class="testimonials-modal">
        <button class="modal-close-btn" data-modal-close-btn>
          <ion-icon name="close-outline"></ion-icon>
        </button>

        <div class="modal-img-wrapper">
          <figure class="modal-avatar-box">
            <img src="@/assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
          </figure>

          <img src="@/assets/images/icon-quote.svg" alt="quote icon" />
        </div>

        <div class="modal-content">
          <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

          <time datetime="2021-06-14">14 June, 2021</time>

          <div data-modal-text>
            <p>
              Richard was hired to create a corporate identity. We were very
              pleased with the work done. She has a lot of experience and is
              very concerned about the needs of client. Lorem ipsum dolor sit
              amet, ullamcous cididt consectetur adipiscing elit, seds do et
              eiusmod tempor incididunt ut laborels dolore magnarels alia.
            </p>
          </div>
        </div>
      </section>
    </div>

    <!--
  - clients
-->

    <!-- <section class="clients">
      <h3 class="h3 clients-title">Clients</h3>

      <ul class="clients-list has-scrollbar">
        <li class="clients-item">
          <a href="#">
            <img src="@/assets/images/logo-1-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="@/assets/images/logo-2-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="@/assets/images/logo-3-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="@/assets/images/logo-4-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="@/assets/images/logo-5-color.png" alt="client logo" />
          </a>
        </li>

        <li class="clients-item">
          <a href="#">
            <img src="@/assets/images/logo-6-color.png" alt="client logo" />
          </a>
        </li>
      </ul>
    </section> -->
  </article>
</template>
