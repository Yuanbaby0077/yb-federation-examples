<template>
  <div>
    <button @click="handleClick">来自app2的联邦按钮</button>
  </div>
</template>

<script>
export default {
  name: 'common-btn',
  methods: {
    handleClick() {
      console.log('app2 btn is clicked!')
    }
  },
}
</script>