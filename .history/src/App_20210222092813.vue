<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <router-link to="vueBuild">徒手搭建一个vue的说明文3档</router-link>
    <router-link to="hightOrderComponents">高阶组件</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      msg: '徒手搭建一个vue'
    }
  }
}
</script>