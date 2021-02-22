<template>
  <div>
    <h1>Mixin</h1>
  </div>
</template>

<script>
import mixin from './mixin.js'
export default {
  name: 'MixinDome',
  mixins: [mixin],
  created() {
    console.log('zai index.vue ')
  }
}
</script>

<style>

</style>