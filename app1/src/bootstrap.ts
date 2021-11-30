import Vue from 'vue'
import Utils from './utils/index'
import App1 from './views/index'

const cnt: number = 10
console.log('=========test', cnt)

new Vue(
  {
    render: h => h(App1)
  }
).$mount('#app1')