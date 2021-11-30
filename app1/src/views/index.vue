<template>
  <div>
    hello App1 demo
    <div id="app2"></div>
    <app2-button></app2-button>
    <!-- <app2-pro></app2-pro> -->
  </div>
</template>
<script>
import { defineComponent, defineAsyncComponent } from '@vue/composition-api'
import app2Button from 'app2/Button'
// const app2Button = defineAsyncComponent(() => import('app2/Button'))
// const app2Pro = defineAsyncComponent(() => import('app2/all'))

export default defineComponent({
  data() {
    return {
    }
  },
  components: {
    app2Button,
    // app2Pro
  }
})
</script>

