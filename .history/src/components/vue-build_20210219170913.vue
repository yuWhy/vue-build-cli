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
    <div class="dimk">npm install vue@2 --save-dev</div><br>
    main.js中<br>
    <div class="dimk">
      import Vue from 'vue'<br><br>
      new Vue({<br>
          &nbsp;&nbsp; el: '#app',<br>
          &nbsp;&nbsp;msg: 'hello vue'<br>
      })<br>
    </div><br>
    index.html<br>
    <div class="dimk">{{t1}}</div><br>
    <h2>使用webpack-dev-server</h2>
    每次写完新的内容要想看到效果，就必须使用webpack进行打包，我们更希望当代码改变时自动打包编译<br>
    webpack-dev-server可以帮我们做到！<br>
    下载<br>
    <div class="dimk">npm i webpack-dev-server --save-dev
      <p class="hui">如果报错的话也许是因为webpack-cli的新版本对webpack-dev-server版本的不兼容（我安装的时候是4.+版本）
  可以再次 npm i webpack-cli@3.3.12 -D 就可以了</p>
    </div><br>
    使用<br>
    假如像使用webpack命令一样使用使用webpack-dev-server是局部安装的，使用局部安装的包，是完全行不通的，因为命令行里只能使用全局安装的包，webpack-dev-server是局部安装的，使用局部安装的包，我们需要使用在package.json中配置scripts<br>
    <div class="dimk">
      "scripts": {<br>
      &nbsp;&nbsp;"test": "echo \"Error: no test specified\" && exit 1",<br>
      &nbsp;&nbsp;"dev": "webpack-dev-server"<br>
      },
    </div><br>
    在webpack.config.js中配置出入口，就可以跑 npm run dev<br>
    <h2>使用html-webpack-plugin</h2>
    既然将main.js放在内存中可以加快读写速度，那是不是把页面放在内存中可以进一步加快读写速度了？<br>
    答案是肯定的！使用html-webpack-plugin就可以做到<br>
    <div class="dimk">npm i html-webpack-plugin --save-dev</div><br>
    在webpack.config.js中配置<br>
    <div class="dimk">
        const htmlWebpackPlugin = require('html-webpack-plugin')<br>
        <br>
        plugins: [<br>
          &nbsp;&nbsp;new htmlWebpackPlugin({<br>
            &nbsp;&nbsp;&nbsp;&nbsp;template: path.join(__dirname, "./index.html"),<br>
            &nbsp;&nbsp;&nbsp;&nbsp;filename: "index.html"<br>
          &nbsp;&nbsp;})<br>
        ],<br>
    </div><br>
    面的代码是根据磁盘中的index.html在内存中生成一个index.html，我们在浏览器中审查页面发现会多一个script标签，这是插件自动将内存中的main.js加入到内存页面中了<br>
  <h2>组件功能vue-loader</h2>
  组件功能是vue特有的生态vue-loader，官网中可以看到，它配合vue-template-compiler，将组件中的html、js、css单独提出来交给相应的loader处理<br>
  <div class="dimk">npm i vue-loader vue-template-compiler --save-dev</div><br>
  在webpack.config.js中<br>
  <div class="dimk">
    module: {
      &nbsp;&nbsp;nrules: [{ test: /\.vue$/, use: "vue-loader" }]
    },
  </div><br>
  这是因为vue-loader和别的loader不一样，他必须要有一个插件支持，这个插件在./node_modules/vue-loader/lib/plugin下，官网给出示例：<br>
  <div class="dimk">
    const VueLoaderPlugin = require("vue-loader/lib/plugin");<br>
    module: {<br>
      &nbsp;&nbsp;rules: [{ test: /\.vue$/, use: "vue-loader" }]<br>
    },<br>
    plugins: [<br>
      &nbsp;&nbsp;...<br>
      &nbsp;&nbsp;new VueLoaderPlugin(),<br>
      &nbsp;&nbsp;...<br>
    ],<br>
    </div><br>
    <h2>处理样式</h2>
    处理样式使用的是css-loader和style-loader<br>
    <div class="dimk">npm i css-loader style-loader -save-dev</div><br>
    在webpack.config.js中<br>
    <div class="dimk">
      module: {<br>
        &nbsp;&nbsp;rules: [<br>
            &nbsp;&nbsp;&nbsp;&nbsp;...<br>
          &nbsp;&nbsp;&nbsp;&nbsp;{ test: /\.css$/, use: ["style-loader", "css-loader"] }<br>
        &nbsp;&nbsp;]<br>
      },<br>
    </div><br>
  </div>
</template>
<script>
export default {
  name: 'vueBuild',
  data() {
    return {
      t1: '<div id ="app">{{msg}}</div>'
    }
  }
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