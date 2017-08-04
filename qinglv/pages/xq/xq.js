// pages/xq/xq.js
var app = getApp();
var url=app.globalData.url
Page({
   data: {
    yh:false
  },
   tptap: function (e) {
         
        var current=e.target.dataset.src; 
        var tcid=e.target.dataset.tcid;
        var urls = this.getUrl(tcid);
        wx.previewImage({  
            current: current, // 当前显示图片的http链接  
            urls: urls// 需要预览的图片http链接列表  
        })  
    },
  getUrl:function(e){
   var tian=this.data.routeInfo.routeDayTitle;
   var tuzu=[];
    for(var a=0;a<tian.length;a++){

            var nei=tian[a].routeTitleContent;

            for(var b=0;b<nei.length;b++){

              var tu=nei[b].routeImg;
               
              for (var c=0;c<tu.length;c++) {
                if(e==tu[c].tc_id){
                  tuzu.push(tu[c].downloadUrl)
                }
              }

            }
          }
          return tuzu;
  },  
  goTop: function (e) {
      this.setData({
        scrollTop: 0
      })
    },
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
    var that=this;
    var id=options.id;
    //id=1;
      wx.request({
        url: ''+url+'routeInfo/routeInfo?routeId=' + id + '',
        data: {},
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // success 
          if(res.data.res==200){
          var routeInfo=res.data.routeInfo;

          that.setData({routeInfo:routeInfo})
        }else{
            console.log("嘿嘿")
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
  kq:function(){
    this.setData({yh:true})
  },
  gb:function(){
    this.setData({yh:false})
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