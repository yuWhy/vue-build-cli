<template>
  <div>
    <h1>Mixin</h1>
    <h2>{{msg}}</h2>
    <h2>{{title}}</h2>
    <p>如果在组件和mixin中都有一个title数据变量。title将返回组件中定义的值</p>
  </div>
</template>

<script>
import mixin from './mixin.js'
export default {
  name: 'MixinDome',
  mixins: [mixin],
  data() {
    return {
      title: 'jfwiefhwi'
    }
  },
  created() {
    console.log('zai index.vue ')
    console.log(this.$data)
    this.displayMessage()
  }
}
</script>

<style>

</style>