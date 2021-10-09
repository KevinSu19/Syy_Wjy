// index.js
// 获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  nextPage:function(){
      wx.navigateTo({
        url:'/pages/index/index',
    })
}

})