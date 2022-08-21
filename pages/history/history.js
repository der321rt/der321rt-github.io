// pages/history/history.js
const db = wx.cloud.database({});
const cont = db.collection('history');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 创建一个空数组，将获取到的云数据库的数据存放在其中
    histories:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var _this=this;
    // 引用数据库
    const db = wx.cloud.database({
      // 环境ID
      env:'cloud1-7gvfbdsx591cc716'
    })
    // 开始查询数据 news对应的是集合名称
    db.collection('history').get({
      // 查询成功
      success:res=>{
        console.log(res.data);
        // 很重要，给histories数组赋值，没有这一步，前台就不会显示值
        _this.setData({
          histories:res.data
        })
      }
    })
  },
  delete:function(){
    var _this=this
    const db = wx.cloud.database({
      // 环境ID
      env:'cloud1-7gvfbdsx591cc716'
    })
    db.collection('history').where({all:null}).remove()
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