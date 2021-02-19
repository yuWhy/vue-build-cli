<template>
  <div id="app">
    <h1>{{msg}}</h1>
    <router-link to="login">徒手搭建一个vue的说明文档</router-link>
    <router-link to="hello">1</router-link>
    <router-link to="login">2</router-link>
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