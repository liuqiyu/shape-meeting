# asp-smart-ui 开发指南

## 安装

`cnpm i asp-smart-ui -S`

## 全量加载

```js
import Vue from 'vue'
import AspSmartUI from 'asp-smart-ui'

Vue.use(AspSmartUI)

new Vue({
  el: '#app',
  render: h => h(App)
})
```

## 按需加载

借助 `babel-plugin-component`，我们可以只引入需要的组件，以达到减小项目体积的目的。

首先，安装 `babel-plugin-component`：

### 老版本脚手架

然后，将 `.babelrc` 修改为：

```js
{
  "presets": [["es2015", { "modules": false }]],
  "plugins": [
    [
      "component",
      {
        "libraryName": "asp-smart-ui",
         style: false
      }
    ]
  ]
}
```


### 新版本脚手架

然后，将 `babel.config.js` 修改为：

```js
module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset'
  ],
  plugins: [        // element官方教程
    [
      'component',
      {
        'libraryName': 'asp-smart-ui',
        style: false
      }
    ]
  ]
}

```


接下来，如果你只希望引入部分组件，比如 `Button` main.js 中写入以下内容：

```js
import Vue from 'vue';
import { Button } from 'asp-smart-ui';
import App from './App.vue';

Vue.use(Button)

new Vue({
  el: '#app',
  render: h => h(App)
});
```

## 新发布说明
步骤：登录、打包、发布

```login
npm login --registry http://registry.npmjs.org

```bash
npm run dist

npm publish --registry http://registry.npmjs.org
```

## 查询npm上当前项目版本号
npm view 【项目名称】 versions
```最新
npm view asp-smart-ui version

```历次
npm view asp-smart-ui versions