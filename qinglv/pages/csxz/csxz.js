// pages/csxz/csxz.js
var url = "https://au516.com/sshinter/inter";
var app=getApp()
Page({
  data:{
    scrollTop:0,
    xzCity:2
  },
   // 返回顶部
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  scroll: function (e, res) {
    // 容器滚动时将此时的滚动距离赋值给 this.data.scrollTop
    if (e.detail.scrollTop > 200) {
      this.setData({
        floorstatus: true
      });
    } else {
      this.setData({
        floorstatus: false
      });
    }
  },
  onLoad:function(options){
    var that=this;
    that.setData({city:'徐州'})
    
    // 页面初始化 options为页面跳转所带来的参数
     wx.request({
       url: ''+url+'/indexpage/getProvinces',
        data: {},
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
            that.setData({chenshi:res.data.list})
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
    })
  },
  xzCity:function(e){
    var provinceId=e.currentTarget.id;
    var city=e.currentTarget.dataset.name;
    this.setData({xzCity:provinceId})
    wx.switchTab({
      url:'../index/index'
    })
    app.globalData.provinceId=provinceId
    app.globalData.city=city
    console.log(app.globalData.provinceId)
    console.log(app.globalData.city)
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  }
})