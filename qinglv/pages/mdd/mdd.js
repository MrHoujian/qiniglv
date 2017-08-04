//index.js
//获取应用实例
var app = getApp()
Page({
  data: {
     toView: '',
    scollTop: 100,
     rm: [
      { "dd": "日本","xlsy":"/pages/xlsy/xlsy","key": "1" },
      { "dd": "桂林","xlsy":"/pages/xlsy/xlsy", "key": "2" },
      { "dd": "泰国","xlsy":"/pages/xlsy/xlsy", "key": "3" },
      { "dd": "罗马里","xlsy":"/pages/xlsy/xlsy", "key": "4" },
      { "dd": "新加坡","xlsy":"/pages/xlsy/xlsy", "key": "5" },
      { "dd": "美国","xlsy":"/pages/xlsy/xlsy", "key": "6" },
      { "dd": "香港","xlsy":"/pages/xlsy/xlsy", "key": "7" },
      { "dd": "日本","xlsy":"/pages/xlsy/xlsy", "key": "8" },
      { "dd": "日本", "xlsy":"/pages/xlsy/xlsy","key": "9" },
    ],
    flk: [
      { "type": "gn","cs":"国内" },
      { "city": "阿坝","xlsy":"/pages/xlsy/xlsy", "type": "city" },
      { "city": "阿克苏","xlsy":"/pages/xlsy/xlsy", "type": "city" },
      { "city": "阿坝","xlsy":"/pages/xlsy/xlsy", "type": "city" },
      { "city": "阿克苏","xlsy":"/pages/xlsy/xlsy", "type": "city" },
      { "city": "阿坝", "xlsy":"/pages/xlsy/xlsy","type": "city" },
      { "city": "阿克苏","xlsy":"/pages/xlsy/xlsy", "type": "city" },
      { "city": "阿坝", "type": "city" },
      { "city": "阿克苏", "type": "city" },
      { "city": "阿坝", "type": "city" },
      { "city": "阿克苏", "type": "city" },
      { "city": "阿坝", "type": "city" },
      { "city": "阿克苏", "type": "city" },
      { "type": "zb","cs":"周边" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "city": "白城","type": "city" },
      { "city": "百色","type": "city" },
      { "type": "gat","cs":"港澳台"},
      { "city": "沧州","type": "city" },
      { "city": "长春","type": "city" },
      { "city": "沧州","type": "city" },
      { "city": "长春","type": "city" },
      { "city": "沧州","type": "city" },
      { "city": "长春","type": "city" },
      { "city": "沧州","type": "city" },
      { "city": "长春","type": "city" },
      { "city": "沧州","type": "city" },
      { "city": "长春","type": "city" },
      { "city": "沧州","type": "city" },
      { "city": "长春","type": "city" },
      { "city": "沧州","type": "city" },
      { "city": "长春","type": "city" },
      { "city": "沧州","type": "city" },
      { "city": "长春","type": "city" },
      { "type": "rh","cs":"日韩" },
      { "city": "大理","type": "city" },
      { "city": "大连","type": "city" },
      { "city": "大理","type": "city" },
      { "city": "大连","type": "city" },
      { "city": "大理","type": "city" },
      { "city": "大连","type": "city" },
      { "city": "大理","type": "city" },
      { "city": "大连","type": "city" },
      { "city": "大理","type": "city" },
      { "city": "大连","type": "city" },
      { "city": "大理","type": "city" },
      { "city": "大连","type": "city" },
    ],
      fl: [
    {"id":"gn","dd":"国内"},
    {"id":"zb","dd":"周边"},
    {"id":"gat","dd":"港澳台"},
    {"id":"rh","dd":"日韩"},
    ]
  },
  
  // 返回顶部
  goTop: function (e) {
    this.setData({
      scrollTop: 0
    })
  },
   tapEvent: function (e) {
    //console.log(e);
    this.setData({ toView: e.currentTarget.id.trim() });
  },
  //事件处理函数
  csxz:function(){
    wx.navigateTo({
      url:'../csxz/csxz'
    })
  },
  onLoad: function () {
    console.log('onLoad')
    var that = this
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo: userInfo
      })
    })
  }
})
