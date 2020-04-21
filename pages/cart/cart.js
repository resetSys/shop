// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    shopList:[],
    totalize:0,
    allCount:0,
    checkedAll:false,
  },
  setStorage(shopList){
    let checkedAll = shopList.every((value) =>{
      return value.checked === true
    })
    if (shopList.length == 0) {
      checkedAll = false
    }
    this.setData({
      shopList,
      checkedAll
    })
    wx.setStorageSync('cart',shopList)
    this.totalize()
  },
  changeCheck(e){//商品是否选中
    let shopList = this.data.shopList
    let {currindex} = e.currentTarget.dataset
    shopList[currindex].checked = !shopList[currindex].checked 
    this.setStorage(shopList)
  },
  changeNum(e){
    let shopList = this.data.shopList
    let {num,currindex} = e.currentTarget.dataset
    shopList[currindex].num += num
    shopList[currindex].num = shopList[currindex].num >= 1 ? shopList[currindex].num:1
    this.setStorage(shopList)
  },
  totalize(){
    let {shopList} = this.data
    let totalize = 0
    let allCount = 0
    shopList.forEach(v => {
      if (v.checked) {
        totalize += v.num*v.price
        allCount += v.num
      }
    });
    this.setData({
      allCount,
      totalize
    })
  },
  checkedAll(){
    let {shopList,checkedAll} = this.data
    checkedAll = !checkedAll
    shopList.forEach(v => {
      v.checked = checkedAll
    });
    this.setStorage(shopList)
  },
  delete(){
    let {shopList} = this.data
    let newArr = shopList.filter((v,i) =>{
      return !v.checked === true
    })
    this.setStorage(newArr)
  },
  navigator(){
    let {allCount} = this.data
    if (allCount !== 0) {
      wx.navigateTo({
        url: '../pay/pay',
        success: function(res) {
         
        }
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.setStorage()
  },
  onShow: function () {
    let address = wx.getStorageSync('address');
    let shopList = wx.getStorageSync('cart')
    let checkedAll = false;
    if (shopList.length != 0) {
      checkedAll = shopList.every((value) =>{
        return value.checked === true
      })
    }
    this.setData({
      shopList,
      address,
      checkedAll
    })
    this.totalize()
    //判断是否全选
    // console.log(shopList)
  }
})