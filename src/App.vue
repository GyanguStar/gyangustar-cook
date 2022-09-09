<script setup></script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>
        <router-link to="/">窄菜谱</router-link> |
        <router-link to="/eatwhat">吃什么</router-link>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<style scoped>
.common-layout {
  width: 1120px;
}

.el-header {
  position: sticky;
  height: 60px;
  line-height: 60px;
}

.el-main {
  min-height: calc(100vh - 60px);
  position: relative;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
