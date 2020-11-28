// home/home.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    indicatorDots: true,//是否显示面板指示点
    autoplay:false,//是否自动切换
    interval:2000,//自动切换时间间隔
    duration:300,//滑动动画时长
    true:true,
    banner:[
      {url:'../../image/1.jpg'},
      {url:'../../image/2.jpeg'},
      {url:'../../image/3.jpeg'}
    ],
    currentTab: 0,
  },
  jump_scan:function(options){
    wx.navigateTo({
      url: '../scan/scan',
    })
  },
  jump_test:function(options){
    wx.navigateTo({
      url: '../test/test',
    })
  },
  jump_voice:function(options){
    wx.navigateTo({
      url: '../voice/voice',
    })
  },
  jump_rank:function(options){
    wx.navigateTo({
      url: '../rank/rank',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    wx.getSystemInfo({
      success: function(res) {
        that.setData({
          height: res.statusBarHeight
        })
      },
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  switchNav: function(res) {
    console.log(res);
    if (this.data.currentTab === res.target.dataset.current) {
      return false;
    } else {
      this.setData({
        currentTab: res.target.dataset.current
      });
    }
  },
  switchNav2: function(res) {
    let sourc = res.detail.source;
    console.log("source:"+sourc)
//     console.log(res)
//     console.log(res.target.dataset.current)
//     console.log(this.data.currentTab)
    if(sourc=='touch'){
        if (1 === this.data.currentTab) {
          this.setData({
            currentTab: 0
          });
        } else {
          this.setData({
            currentTab: 1
          });
        }
    }
  }
})