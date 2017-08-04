//index.js
//获取应用实例
var app = getApp()
// var util = require('../../utils/util.js')
Page({
  data: {
    toView: '',
    scollTop: 100,
     rm: [
      { "dd": "日本", "key": "1" },
      { "dd": "桂林", "key": "2" },
      { "dd": "泰国", "key": "3" },
      { "dd": "罗马里", "key": "4" },
      { "dd": "新加坡", "key": "5" },
      { "dd": "美国", "key": "6" },
      { "dd": "香港", "key": "7" },
      { "dd": "日本", "key": "8" },
      { "dd": "日本", "key": "9" },
    ],
    flk: [
      { "type": "gn","cs":"国内" },
      { "city": "阿坝", "type": "city" },
      { "city": "阿克苏", "type": "city" },
      { "city": "阿坝", "type": "city" },
      { "city": "阿克苏", "type": "city" },
      { "city": "阿坝", "type": "city" },
      { "city": "阿克苏", "type": "city" },
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

  // indexEvent: function (e) {
  //   //console.log(e);

  //   let offsetTop = e.changedTouches["0"].pageY;
  //   let letterIndex = (offsetTop - 20) / 15;
  //   let letter = this.data.letterArray[letterIndex - 1];
  //   //console.log(letter);
  //   //console.log(e.changedTouches["0"].pageY);


  //   this.setData({ toView: letter })
  //   //通过flex设置listview和sidebar按column排列
  //   //设置sidebar的height固定为为50px，设置sidebar中的view固定height为为20px
  //   //获得当前手指触摸距离屏幕顶部的位置，减去50px，再除以20,用获得的值根据a-z的array[index]，获得字母，通过字母设置toview

  // },
  tapEvent: function (e) {
    //console.log(e);
    this.setData({ toView: e.currentTarget.id.trim() });
  },
  onLoad: function () {
    //判断缓存时间
  },
  
})
