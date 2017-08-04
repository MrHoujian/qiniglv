// pages/xlsy/xlsy.js
var app=getApp();
var url=app.globalData.url
var ye = 2;
Page({
  data:{
    sx:"/pages/sx/sx",
    gengduo:false,
    gif:false,
    a:1
  },
  sx:function(){
    wx.navigateTo({
      url:'../sx/sx'
    })
  },
  // 返回顶部
    goTop: function (e) {
       wx.pageScrollTo({
      scrollTop: 0
    })
    },
  onLoad:function(options){
    var that=this;
        wx.getSystemInfo({  
      success: function (res) {  
        that.setData({  
          h: res.windowHeight  
        })  
       // console.log("屏幕高度: " + res.windowHeight)  
      }  
    })  
    // 页面初始化 options为页面跳转所带来的参数
    var provinceId=options.provinceId;
    var secName=options.secName;
    // var provinceId=1;
    // var secName="北京";
    that.setData({provinceId:provinceId});
    that.setData({secName:secName});
    that.liebiao(provinceId,secName);

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
  },
  liebiao:function(provinceId,secName){
    var that=this;
    wx.request({
      url:'' + url + '/routelist/secondNavigatorRouteList?provinceId='+provinceId+'&secName='+secName+'',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success 
        if(res.data.list){

        var list = res.data.list;
        that.setData({list:list})
        wx.stopPullDownRefresh()
        }else{
          that.setData({gif:true})
          that.setData({gengduo:true})
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
  shuaxing:function(){
    console.log(11)
    var that=this;
    var provinceId=that.data.provinceId;
    var secName=that.data.secName;
    that.liebiao(provinceId,secName);
  },
  jiazai:function(){
    var that=this;
    var provinceId=that.data.provinceId;
    var secName=that.data.secName;
    var idz=that.data.list;
    var ids="";
    for(var a=0;a<idz.length;a++){
        var idg=idz[a].id;
        ids=ids+idg+",";
    }
    ids.substring(0,(ids.length-1));
    
    wx.request({
      url:''+url+'/routelist/secondNavigatorRouteList?provinceId='+provinceId+'&secName='+secName+'&page='+ye+'&ids='+ids+'',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success 
        if (res.data.res==200) {
          var list = that.data.list.concat(res.data.list) 
          that.setData({list:list})
          ye+=1;
        }else{
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
  onReachBottom:function(){
    var that=this
    if(!that.data.gif){
       this.jiazai()
     }
  },
  onPullDownRefresh:function(){
    this.shuaxing()
  }
})