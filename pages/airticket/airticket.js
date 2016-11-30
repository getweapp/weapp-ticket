// pages/airticket/airticket.js

Page({
  data: {
    list1:[{
        id:0,
        list2:[{},{},{},{}]
      },{
        id:1,
        list2:[{},{},{},{}]
      },{
        id:2,
        list2:[{},{}]
      },{},{},{},{},{}],
  
    startDate:'',
    date:'',
    Sweek:'',
    hidden:true
  },
   
   onLoad:function(options){
    this.setData({
      hidden:true,
      startDate:startDate,
      Sweek:options.Sweek,
      date:date
    })
    
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
  onReady:function(){
    this.animation = wx.createAnimation({
      timingFunction: "ease",
      duration:400,

    })
  },

  // 机票预订页面
  go:function(ev){
    if(this.data.hidden == true 
      ){
      this.setData({
        hidden:false,
      })
    }  
  },
  
})
