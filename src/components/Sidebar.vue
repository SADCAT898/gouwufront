<template>
    <div class="sidebar">
      <button v-for="(page, index) in pages" :key="index" @click="navigateTo(page.path)">
        {{ page.name }}
      </button>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        // 定义侧边栏按钮数据
        pages: [
          { name: '首页', path: '/' },
          { name: '分组选择', path: '/group-choose' },
          { name: '汇报时间', path: '/report-share' },
        ]
      }
    },
    methods: {
      navigateTo(path) {
        this.$router.push(path);  // 使用 Vue Router 进行跳转
      }
    }
  }
  </script>
  
  <style scoped>
  .sidebar {
    position: fixed;
    left: 0;
    top: 0;
    width: 200px;
    height: 97%;
    background-color: #f4f4f4;
    padding: 20px;
    display: flex;
    flex-direction: column;
    z-index: 1000;  /* 确保 Sidebar 位于其他内容之上 */
    border: 1px solid black; /* 为容器添加黑色边框 */
    top:20px;
  }
  
  .sidebar button {
    display: block;
    margin: 10px 0;
    padding: 10px;
    width: 100%;
    text-align: left;
    cursor: pointer;
    background: none;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  </style>
  