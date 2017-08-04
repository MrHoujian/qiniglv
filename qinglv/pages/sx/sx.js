// pages/sx/sx.js
Page({
  data: {
    num: "1",
    arry:[],
  },

  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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
  dx: function (e) {
    console.log(e.target.dataset.num)
    this.setData({
      num: e.target.dataset.num
    })
  },
  ddx:function(e){
     console.log(e.target.dataset.number)
     var num = e.target.dataset.number;
     if(num == 1){
        if(this.data.arry[0] == 1){
             this.setData({
              'arry[0]':''
             })
        }else{
               this.setData({
                'arry[0]':num
               })
        }
       
     }else if (num == 2) {
        if(this.data.arry[1] == 2){
             this.setData({
              'arry[1]':''
             })
        }else{
               this.setData({
                'arry[1]':num
               })
        }

     }else if (num == 3) {
        if(this.data.arry[2] == 3){
             this.setData({
              'arry[2]':''
             })
        }else{
               this.setData({
                'arry[2]':num
               })
        }

     }
  }
})