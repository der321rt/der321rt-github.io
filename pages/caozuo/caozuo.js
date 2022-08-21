// pages/caozuo/caozuo.js
Page({

    /**
     * 页面的初始数据
     */
    data: {
        menuitems: [
            { 
                text: '如何添加目标/习惯?', 
                url: '#', 
                icon: '/images/tubiao/user/日历.png', 
                tips: '', 
                arrows: '/images/tubiao/user/箭头.png',
                num1:'num2'
            },
            { 
                text: '目标提醒的机制是怎样的？', 
                url: '#', 
                icon: '/images/tubiao/user/操作日志.png', 
                tips: '', 
                arrows: '/images/tubiao/user/箭头.png' ,
                num1:'num3'},
            { 
                text: '如何删除目标/习惯或者分组的显示顺序', 
                url: '#', 
                icon: '/images/tubiao/user/隐私协议.png', 
                tips: '',
                arrows: '/images/tubiao/user/箭头.png' ,
                num1:'num4'
            },
            { 
                text: '可以修改目标/习惯的内容吗？', 
                url: '#', 
                icon: '/images/tubiao/user/建议.png', 
                tips: '', 
                arrows: '/images/tubiao/user/箭头.png' ,
                num1:'num5'
            },
            { 
                text: '如何添加目标/习惯?', 
                url: '#', 
                icon: '/images/tubiao/user/日历.png', 
                tips: '', 
                arrows: '/images/tubiao/user/箭头.png',
                num1:'num6'
            },
            { 
                text: '目标提醒的机制是怎样的？', 
                url: '#', 
                icon: '/images/tubiao/user/操作日志.png', 
                tips: '', 
                arrows: '/images/tubiao/user/箭头.png' ,
                num1:'num7'
            },
            { 
                text: '如何删除目标/习惯或者分组的显示顺序', 
                url: '#', 
                icon: '/images/tubiao/user/隐私协议.png', 
                tips: '', 
                arrows: '/images/tubiao/user/箭头.png' ,
                num1:'num8'
            },
            { 
                text: '可以修改目标/习惯的内容吗？', 
                url: '#', 
                icon: '/images/tubiao/user/建议.png', 
                tips: '', 
                arrows: '/images/tubiao/user/箭头.png' ,
                num1:'num9'
            },
            { 
                text: '如何删除目标/习惯或者分组的显示顺序', 
                url: '#', 
                icon: '/images/tubiao/user/隐私协议.png', 
                tips: '', 
                arrows: '/images/tubiao/user/箭头.png' ,
                num1:'num10'
            }
          ]
    },
    num1: function (options) {
        wx.navigateTo({
              url: '/pages/tiwen/tiwen',//要跳转到的页面路径
     })  
     },

    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function (options) {

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