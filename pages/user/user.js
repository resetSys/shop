// pages/user/user.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:null
  },
  getUserInfo(e){
    this.setData({
      userInfo:e.detail.userInfo
    })
    console.log(e)
  }
})