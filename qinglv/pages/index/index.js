//index.js
//获取应用实例
var hotapp = require('../../utils/hotapp.js');
var app = getApp();
var url=app.globalData.url;
Page(
  {
    data: {
      // baner
      indicatorDots: true,
      autoplay: true,
      interval: 5000,
      duration: 1000,
      // tb
      tb: [
        { "url": "/pages/th/th", "type": "navigate", "class": "tb-th", "tbUrl": "http://uu516.com/cyxcs/wap/img/hui.png", "tbBt": "特惠线路", "key": "1" },
        { "url": "/pages/sy/sy", "type": "switchTab", "class": "tb-mdd", "tbUrl": "http://uu516.com/cyxcs/wap/img/di.png", "tbBt": "目的地", "key": "2" },
        { "url": "/pages/zb/zb", "type": "switchTab", "tbUrl": "http://uu516.com/cyxcs/wap/img/bo.png", "tbBt": "动态", "key": "3" },
        { "url": "/pages/app/app", "type": "switchTab", "class": "tb-app", "tbUrl": "http://uu516.com/cyxcs/wap/img/app.png", "tbBt": "APP下载", "key": "4" },
        { "url": "/pages/rz/rz", "type": "switchTab", "class": "th-app", "tbUrl": "http://uu516.com/cyxcs/wap/img/dian.png", "tbBt": "商户入驻", "key": "5" },
      ],
      // 滑动
      toView: 'red',
      scrollTop: 100,
      scrollTop: 0,
    },
    onLoad:function(){
   
    },
    onReady: function () {
      // 页面渲染完成
        var that = this
      that.loadInfo();
    },
    onShow:function(){
    var that = this
    that.setData({city:app.globalData.city})
    that.shouye(app.globalData.provinceId)
    },
    // 首页滑动
    upper: function (e) {
      // console.log(e)
    },
    lower: function (e) {
      // console.log(e)
    },
    scroll: function (e) {
      // console.log(e)
    },
    tap: function (e) {
      for (var i = 0; i < order.length; ++i) {
        if (order[i] === this.data.toView) {
          this.setData({
            toView: order[i + 1]
          })
          break
        }
      }
    },
    tapMove: function (e) {
      this.setData({
        scrollTop: this.data.scrollTop + 10
      })
    },
    // 返回顶部
    goTop: function (e) {
      this.setData({
        scrollTop: 0
      })
    },
    //事件处理函数
    mdd: function () {
      wx.switchTab({
        url: '../sy/sy'
      })
    },
    csxz: function () {
      wx.navigateTo({
        url: '../csxz/csxz'
      })
    },
    onLoad: function (options) {
      //this.loadInfo();
      var that = this

      //调用应用实例的方法获取全局数据
      app.getUserInfo(function (userInfo) {
        //更新数据
        that.setData({
          userInfo: userInfo
        })
      })
    },
    // 获取坐标
  loadInfo: function () {
      var page = this
      wx.getLocation({
        type: 'wgs84', // 默认为 wgs84 返回 gps 坐标，gcj02 返回可用于 wx.openLocation 的坐标  
        success: function (res) {
          // success  
          var longitude = res.longitude
          var latitude = res.latitude
          page.loadCity(longitude, latitude)
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
      })
    },
    // 判断地址
    loadCity: function (longitude, latitude) {
      var page = this
      wx.request({
        url: 'https://apis.map.qq.com/ws/geocoder/v1/?location=' + latitude + ',' + longitude + '&key=MWABZ-DK73S-XAYOS-6JQTY-BPLY2-JMBH7',
        data: {},
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // success  
          var city = res.data.result.address_component.city;
          city = city.substring(0, (city.length - 1));
          //page.setData({ city: city });
          //city="徐州"
          page.chenshiID(city)
          app.globalData.city = city ;//设置全局城市名
          //console.log(city)
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
      })
    },//获取城市Id
    chenshiID: function (city) {
      var page=this;
      var url=app.globalData.url;
      wx.request({
        url: ''+url+'/indexpage/getPidByName?name=' + city + '',
        data: {},
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // success  
          var provinceId = res.data.provinceId;
          //console.log(provinceId)
          app.globalData.provinceId=provinceId;//设置全局城市id
          if (provinceId==undefined||provinceId==""||provinceId==null) {
            provinceId=1;
            page.setData({ city: "徐州" });
          }
          page.shouye(app.globalData.provinceId);
        },
        fail: function () {
          // fail  
        },
        complete: function () {
          // complete  
        }
      })
    },
    //获取首页内容
    shouye: function (provinceId) {
      var that=this;
      wx.request({
        url: ''+url+'/indexpage/index?provinceId=' + provinceId + '',
        data: {},
        header: {
          'Content-Type': 'application/json'
        },
        success: function (res) {
          // success 
          if(res.data.res==200){
            var carousels = res.data.data.carousels;
            that.setData({ carousels: carousels });
            var ad = res.data.data.ad;
            that.setData({ad:ad});
            var slide = res.data.data.slide;
            that.setData({slide:slide});
            var ipts = res.data.data.ipts;
            that.setData({ipts:ipts});
            console.log(typeof(carousels))
        }else{
            //console.log("嘿嘿")
        }
          
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

