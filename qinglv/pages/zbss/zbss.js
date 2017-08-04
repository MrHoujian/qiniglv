// pages/zbss/zbss.js
var app = getApp();
var url=app.globalData.url
var city=""
Page({

  /**
   * 页面的初始数据
   */
   data: {

   },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    var provinceId=app.globalData.provinceId;
    this.remen(provinceId)
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
   onReady: function () {

   },

  /**
   * 生命周期函数--监听页面显示
   */
   onShow: function () {

   },

  /**
   * 生命周期函数--监听页面隐藏
   */
   onHide: function () {

   },

  /**
   * 生命周期函数--监听页面卸载
   */
   onUnload: function () {

   },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
   onPullDownRefresh: function () {

   },

  /**
   * 页面上拉触底事件的处理函数
   */
   onReachBottom: function () {

   },

  /**
   * 用户点击右上角分享
   */
   onShareAppMessage: function () {

   },
   remen:function(provinceId){
    var that=this;
     wx.request({
      url:'' + url + '/navigator/getNavAll?provinceId='+provinceId+'',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success 
        that.setData({city:res.data.second[1]})
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
   },
   zbtz:function(e){
      city=e.currentTarget.dataset.city;
      wx.navigateTo({
        url:"../zbssxq/zbssxq?city="+city+""
      })
   },
    text:function(e){
     //console.log("bindtap"+text+"")
     wx.navigateTo({
       url:"../zbssxq/zbssxq?city="+city+""
     }) 
  },
  textEnter:function(e){
     city=e.detail.value
     //console.log("textEnter"+text+"")
     wx.navigateTo({
       url:"../zbssxq/zbssxq?city="+city+""
     })
  },
  getText:function(e){
      city=e.detail.value
    // console.log("getText"+text+"")
  }
 })