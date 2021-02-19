1 package.js
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "webpack-dev-server"
    // "dev": "webpack-dev-server --open --port 30000" 可以自己配置端口30000
  },

2 使用webpack-dev-server 报错Error: Cannot find module 'webpack-cli/bin/config-yargs'
  是因为webpack-cli的新版本对webpack-dev-server版本的不兼容（我安装的时候是4.+版本）
  可以再次 npm i webpack-cli@3.3.12 -D 就可以了