// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    inputValue:null,
    resultList: []
  },
  search:function(inputValue){
    const test = wx.cloud.database().collection('garbage_sort').where({
      garbage:{
        $regex:'.*' + inputValue + '.*',
        $options: '1'
      }}).get({
        success: res => {
          this.setData({
            resultList: res.data
          })
        },
      })
  },

  blur: function (e) {
    this.setData({
      inputValue: e.detail.value
    })
    this.search(this.data.inputValue);
  },
  detail: function (e) {
    // this.save();
    // wx.navigateTo({
    //   url: '../projectDetail/projectDetail?id=' + e.currentTarget.dataset.id,
    // })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.cloud.callFunction({
      name:"demo"
    })
      // setTimeout(() => {
      //   console.log(this.data.resultList)
      // },3000)
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