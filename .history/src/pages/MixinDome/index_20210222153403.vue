<template>
  <div>
    <h1>Mixin{{msg}}</h1>
  </div>
</template>

<script>
import mixin from './mixin.js'
export default {
  name: 'MixinDome',
  mixins: [mixin],
  created() {
    console.log('zai index.vue ')
    console.log(this.$data)
  }
}
</script>

<style>

</style>