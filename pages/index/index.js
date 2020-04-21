import { request } from "../../request/index.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiperList:[{
      url:"//gw.alicdn.com/imgextra/i1/980637/O1CN01Zdq3CG1GZmsUfwchh_!!980637-0-lubanu.jpg",
      id:1
    },{
      url:"https://aecpm.alicdn.com/simba/img/TB1CWf9KpXXXXbuXpXXSutbFXXX.jpg_q50.jpg",
      id:2
    },{
      url:"https://aecpm.alicdn.com/simba/img/TB14ab1KpXXXXclXFXXSutbFXXX.jpg_q50.jpg",
      id:3
    }],
    recommList:[{
      url:"https://gw.alicdn.com/tfs/TB1LvIxVAvoK1RjSZFDXXXY3pXa-183-144.png?getAvatar=1",
      name:"今日爆款"
    },{
      url:"https://gw.alicdn.com/tfs/TB19uWKXkCy2eVjSZPfXXbdgpXa-183-144.png?getAvatar=1",
      name:"国际好货"
    },{
      url:"https://gw.alicdn.com/tfs/TB1O_AyVwHqK1RjSZFPXXcwapXa-183-144.png?getAvatar=1",
      name:"机票酒店"
    },{
      url:"https://gw.alicdn.com/tfs/TB1llI3f4n1gK0jSZKPXXXvUXXa-183-144.png?getAvatar=1",
      name:"充值中心"
    },],
    floorList:[{
      title:"儒雅品茶",
      url:"//img.alicdn.com/imgextra/i2/6000000001761/TB2v6eYX8USMeJjy1zjXXc0dXXa_!!0-tbCommonAudio.jpg_320x320q90.jpg_.webp",
      children:[{
        url:"//img.alicdn.com/bao/uploaded/i2/3171559893/TB2oCI4pYlmpuFjSZFlXXbdQXXa_!!3171559893.jpg_170x170q90.jpg_.webp"
      },{
        url:"//img.alicdn.com/bao/uploaded/i1/3171559893/TB2AAtla2kmyKJjSZFmXXX1EFXa_!!3171559893.jpg_170x170q90.jpg_.webp"
      }]
    },{
      title:"爱鞋人",
      url:"//img.alicdn.com/bao/uploaded/i1/TB1JePFKFXXXXaYXVXXXXXXXXXX_!!0-item_pic.jpg_350x350q90.jpg_.webp",
      children:[{
        url:"//img.alicdn.com/bao/uploaded/i1/87948303/TB2TuwztFXXXXXeXXXXXXXXXXXX_!!87948303.jpg_170x170q90.jpg_.webp"
      },{
        url:"//img.alicdn.com/bao/uploaded/i3/TB1ZQNZLXXXXXaXXXXXXXXXXXXX_!!0-item_pic.jpg_170x170q90.jpg_.webp"
      }]
     },{
      title:"vivienn",
      url:"//img.alicdn.com/tfscom/i2/84755152/TB2BUbueMMPMeJjy1XcXXXpppXa_!!0-dgshop.jpg_320x320q90.jpg_.webp",
      children:[{
        url:"//img.alicdn.com/bao/uploaded/i4/84755152/TB2p88VX2xNTKJjy0FjXXX6yVXa_!!84755152.jpg_170x170q90.jpg_.webp"
      },{
        url:"//img.alicdn.com/bao/uploaded/i3/84755152/TB2sWt0eHsTMeJjy1zcXXXAgXXa_!!84755152.jpg_170x170q90.jpg_.webp"
      }]
     }]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //发送网络请求
    // var reqTask = wx.request({
    //   url: 'http://jsonplaceholder.typicode.com/users',
    //   success: (result) => {
    //     console.log(result)
    //   },
    //   fail: () => {},
    //   complete: () => {}
    // });
    // request({
    //   url:"http://jsonplaceholder.typicode.com/users",
    // }).then((result) => {
    //   console.log(result)
    // }).catch((err) => {
    //   console.log(err)
    // });
      
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