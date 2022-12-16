import { createApp } from 'vue';

import App from './App.vue';

import TodoDeleteButton from './components/TodoDeleteButton.vue';

const app = createApp(App);

// const app = createApp({
//   data() {
//     return {
//       count: 1,
//     };
//   },
// });
app.config.errorHandler = (err) => {
  /* 处理错误 */
};

// 加载公共组件
app.component('TodoDeleteButton', TodoDeleteButton);

app.mount('#app');
