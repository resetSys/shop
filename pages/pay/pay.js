// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    address:'',
    shopList:[],
    allCount:null,
    total:null
  },
  onLoad:function (){
    this.getGoodsList()
  },
  getLocation(){
     new Promise((resolve,reject) =>{
      //获取权限信息
      wx.getSetting({
        success: (result) => {
          resolve(result)
        }
      });
    }).then(result1 =>{
      // console.log(result1)
      if (result1.authSetting['scope.address'] === false) {
        wx.openSetting({
          success: (result) => {

          }
        });
      }
      wx.chooseAddress({
        success: (result) => {
          // console.log(result)
          //将地址信息存入缓存中
          result.addressInfo = result.provinceName+result.cityName+result.countyName+result.detailInfo;
          wx.setStorageSync('address', result);
          this.setData({
            address:result
          })
        },
      });
    })
  },
  getGoodsList(){
    let shopList = wx.getStorageSync('cart');
    let newList = shopList.filter(v =>{
      return v.checked
    })
    let [allCount,total] = [0,0]
    newList.forEach((v,i,a) => {
      allCount += v.num
      total += v.num*v.price
    });
    // console.log(allCount,allCount)
    this.setData({
      shopList:newList,
      allCount,total
    })
  },

})