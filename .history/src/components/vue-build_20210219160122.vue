<template>
  <div>
    <h2>1.新建vueProject文件夹</h2>
    <p>进入根目录,初始化项目</p>
    <div class="dimk">
      cd vueProject <br>
      npm init -y // -y是采用默认配置
    </div>
    此时目录出现package.json文件
  </div>
</template>
<script>
export default {
  name: 'vueBuild'
}
</script>
<style scoped>
  .dimk {
    background: #333;
    color: #fff;
    padding: 5px 10px;
    display: inline-block;
  }
</style>