<template>
  <div>
    <h1>高阶组件</h1>
    <baseComp></baseComp>
  </div>
</template>

<script>
import baseComp from './components/baseComp.vue'
export default {
  name: 'hightOrderComponents',
  components: { baseComp },
}
</script>