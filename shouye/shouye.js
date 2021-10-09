
//js: 代码如下
const backgroundAudioManager = wx.getBackgroundAudioManager() //获取背景音频实例
backgroundAudioManager.title = '欢快的背景'
backgroundAudioManager.singer = 'toky'
backgroundAudioManager.coverImgUrl = '' //封面图 URL
// 设置了 src 之后会自动播放（src为云开发中云存储空间文件的链接）
backgroundAudioManager.src = 'https://6465-demo-p9hhp-1300526081.tcb.qcloud.la/toky/backgroundmusic.mp3?sign=db2895a2030cea0242a274d23354cf04&t=157519411'
var that = backgroundAudioManager
// 背景音乐循环的方法
// 1、onEnded监听播放自然结束
backgroundAudioManager.onEnded(function() {
  // 2、必须重新设置src才能循环之后会自动播放
  backgroundAudioManager.src = 'https://6465-demo-p9hhp-1300526081.tcb.qcloud.la/toky/backgroundmusic.mp3?sign=db2895a2030cea0242a274d23354cf04&t=1575194113'
})

Page({

  /**
   * 页面的初始数据
   */
  data: {
    modalHidden: true,
    switchStatus: true
  },
  switchChange: function(e) {
    let switchStatus = e.detail.value//获取switch开关状态
      this.setData({
      switchStatus: switchStatus
    })
    if (switchStatus) {
      backgroundAudioManager.play()//播放
    } else {
      backgroundAudioManager.pause()//暂停
    }
  },
  
  /**
   * 显示弹窗
   */
  buttonTap: function() {
    this.setData({
      modalHidden: false
    })
  },

  /**
   * 点击取消
   */
  modalCandel: function() {
    // do something
    this.setData({
      modalHidden: true
    })
  },

  /**
   *  点击确认
   */
  modalConfirm: function() {
    // do something
    this.setData({
      modalHidden: true
    })
  },
  nextPage1:function(){
    wx.navigateTo({
      url:'/pages/index/index',
  })
  },
  nextPage2:function(){
    wx.navigateTo({
      url:'/pages/duoren_page/duoren_page',
  })
  }
})