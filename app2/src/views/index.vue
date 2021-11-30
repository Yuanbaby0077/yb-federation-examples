<template>
  <div>
    hello App2 demo
    <e-button>
      app2 btn
    </e-button>
    注意：前方要共享app1的模块
    <app1-button></app1-button>
  </div>
</template>
<script lang="ts">
import { defineComponent, defineAsyncComponent } from '@vue/composition-api'
import EButton from '../components/btn.vue'
import App1Button from 'app1/app1Button'
// const app1Button = defineAsyncComponent(() => import('app1/app1Button'))

export default {
  components: {
    EButton,
    App1Button
  }
}
</script>
