// pages/category/category.js
import { request } from "../../request/index.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // contentList:[{
    //   title:"海尔十字对开变频静音节能电冰箱",
    //   url:"//img.alicdn.com/img/i2/18307420/O1CN01qXqIQr24gPOUpse9q_!!0-saturn_solar.jpg_210x210.jpg",
    //   price:"4399"
    // },{
    //   title:"奥克斯8KG全自动洗衣机大容量家用波轮小型7.2KG迷你宿舍热烘干",
    //   url:"//gw3.alicdn.com/bao/uploaded/i3/2762954254/O1CN01M0JYVf1hINRsXgiqZ_!!2762954254.jpg_210x210.jpg",
    //   price:"388"
    // },{
    //   title:"节能迷你电小冰箱学生宿舍冰箱家用租房用双开门二人世界小型三门",
    //   url:"//gw2.alicdn.com/bao/uploaded/i4/1849576336/O1CN01fR78JC1wfw3YpkIXr_!!0-item_pic.jpg_210x210.jpg",
    //   price:"358"
    // },{
    //   title:"美的变频滚筒洗衣机全自动家用10公斤kg 洗烘干一体 MD100VT13DS5",
    //   url:"//gw3.alicdn.com/bao/uploaded/i4/201749140/O1CN01bSjErM2HOAcuOl7xj_!!2-item_pic.png_210x210.jpg",
    //   price:"3099"
    // }],
    list:[{
      title:"手机",
      arr:[{
        id:1,
        title:"iphone",
        url:"//img30.360buyimg.com/popshop/jfs/t2989/240/151377693/3895/30ad9044/574d36dbN262ef26d.jpg"
      },{
        id:2,
        title:"华为",
        url:"//img30.360buyimg.com/popshop/jfs/t1/21713/1/5027/5175/5c38740eE4ccfc381/0bedaba1e05119ac.jpg"
      },{
        id:3,
        title:"三星",
        url:"//img20.360buyimg.com/popshop/jfs/t1/1534/38/9873/3556/5bc93df2E73c40121/74dc92d16e483509.jpg"
      },{
        id:4,
        title:"小米",
        url:"//img30.360buyimg.com/popshop/jfs/t1/906/28/10166/2645/5bc93b63Eb0813c2e/600c61f344607414.jpg"
      },{
        id:5,
        title:"oppo",
        url:"//img20.360buyimg.com/popshop/jfs/t1/22465/2/10288/3283/5c860ac9E1bbb5da9/33ffbca794e7b965.jpg"
      },{
        id:6,
        title:"vivo",
        url:"//img30.360buyimg.com/popshop/jfs/t1/29511/37/10225/4458/5c860fb4E13b3c8bb/38a9e351637f92f9.jpg"
      }]
    },{
      title:"电脑",
      arr:[{
        id:7,
        url:"//img20.360buyimg.com/popshop/jfs/t1/39319/25/14135/4558/5d53c0a2Ecd997022/0bd617ba98192ae2.jpg",
        title:"ThinkPad"
      }]
    },{
      title:"男鞋",
      arr:[{
        id:13,
        url:"//img30.360buyimg.com/popshop/jfs/t3970/136/1954629915/17703/1480672/589d2c8aN0d1fe536.jpg",
        title:"爱步"
      }]
    },{
      title:"家具",
      arr:[{
        id:19,
        url:"//img20.360buyimg.com/popshop/jfs/t2656/177/1704670563/5479/35c1e7e/5746e1a4N70241f8d.jpg",
        title:"芝华仕"
      }]
    },{
      title:"男装",
      arr:[{
        id:25,
        url:"//img30.360buyimg.com/popshop/jfs/t2233/334/2884910075/4230/d9d143bb/56f23ce6N7c49b792.jpg",
        title:"Jeep"
      },{
        id:26,
        url:"//img20.360buyimg.com/popshop/jfs/t2779/168/2403554303/2768/18c7ffea/57639d32N51eebaba.jpg",
        title:"花花公子"
      },{
        id:27,
        url:"//img20.360buyimg.com/popshop/jfs/t9472/20/937088741/4419/d9d55ad6/59b24826Na9915239.jpg",
        title:"七匹狼"
      },{
        id:28,
        url:"//img20.360buyimg.com/popshop/jfs/t3811/183/3636249418/4810/76721cb3/589d2f7eNb40a6d5a.jpg",
        title:"富贵鸟"
      },{
        id:29,
        url:"//img30.360buyimg.com/popshop/jfs/t10009/355/1380959545/3411/3181a106/59e06befNcc3a4680.jpg",
        title:"卡宾"
      },{
        id:30,
        url:"//img20.360buyimg.com/popshop/jfs/t15223/362/1678435154/3329/b595a13a/5a55b04fN0ec41966.jpg",
        title:"南极人"
      },]
    },],
    // content:null,
    currIndex:0,
    scrollTop:0,//设置scroll-view位置
  },
  navHandel(event){
    // console.log(event)
    let {index} = event.currentTarget.dataset;
    this.setData({
      currIndex:index,
      // 设置scroll-view的scroll-top属性
      scrollTop:0
    })
  },
  getData(){
    request({
      url:"http://jsonplaceholder.typicode.com/users"
    }).then(res => {
      console.log(res)
      this.setData({
        content:res.data
      })
      //将数据存储
      wx.setStorageSync("content",{time:Date.now(),data:res.data})
    }).catch(e =>{
      console.log(e)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    /**
      利用缓存解决数据重复加载的问题
    */
    // let storage = wx.getStorageSync('content');
    // if (!storage) {
    //   //需要重新请求
    //   // this.getData();
    // } else {
    //   //说明存在数据
    //   console.log(storage)
    //   //判断数据是否过期，如果过期也需要重新获取
    //   if (Date.now()-storage.time > 10000) {
    //     this.getData();
    //   } else {
    //     console.log("可以使用旧的数据")
    //     this.setData({
    //       content:storage.data
    //     })
    //   }
    // }
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