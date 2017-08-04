//index.js
//获取应用实例
var app = getApp();
var url=app.globalData.url
var text="";
Page({
  data: {
    toView: '',
    scrollTop: 100,
    scrollTop: 0,
  }, 
  onLoad: function (options) {
    console.log("123");
  },
  onReady: function () {
    
  },
  onShow: function () {
    var provinceId=app.globalData.provinceId
    this.setData({provinceId:provinceId});
    this.mudidi(provinceId);
  },
  onHide: function () {

  },
  onUnload: function () {

  },
  upper: function (e) {

  },
  scroll: function (e) {
    // console.log(e)
  },
  lower: function (e) {
    // console.log(e)
  },

  // 获取目的地
  mudidi:function(provinceId){
    var that=this;
    wx.request({
      url:'' + url + '/navigator/getNavAll?provinceId=' + provinceId + '',
       data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success  
        var hot = res.data;
        that.setData({hot:hot})
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  },//页内跳转
  tapEvent: function (e) {
    console.log(e.target.dataset.tiao);
    this.setData({toView: e.target.dataset.tiao});
  },
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
  onLoad: function () {
    //判断缓存时间
  },
  text:function(e){
     //console.log("bindtap"+text+"")
     wx.navigateTo({
      url:'../xlss/xlss?text='+text+''
     }) 
  },
  textEnter:function(e){
     text=e.detail.value
     //console.log("textEnter"+text+"")
     wx.navigateTo({
      url:'../xlss/xlss?text='+text+''
     })
  },
  getText:function(e){
      text=e.detail.value
    // console.log("getText"+text+"")
  }
})
