
Page({
  data:{
    currentIndex:0,
    array:[{
      message:'上海',
    },{
      message:'北京'
    }],
    arrayHot:[{message:'上海' },{ message:'深圳'},{ message:'广州'},{message:'广州'},{message:'广州'},{message:'广州'},{message:'广州'
    },{message:'广州'},{message:'深圳'},{message:'深圳'},{ message:'深圳'},{message:'深圳'},{message:'深圳'
    },{message:'深圳'},{message:'深圳'}],
    aList:[{message:'阿尔山'},{message:'阿里'},{message:'阿里'},{message:'阿里'},{message:'阿里'},{message:'阿里'}],
    bList:[{message:'宝山'},{message:'宝山'},{message:'宝山'},{message:'宝山'},{message:'宝山'},{message:'宝山'},{message:'宝山'}],
    word:[{
      id:'A',   
      message:'当前'
    },{
      id:'B', 
      message:'热门'
    },{
      id:'C', 
      message:'A'
    },{
      id:'D', 
      message:'B'
    },{
      id:'E', 
      message:'C'
    },{
      message:'F'
    },{
      message:'G'
    },{
      message:'H'
    },{
      message:'I'
    },{
      message:'J'
    },{
      message:'K'
    },{
      message:'L'
    },{
      message:'M'
    },{
      message:'N'
    },{
      message:'O'
    },{
      message:'P'
    },{
      message:'Q'
    },{
      message:'R'
    },{
      message:'S'
    },{
      message:'T'
    },{
      message:'U'
    },{
      message:'V'
    },{
      message:'W'
    },{
      message:'X'
    },{
      message:'Y'
    },{
      message:'Z'
    }],

  },

 
  handleTapEvent:function(ev){
    // console.log(ev.target.dataset.index);

    this.setData({
      currentIndex:ev.target.dataset.index
    })
  },

  handleChangeEvent:function(ev){
    //打印时间对象知道， current 在事件对象里面
    console.log(ev.detail.current);
     this.setData({
      currentIndex:ev.detail.current
    })
    
  },



})