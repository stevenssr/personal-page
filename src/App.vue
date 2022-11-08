<script setup lang="ts">
import { watch, ref } from 'vue';
import { RouterView, RouterLink, useRoute } from 'vue-router'

const route = useRoute();
const path = ref()

watch(() => route.name, (newPath) => {
  path.value = newPath
}, { immediate: true });

</script>

<template>
  <RouterView />

  <nav class="navbar">
    <ul class="navbar-list">
      <li class="navbar-item">
        <RouterLink to="/">
          <button class="navbar-link" :class="{ 'active': path == 'Home' }" data-nav-link>首页</button>
        </RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="works">
          <button class="navbar-link" :class="{ 'active': path == 'Works' }" data-nav-link>作品集</button>
        </RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="blog">
          <button class="navbar-link" :class="{ 'active': path == 'Blog' }" data-nav-link>博客</button>
        </RouterLink>
      </li>
      <li class="navbar-item">
        <RouterLink to="message">
          <button class="navbar-link" :class="{ 'active': path == 'Message' }" data-nav-link>留言</button>
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>


<style>
html,
body,
#app {
  background-color: hsl(0, 0%, 7%);
  padding: 4px;
  box-sizing: border-box;
  padding-bottom: 26px;
}
</style>