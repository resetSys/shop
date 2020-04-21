// pages/detial/detial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodObj:{
      swiper:[
        "//img12.360buyimg.com/n1/s450x450_jfs/t1/98413/32/12309/112653/5e4666b1E25536aa6/1d4801133582b3b8.jpg",
        "//img10.360buyimg.com/n1/s450x450_jfs/t30448/146/1576604874/195754/89249d83/5ce41458Nf0ee682c.jpg",
        "//img12.360buyimg.com/n1/s450x450_jfs/t28603/102/1236695962/227407/29d12d49/5ce41500N146e357e.jpg"],
      name:"荣耀20 李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 冰岛白 全面屏手机",
      detial:[
        "https://img.300hu.com/4c1f7a6atransbjngwcloud1oss/515f81f5183631675413561345/imageSampleSnapshot/1558517259_161474828.100_5937.jpg",
        "//img30.360buyimg.com/jgsq-productsoa/jfs/t1/100239/1/12575/35660/5e4b847cE43485a68/dde9d6cf33f04ae5.jpg",
        "http://img30.360buyimg.com/sku/jfs/t1/108060/33/3068/354630/5e0d9cefE2c02e2f7/a023efb8d04edf65.jpg",
        "http://img30.360buyimg.com/sku/jfs/t1/81521/25/2147/154007/5d0884c7E7e11e654/16e41d37619b3aae.jpg",
        "http://img30.360buyimg.com/sku/jfs/t1/67612/30/2259/276607/5d0884c7E8af821e9/5c4c0a02479797c4.jpg",
        "http://img30.360buyimg.com/sku/jfs/t1/60127/2/2140/282793/5d0884e4E3c9984c1/7d763804ee1d2d22.jpg",
        "http://img30.360buyimg.com/sku/jfs/t1/63196/17/2291/295143/5d0884e4Ee9a84621/ffeb2f82579174b3.jpg",
        "http://img30.360buyimg.com/sku/jfs/t1/56539/37/2690/291628/5d0884e4E869f08c0/3aed63c305bb1927.jpg"
      ],
      price:2089,
      id:1
    }
  },
  /**
  加入购物车功能：
  正常的应该是将所选商品的参数提交给后台，存储进个人数据库
  现在使用wx本地存储，将该商品存储在本地展示
  1、首先获取缓存中的数据
  2、判断该条商品数据是否存在，如果不存在则添加，存在则num+1
  
  */ 
  addCart(){
    let cart =  wx.getStorageSync('cart')||[];
    //查找当前商品是否在数组中
    let index = cart.findIndex((value,index) =>{
      return value.id === this.data.goodObj.id
    })
    if (index===-1) {
      //-1说明该数组中没有该商品对象
      this.data.goodObj.num = 1
      this.data.goodObj.checked = true
      cart.push(this.data.goodObj)
    } else {
      //否则说该数组中存在，那么就让这条数据的num++
      cart[index].num++
    }
    wx.setStorageSync('cart', cart);
    wx.showToast({
      title: '添加成功',
      duration: 1500,
      mask: true,
    });
      
      
     
  },
  /*
    图片预览功能
  */
  previewImg(e){
    // console.log('%c'+'图片预览','color:red;font-size:100px;')
    let urls = this.data.goodObj.swiper;
    let {index} = e.currentTarget.dataset
    wx.previewImage({
      current: urls[index],
      urls
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
})