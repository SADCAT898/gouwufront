<template>
  <div class="container">
    <!-- 加号按钮 -->
    <button @click="addGroup" class="add-button">+</button>

    <!-- 动态生成的组信息容器 -->
    <div
      v-for="(group, index) in groups"
      :key="index"
      class="group-container"
      :class="{ joined: group.isJoined, created: group.isCreated }"
    >
      <div class="group-info">
        <!-- 组名和输入框放在同一行 -->
        <div class="row">
          <label>组名:</label>
          <input
            type="text"
            v-model="group.name"
            placeholder="请输入组名"
            :disabled="group.isJoined"
          />
        </div>

        <!-- 组号和输入框放在同一行 -->
        <div class="row">
          <label>组号:</label>
          <input
            type="text"
            v-model="group.number"
            placeholder="请输入组号"
            :disabled="group.isJoined"
          />
        </div>

        <!-- 人数和输入框放在同一行 -->
        <div class="row">
          <label>人数:</label>
          <input
            type="number"
            v-model="group.count"
            placeholder="请输入人数"
            :disabled="group.isJoined"
          />
        </div>

        <!-- 创建/加入按钮 -->
        <button
          @click="group.isCreated ? joinGroup(group) : createGroup(group)"
          class="join-button"
          :disabled="group.isJoined"
        >
          {{ group.isJoined ? '已加入' : group.isCreated ? '加入' : '创建' }}
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// 组的数据结构
const groups = ref([]);

// 添加新的组
const addGroup = () => {
  console.log('加号按钮被点击了'); // 调试输出
  groups.value.push({
    name: '', // 组名
    number: '', // 组号
    count: 0, // 人数
    isJoined: false, // 是否已加入
    isCreated: false, // 是否已创建
  });
};

// 创建组操作
const createGroup = (group) => {
  console.log("创建组:", group);
  // 这里可以添加实际的创建操作，如提交到服务器等

  // 标记为已创建
  group.isCreated = true;
};

// 加入组操作
const joinGroup = (group) => {
  console.log("加入组:", group);
  // 这里可以添加实际的加入操作，如提交到服务器等

  // 标记为已加入
  group.isJoined = true;
};
</script>

<style scoped>
/* 容器样式 */
.container {
  position: relative; /* 设置为相对定位，以便子元素使用绝对定位相对于此容器 */
  height: 97vh; /* 设置容器高度为视口高度 */
  width: 1400px; /* 设置容器宽度为屏幕的宽度 */
  padding: 20px; /* 容器的内边距 */
  border: 1px solid black; /* 为容器添加黑色边框 */
  border-radius: 8px; /* 容器的圆角 */
  display: flex; /* 使用弹性布局 */
  flex-direction: column; /* 使元素在容器内垂直排列 */
  justify-content: flex-start; /* 确保内容从容器顶部开始显示 */
  align-items: center; /* 使所有内容在水平方向居中对齐 */
  box-sizing: border-box; /* 包括内边距和边框在内计算容器的宽度和高度 */
}

/* 加号按钮样式 */
.add-button {
  position: absolute; /* 绝对定位 */
  top: 0; /* 与容器顶部对齐 */
  right: 0; /* 与容器右边对齐 */
  background-color: white; /* 背景色为白色 */
  color: black; /* 字体颜色为黑色 */
  border: 1px solid black; /* 为按钮添加黑色边框 */
  font-size: 20px; /* 字体大小为20px */
  width: 50px;  /* 按钮的宽度为50px */
  height: 50px; /* 按钮的高度为50px，确保为正方形 */
  padding: 0; /* 去掉内边距 */
  cursor: pointer; /* 鼠标悬停时显示为手型 */
  z-index: 10; /* 确保加号按钮显示在其他元素之上 */
}

/* 组容器样式 */
.group-container {
  margin-top: 20px; /* 设置组容器与上方元素的间距 */
  padding: 10px; /* 组容器的内边距 */
  border: 1px solid #ccc; /* 设置容器的边框为浅灰色 */
  border-radius: 8px; /* 圆角边框 */
  background-color: #f9f9f9; /* 背景色为浅灰色 */
  width: 100%; /* 容器宽度为100%，占满父容器宽度 */
  max-width: 180px; /* 最大宽度为200px，防止容器过宽 */
  box-sizing: border-box; /* 计算宽度和高度时包括内边距和边框 */
  transition: transform 0.3s ease; /* 添加平滑的转换效果，使元素移动时有过渡 */
  position: absolute; /* 绝对定位，确保组容器可以自由定位 */
  top: 50px; /* 距离容器顶部50px */
  right: 20px; /* 距离容器右边20px */
}

/* 当组已创建时，移到左侧 */
.group-container.created {
  transform: translateX(-600%); /* 同样将已创建的组容器移到左侧 */
}

/* 组信息容器样式 */
.group-info {
  display: flex; /* 使用弹性布局 */
  flex-direction: column; /* 垂直排列子元素 */
  gap: 15px; /* 子元素之间的间距为10px */
}

/* 每一行的标签和输入框 */
.row {
  display: flex; /* 使用flex布局 */
  align-items: center; /* 使标签和输入框在垂直方向上居中对齐 */
  gap: 15px; /* 标签与输入框之间的间距 */
}

/* 每个输入框的样式 */
input {
  max-width: 100px; /* 设置最大宽度为100px */
  width: 100%; /* 确保输入框可以适应父容器的宽度 */
}

/* 禁用输入框样式 */
input:disabled {
  background-color: #f0f0f0; /* 禁用时输入框的背景色为灰色 */
  cursor: not-allowed; /* 禁用时鼠标悬停显示禁止符号 */
}

/* 通用按钮样式 */
button {
  padding: 10px; /* 按钮内边距 */
  border: none; /* 去掉按钮的默认边框 */
  border-radius: 4px; /* 按钮圆角 */
  cursor: pointer; /* 鼠标悬停时显示为手型 */
}

/* 加入按钮的样式 */
.join-button {
  background-color: #008cba; /* 设置按钮的背景颜色为蓝色 */
  color: white; /* 按钮文本为白色 */
}

/* 加入按钮悬停时的样式 */
.join-button:hover {
  background-color: #005f6b; /* 悬停时按钮背景颜色变为深蓝色 */
}

/* 禁用的按钮样式 */
button:disabled {
  background-color: #ccc; /* 禁用时按钮背景色为浅灰色 */
  cursor: not-allowed; /* 禁用时鼠标悬停显示禁止符号 */
}
</style>
