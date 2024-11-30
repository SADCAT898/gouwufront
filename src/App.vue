<script setup>
import { RouterView } from 'vue-router'
import Sidebar from './components/Sidebar.vue'
</script>

<template>
  <div id="app" class="app-layout">
    <!-- Sidebar 组件 -->
    <Sidebar />

    <!-- 主内容区 -->
    <div class="main-content">
      <RouterView /> <!-- 渲染当前页面 -->
    </div>
  </div>
</template>

<style scoped>
/* 主布局样式 */
.app-layout {
  display: flex;
  height: 100vh;  /* 高度占满整个视口 */
  width: 100%;
  position: relative;
}

/* 主内容区域 */
.main-content {
  flex-grow: 1;  /* 让主内容区域占据剩余空间 */
  padding: 20px;
  background-color: #f9f9f9;
  margin-left: -50px;  /* 留给 Sidebar 的空间，确保没有空隙 */
}
</style>
