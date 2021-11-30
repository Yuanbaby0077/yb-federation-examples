<template>
  <div>
    <button @click="handleClick">来自app1的按钮</button>
  </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  setup() {
    
  },
  methods: {
    handleClick() {
      console.log('app1 button is clicked.....')
    }
  },
})
</script>
