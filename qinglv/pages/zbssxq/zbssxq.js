// pages/zbssxq/zbssxq.js
var app=getApp();
var url=app.globalData.url
var maxId=0
var pageIndex=2;
Page({

  /**
   * 页面的初始数据
   */
   data: {
    gengduo:false,
    gif:false
   },

  /**
   * 生命周期函数--监听页面加载
   */
   onLoad: function (options) {
    this.setData({city:options.city})
    this.zhibo(options.city)
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
      pageIndex=2
      var city=this.data.city
      this.zhibo(city)
      wx.stopPullDownRefresh()
   },

  /**
   * 页面上拉触底事件的处理函数
   */
   onReachBottom: function () {
       // 上拉加载
    var that=this;
    var city=that.data.city
    wx.request({
       url: '' + url + '/hinote/getsearchhinote?condition='+city+'&maxId='+maxId+'&pageIndex='+pageIndex+'',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success 
        // 拼接数组 
        var hiNoteList =that.data.hiNoteList.concat(res.data.hiNoteList);
        if(res.data.hiNoteList[0]){
            for(var i=0;i<hiNoteList.length;i++){
          hiNoteList[i].content=decodeURI(decodeURI(hiNoteList[i].content))
        };
        that.setData({ hiNoteList: hiNoteList });
        that.setData({ hiNoteList: hiNoteList });
        // 页数+1
        pageIndex++
      }else{
        // 显示提示信息
         that.setData({gengduo:true});
           setTimeout(function () {  
            that.setData({gengduo:false})  
          }, 2000)
      }
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  },

  /**
   * 用户点击右上角分享
   */
   onShareAppMessage: function () {

   },
  // 获取直播
  zhibo: function (city) {
    // 获取直播
    var that = this;
    wx.request({
      url: '' + url + '/hinote/getsearchhinote?condition='+city+'',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success 
        // 解析url 
        var hiNoteList = res.data.hiNoteList;
        if(res.data.hiNoteList[0]){
          for(var i=0;i<hiNoteList.length;i++){
            hiNoteList[i].content=decodeURI(decodeURI(hiNoteList[i].content))
          };
          that.setData({ hiNoteList: hiNoteList });
          that.setData({ hiNoteList: hiNoteList });
           maxId=hiNoteList[0].id;//获取最大Id
           console.log(maxId)
        }else{
          that.setData({gengduo:true})
          that.setData({gif:true})
        }
       
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  },
  tptap: function (e) {
    // 图片放大
    var current = e.target.dataset.src;
    var idx = e.target.dataset.index;
    var tpsrc = this.getUrl(idx)
    wx.previewImage({
      current: current, // 当前显示图片的http链接  
      urls: tpsrc // 需要预览的图片http链接列表  
    })
  },
  getUrl: function (idx) {
    // 获得图片url组
    var zb = this.data.hiNoteList[idx].imgList;
    var tuzu = [];
    for (var i = 0; i < zb.length; i++) {
      tuzu.push(zb[i].downloadUrl)
    }
    return tuzu;
  },
    // 返回顶部
    goTop: function (e) {
     wx.pageScrollTo({
      scrollTop: 0
    })
   }
 })