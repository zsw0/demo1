//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: 'where is my present?',
    msg:'',
    msg2: '',
    userInfo: {}
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function(userInfo){
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })
  },
  clickMe: function () {
    this.setData({ msg: "Your present is here" })
  },
  btnScan(e){
    wx.scanCode({
      success: (res) => {
        console.log(res)
        this.setData({ msg2: res.result})
      }
    })
  }
})
