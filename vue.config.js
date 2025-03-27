const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: '/site/',
  assetsDir: 'assets',
  outputDir: 'dist',
})