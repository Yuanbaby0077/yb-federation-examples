import Vue from 'vue'
import App1 from './views'

new Vue(
  {
    render: h => h(App1)
  }
).$mount('#app2')