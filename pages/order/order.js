
Page({
     data:{
        addhidden:true,
       // aaa:false,
        modalhidden:true,
        tip:"../../images/check.png",
        ttp:"../../images/checked.png",
        mallhide:false,
        //退改签
        //rulehide:true,
         hide:true,
         activityhide:true,
         detail:true,
         //明细显示隐藏
         showtravel:true,
         hidetravel:false
       
   },
   //添加乘机人
   addp:function(e){
     this.setData({
       addhidden:false
     })
    
   },
    //开关函数
  switch1Change: function (e){
    //  console.log('switch1 发生 change 事件，携带值为', e.detail.value)
    if(e.detail.value==false){
        console.log("你没有选中");
       //显示模态框
        wx.showModal({
           title: '确定不享受保险保障吗？',
          // content: '',
          showCancel:true,
          cancelColor:"#59A5F0",
          confirmColor:"#59A5F0",
          success: function(res) {
              if (!res.confirm) {
              //console.log('用户点击确定')
              }
            }
       })
    }
  },
  
   // 遮罩层
 showMask:function(e){
    //  console.log(e)
     this.setData({
     modalhidden:false
     })
   },
   hiddenMask:function(e){
     this.setData({
     modalhidden:true
     })
   },
   //退改签规则
  //  showrule:function(e){
  //     this.setData({
  //    rulehide:false,
    
  //    })
  //  },
  //   hiderule:function(e){
  //    this.setData({
  //    rulehide:true,
    
       
  //    })
  //  },
  //  活动弹窗
  showactivity:function(e){
    console.log(e)
      this.setData({
      activityhide:false      
     })
  },
  // backshowactivity:function(e){
  //    this.setData({
  //     activityhide:false      
  //    })
  // },
  hideactivity:function(e){
      this.setData({
      activityhide:true
     })
  },

//价格明细底部弹窗
showdetail:function(e){
   this.setData({
     detail:false,
     showtravel:false,
     hidetravel:true
   })
},
  pricedetail:function(e){
     this.setData({
     detail:true,
     showtravel:true,
     hidetravel:false
   })
  },

//选择
app:function(e){
     console.log(e)
       this.setData({
          mallhide:true,
          hide:false,
          tip:"../../images/checked.png"
         })
    },
    appjs:function(e){
       this.setData({
           mallhide:false,
           hide:true,
          tip:"../../images/check.png"
         })
    },

    //表单验证
    formBindsubmit:function(e){
      // console.log(e.detail.value.userName.length)
      if(e.detail.value.userName.length==0){
        
          wx.showModal({
            title: '温馨提示',
            content: '姓名不能为空',
            showCancel:false,
            confirmColor:"#59A5F0"
        })
    }else if(e.detail.value.phone.length==0){
      
          wx.showModal({
            title: '温馨提示',
            content: '手机号不能为空',
            showCancel:false,
            confirmColor:"#59A5F0"
      
        })
    }else if(e.detail.value.phone.length!=11){
        wx.showModal({
            title: '温馨提示',
            content: "电话号码长度是11位",
            showCancel:false,
            confirmColor:"#59A5F0"
        
        })
    }else if(!(/^1[34578]\d{9}$/.test(e.detail.value.phone))){ 
          console.log("手机号码有误，请重填")  
          wx.showModal({
            title: '温馨提示',
            content: '手机号码输入不正确',
            showCancel:false,
            confirmColor:"#59A5F0"
        })

      }else{
        wx.navigateTo({
          url: '../payment/payment'
       })
      }
      
    },
    addp:function(){
          wx.redirectTo({
          url: '../hotelDetails/hotelDetails',

    })
    }

})
