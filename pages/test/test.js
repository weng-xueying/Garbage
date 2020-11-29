// pages/test/test.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    swiperHeight: 0,//初始时swiper的高度是0
    number: 0,
    garbage:[{
      title:"瓜子壳",
      type:2,
    },
    {
      title:"鸡骨头",
      type:2
    },
    {
      title:"塑料袋",
      type:3
    },
    {
      title:"冰红茶包装盒",
      type:0
    },
    {
      title:"锂电池",
      type:1
    },
    {
      title:"快递盒",
      type:0
    },
    {
      title:"AD钙奶瓶",
      type:0
    },
    {
      title:"一次性筷子",
      type:3
    },
    {
      title:"502胶水",
      type:1
    },
    {
      title:"阿司匹林",
      type:1
    },
  ],
    currentTab: 0,
  },
  //父组件取到子组件传来的值,取e.detail.子组件传的变量（父组件wxml的组件标签中： bind子组件="addion" ）
  addion(e) {
    // 这里就是子组件传过来的内容了
    if(e.detail.mess){
      this.setData({
        number: this.data.number+1
      })
    }
  },
    
  switchNav: function(res) {
    if(res.target.dataset.current<9)
      this.setData({
        currentTab: res.target.dataset.current+1
      });
      else{
        
      }
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    let that = this;//
    wx.getSystemInfo({
      success: (res) => {
        let clientHeight = res.windowHeight;
        let clientWidth = res.windowWidth;
        let ratio = 750 / clientWidth;//计算为百分比
        let rpxHeight = ratio * clientHeight;
        that.setData({
          swiperHeight:rpxHeight//将计算好的高度给定义好的值
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

  }
})