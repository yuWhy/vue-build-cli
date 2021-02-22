<template>
  <div>
    <button @click="$emit('handle-click')">点击事件</button><br>
  </div>
</template>
<script>
export default {
  props: ['p'],
  components: {},
  data() {
    return {
      myProp: 'baseProp1'
    }
  }
}
</script>