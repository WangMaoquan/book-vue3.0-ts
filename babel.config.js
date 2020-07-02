/*
 * @Description: 
 * @Version: 1.0
 * @Autor: Wang
 * @Date: 2020-07-01 10:52:05
 * @LastEditors: Wang
 * @LastEditTime: 2020-07-01 17:06:23
 */ 
module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "component",
      {
        libraryName: "element-ui",
        styleLibraryName: "theme-chalk"
      }
    ]
  ]
}
