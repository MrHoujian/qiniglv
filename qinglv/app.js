//app.js
App({
 globalData:{
    userInfo:null,
    city:'徐州',
    provinceId:1,
    url:"https://uu566.com/sshinter/inter/"
  },
  onLaunch: function () {
    //调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)
  },
    goTop: function (e) {
      this.setData({
        scrollTop: 0
      })
    },
    scroll: function (e, res) {
      // 容器滚动时将此时的滚动距离赋值给 this.data.scrollTop
      if (e.detail.scrollTop > 400) {
        this.setData({
          floorstatus: true
        });
      } else {
        this.setData({
          floorstatus: false
        });
      }
    },
  getUserInfo:function(cb){
    var that = this
    if(this.globalData.userInfo){
      typeof cb == "function" && cb(this.globalData.userInfo)
    }else{
      //调用登录接口
      wx.login({
        success: function () {
          wx.getUserInfo({
            success: function (res) {
              that.globalData.userInfo = res.userInfo
              typeof cb == "function" && cb(that.globalData.userInfo)
            }
          })
        }
      })
    }
  }
  
})