// pages/anquan/anquan.js
// const db = wx.cloud.database()
const db = wx.cloud.database().collection('tele')
let Rname1 = "" 
// var a = this
Page({

    /**
     * 页面的初始数据
     */
    data: {
         haoma:''
    },
    addRname(event) {    
      console.log("电话：", event.detail.value)    //这里可以让我们在开发的时候在console控制台上看到我们的结果
      Rname1 = event.detail.value //这里的Rname1 也是需要在前面进行宏定义的格式为（ let Rname1 = "" ） ，然后给它赋值
       },
       submit: function (e) {    
        let that = this;    
         db.add({       //db之前宏定义的 在这里指数据库中的Room表； add指 插入
              data: {          // data 字段表示需新增的 JSON 数据       
               Rname: Rname1,    //将我们获取到的Rname1的value值给Room表中的Rname
                 },          
          success: function (res) {     
                      // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id       
                console.log("上传成功", res)        
                 }         
                       })        
          },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {
      // db.collection('tele').get({
      //   success(res) {
      //     console.log(res.data)
      //   }
      // })
    //   db.collection('feel').get({
    //     success: function(res) {
    //       // res.data 包含该记录的数据
    //       console.log(res.data)
    //     }
    //   })
    },
    
    resetSalaryBtnClick: function (e) {
        this.setData({
          haoma: "",
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