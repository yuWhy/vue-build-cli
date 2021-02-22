<template>
  <div>
    <h1>Mixin</h1>
    <h2>{{msg}}</h2>
  </div>
</template>

<script>
import mixin from './mixin.js'
export default {
  name: 'MixinDome',
  mixins: [mixin],
  data() {
    return {
      msg: 'jfwiefhwi'
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