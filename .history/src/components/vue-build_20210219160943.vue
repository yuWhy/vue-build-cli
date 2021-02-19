<template>
  <div>
    <h2>1.新建vueProject文件夹</h2>
    <p>进入根目录,初始化项目</p>
    <div class="dimk">
      cd vueProject <br>
      npm init -y // -y是采用默认配置
    </div>
    <br>
    此时目录出现package.json文件
    <h2>2.创建项目结构</h2>
    在根目录下新建src文件夹，在src下暂时新建名为main.js文件作为入口文件<br>
    根目录下创建一个index.html,作为入口页面
    <h2>3.使用webpack</h2>
    <div class="dimk">
      webpack4.X开始webpack-cli被提出来作为一个独立的包了
      在下载webpack同时也要下载webpack-cli,且必须同时下载否则会报错，因为版本不匹配
      npm install webpack-cli webpack --save-dev
    </div>
  </div>
</template>
<script>
export default {
  name: 'vueBuild'
}
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  margin-bottom: 10px;
}
  .dimk {
    background: #333;
    color: #fff;
    padding: 5px 10px;
    display: inline-block;
  }
</style>