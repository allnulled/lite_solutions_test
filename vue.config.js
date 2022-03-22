const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === "production" ? "/lite_solutions_test/" : "/",
  transpileDependencies: true
});