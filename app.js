App({
  // ========== 全局数据对象（整个应用程序共享） ==========
  globalData: {},

  // ========== 应用程序全局方法 ==========
  
  // ========== 生命周期方法 ==========
  onLaunch () {
    // 应用程序启动时触发一次
    console.log('App Launch');
  },

  onShow () {
    // 当应用程序进入前台显示状态时触发
    console.log('App Show')
  },

  onHide () {
    // 当应用程序进入后台状态时触发
    console.log('App Hide')
  }

})
