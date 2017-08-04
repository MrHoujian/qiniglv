var app = getApp()
var url = app.globalData.url
var maxId=0
var pageIndex=2;
Page({
  data: {
    gengduo:false
  },
  onReady: function () {
    // 页面渲染完成拉取直播
    var that = this
    that.zhibo();
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
  goTop: function (e) {
    // 返回顶部
    wx.pageScrollTo({
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
  zhibo: function () {
    // 获取直播
    var that = this;
    wx.request({
      url: '' + url + '/hinote/getnewesthinote',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success 
        // 解析url 
        var hiNoteList = res.data.hiNoteList;
        for(var i=0;i<hiNoteList.length;i++){
          hiNoteList[i].content=decodeURI(decodeURI(hiNoteList[i].content))
        };
        that.setData({ hiNoteList: hiNoteList });
        that.setData({ hiNoteList: hiNoteList });
        maxId=hiNoteList[0].id;//获取最大Id
        console.log(maxId)
      },
      fail: function () {
        // fail  
      },
      complete: function () {
        // complete  
      }
    })
  },
  onReachBottom:function(){
    // 上拉加载
    var that=this;
    wx.request({
       url: '' + url + '/hinote/getnewesthinote?maxId='+maxId+'&pageIndex='+pageIndex+'',
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
    onPullDownRefresh:function(){
      // 下拉刷新初始化页数
    pageIndex=2
    this.zhibo()
     wx.stopPullDownRefresh()
  },
  zbss:function(){
     wx.navigateTo({
      url:'../zbss/zbss'
     })
  }
})
