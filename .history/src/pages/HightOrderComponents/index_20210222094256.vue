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
  </div>
</template>

<script>
import baseComp from './components/baseComp.vue'
import Wrapper from './components/hoc.js'
const wrapperComp = Wrapper(baseComp)
export default {
  name: 'hightOrderComponents',
  components: { baseComp, wrapperComp },
  methods: {
    handle() {
      alert('tyty')
    }
  }
}
</script>