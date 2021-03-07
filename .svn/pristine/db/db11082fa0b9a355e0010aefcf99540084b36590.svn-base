var path = require('path')
// var fs = require('fs')
var nodeExternals = require('webpack-node-externals')
var Components = require('../components.json')

var externals = {}

Object.keys(Components).forEach(function (key) {
  externals[`src/components/${key}`] = `lib/${key}`
})

console.log(externals)

externals = [Object.assign({
  vue: 'vue'
}, externals), nodeExternals()]

exports.externals = externals

exports.alias = {
  src: path.resolve(__dirname, './../src'),
  '@': path.resolve(__dirname, './../src'),
}

exports.vue = {
  root: 'Vue',
  commonjs: 'vue',
  commonjs2: 'vue',
  amd: 'vue'
}

exports.jsexclude = /node_modules|utils\/popper\.js|utils\/date\.js/
