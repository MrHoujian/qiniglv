// pages/th/th.js
var app=getApp();
var url=app.globalData.url
Page({
  data: {
    num: "1"
  },
  dx: function (e) {
    this.setData({
      num: e.target.dataset.num
    })
    var tid=e.target.id
    this.qh(tid)
  },
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    var provinceId=app.globalData.provinceId;
    this.th(provinceId);
  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  },
  th:function(provinceId){
    var that =this;
    wx.request({
      url:''+url+'/indexpage/getThSelectListInit?provinceId='+provinceId+'',
      data:{},
       header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // success 
          that.setData({nav:res.data.nav})
          that.setData({routes:res.data.routes})
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
    })
  },
  qh:function(tid){
    var that =this;
    wx.request({
      url:''+url+'/indexpage/getThSelectList?tid='+tid+'',
      data:{},
       header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // success 
          that.setData({routes:res.data.routes})
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
    })
  }
})