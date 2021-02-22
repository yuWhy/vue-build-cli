<template>
  <div>
    <h1>高阶组件</h1>
    <baseComp @handle-click="handle" p="baseApp">
      <div>我是一个默认插槽：base默认slot</div>
      <template v-slot:sname>
        <div>我是一个具名插槽：base具名slot</div>
      </template>
    </baseComp>
     <br />
    /********************** wrapperComp start **********************/
    <br />
    <wrapperComp @handle-click="handle" p="wrapperApp">
      <div>我是一个默认插槽：wrappe默认slot</div>
      <template v-slot:sname>
        <div>我是一个具名插槽：wrappe具名slot</div>
      </template>
    </wrapperComp>
    <h1>高阶组件说明文档</h1>
    <h3>何谓高阶组件？类比高阶函数的定义：将函数作为参数的函数就是高阶函数，那么，将组件作为参数的组件就是高阶组件。</h3>
    <p>假如我们有一个组件，我们希望通过某个函数，去扩展它，得到一个新的组件，新的组件有完全的参数组件的行为，如果这点可以满足，那么其他扩展就可以针对性的进行处理了。组件最重要的三个功能就是事件、属性以及插槽，通过函数得到新的组件如果能完全复制参数组件的这三项能力，那么这个函数就是一个合格的高阶组件。</p>
    <h3>思路</h3>
    <span>通过组件的render函数基于参数组件的模板进行属性、事件乃至插槽的捆绑</span>
    <h3>思路</h3>
    <span>我们先定义一个baseComp，一个函数hoc.js，将baseComp传入得到wrapperComp</span><br>
    
  </div>
</template>

<script>
import baseComp from './components/baseComp.vue'
import hoc from './components/hoc.js'
const wrapperComp = hoc(baseComp)
export default {
  name: 'hightOrderComponents',
  components: { baseComp, wrapperComp },
  data() {
    return {
      m1: ``
    }
  },
  methods: {
    handle() {
      alert('tyty')
    }
  }
}
</script>

<style scoped>
.dimk {
    background: #333;
    color: #fff;
    padding: 5px 10px;
    display: inline-block;
  }
  .dimk .hui {
    color: #999;
  }
</style>