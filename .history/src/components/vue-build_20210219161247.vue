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
     <p class="hui"> webpack4.X开始webpack-cli被提出来作为一个独立的包了<br>
      在下载webpack同时也要下载webpack-cli,且必须同时下载否则会报错，因为版本不匹配<br></p>
      npm install webpack-cli webpack --save-dev<br>
    </div>
    webpack默认只能打包js模块，它可以将你写的多个js模块打包成一个js文件，最后在入口页面引入它<br>
    webpack4开始默认大于配置，换句话说可以不用再引入一个配置文件来打包项目，因此他有很多默认值<br>
    默认入口文件是src下的index.js，输出为dist目录下的main.js（假如没有dist目录会自动创建）<br>
    但是它仍然是高配置的，假如需要我们只需在项目根目录下新建webpack.config.js来进行一切的配置<br>
    相比于webpack4之前的版本，它的配置项多出一个mode选项，可选值为"development" 或 “production”（默认），它们的区别就是development打包输出的文件不是压缩版本的
    <h2>4.使用vue.js</h2>
    <div class="dimk">npm install vue@2 --save-dev</div>
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
  .dimk .hui {
    color: #999;
  }
</style>