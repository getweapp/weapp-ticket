Page({
  data:{
    picSrc: '../../images/hotelPic.png'
  },
hotel:function(){
          wx.redirectTo({
          url: '../hotelDetails/hotelDetails',

    })
    },
  //更换机票
  changeFlight:function(){
    wx.navigateTo({
      url: '../airticket/airticket'
    })
  }





})
