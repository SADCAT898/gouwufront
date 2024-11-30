import { createRouter, createWebHistory } from 'vue-router'

import gc from '../components/GroupChoose.vue'
import rs from '../components/Report Sharing Time Selection System.vue' // 确保文件名和路径正确

const routes = [
  {
    path: '/group-choose', // 路由路径
    name: 'GroupChoose',
    component: gc // 组件对应路由
  },
  {
    path: '/report-share', // 路由路径
    name: 'ReportShare',
    component: rs // 组件对应路由
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
