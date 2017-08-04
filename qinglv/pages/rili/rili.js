//index.js
//获取应用实例
//var riLi= new Array();
var app = getApp();
var url=app.globalData.url;
var riLi = [[], [], []]
Page({
  data: {
    hasEmptyGrid: false,
    cur_year: '',
    cur_month: ''
  },
  onLoad(options) {
    this.setNowDate();
    // this.jian();
    this.jia()
    this.setData({ riLi: riLi });
    this.riqi()
  },
  dateSelectAction: function (e) {//日期选择
    var y = e.currentTarget.dataset.y;//下标天数
    var r = e.currentTarget.dataset.r;//下标天数
    var cr =e.currentTarget.dataset.cr;
    var et =e.currentTarget.dataset.et;
    var yw =e.currentTarget.dataset.yw;
    if(cr!==undefined){
      var z=''+y+''+r+''
      this.setData({z:z})
    }
    //console.log(`点击的日期:${this.data.cur_year}年${this.data.cur_month}月${cur_day + 1}`);
  },

  setNowDate: function () {//设置日期
    var date = new Date();//新建日期
    var cur_year = date.getFullYear();//得到年
    var cur_month = date.getMonth() + 1;//得到月
    var todayIndex = date.getDate() - 1;//得到星期
    console.log(`日期：${todayIndex}`)
    var weeks_ch = ['日', '一', '二', '三', '四', '五', '六'];//设置星期
    riLi[0][5]=this.calculateEmptyGrids(cur_year, cur_month);//空格计算传入年月
    riLi[0][6]=this.calculateDays(cur_year, cur_month);//计算日子
    console.log(riLi)
    this.setData({
      cur_year: cur_year,
      cur_month: cur_month,
      weeks_ch,
      todayIndex,
    })
    riLi[0][0] = cur_year
    riLi[0][1] = cur_month
    riLi[0][2] = weeks_ch
    riLi[0][3] = todayIndex
  },
  getThisMonthDays(year, month) {//得到这个月有多少天
    return new Date(year, month, 0).getDate();
  },
  getFirstDayOfWeek(year, month) {//得到每月第一天星期几
    return new Date(Date.UTC(year, month - 1, 1)).getDay();
  },
  calculateEmptyGrids(year, month) {//计算空网格
    var firstDayOfWeek = this.getFirstDayOfWeek(year, month);//得到每月第一天星期
    let empytGrids = [];//空网格
    if (firstDayOfWeek > 0) {//找出空的格子
      for (let i = 0; i < firstDayOfWeek; i++) {
        empytGrids.push(i);
      }
      this.setData({
        hasEmptyGrid: true,//有空的格子
        empytGrids//空的格子组
      });
    } else {
      this.setData({
        hasEmptyGrid: false,//无空的格子
        empytGrids: []//空的格子组
      });
    }
    return empytGrids
  },
  calculateDays(year, month) {//计算日子
    let days = [];

    var thisMonthDays = this.getThisMonthDays(year, month);//获得日子
    console.log(month,thisMonthDays)
    for (let i = 1; i <= thisMonthDays; i++) {
      days.push([]);
    }

    this.setData({
      days
    });
    return days
  },
  // 加
  jia: function () {
    var cur_year = this.data.cur_year;
    var cur_month = this.data.cur_month;
    for(var i=1;i<3;i++){
      cur_month+=1;
      if(cur_month>12){
        cur_year+=1;
        cur_month=1;
      }
      riLi[i][0]=cur_year;
      riLi[i][1]=cur_month;
      riLi[i][5] = this.calculateEmptyGrids(cur_year, cur_month);//空
      riLi[i][6] = this.calculateDays(cur_year, cur_month);//日子
      console.log(cur_month)
    }
  },
  riqi:function(){
    var that=this
    wx.request({
      url:'' + url + '/routeInfo/priceInfo?routeId=1',
      data: {},
      header: {
        'Content-Type': 'application/json'
      },
      success: function (res) {
        // success  
        var priceList=res.data.priceList
        for(var i=0;i<priceList.length;i++){
           priceList[i].date=new Date(parseInt(priceList[i].date) * 1000).toLocaleString().replace(/:\d{1,2}$/,' ')
           var ny=priceList[i].date.split("/")
           ny[2]=ny[2].split(" ")[0];
           priceList[i].dateStr=ny
         }
         for(var i=0;i<riLi.length;i++){
          for(var k=0;k<priceList.length;k++){                
            if(riLi[i][1]==priceList[k].dateStr[1]){
              for(var j=0;j<riLi[i][6].length;j++){
                if(j+1==priceList[k].dateStr[2]){
                  riLi[i][6][j].push(priceList[k]);
                }
              }
            } 
          }
        }
        console.log(riLi)
        that.setData({riLi:riLi})   
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
