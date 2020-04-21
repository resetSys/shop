// pages/goods_detial/goods_detial.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:null,
    goodsList:{
      title:["综合","价格","销量"],
      content:[{
        url:"//img12.360buyimg.com/n7/jfs/t1/98413/32/12309/112653/5e4666b1E25536aa6/1d4801133582b3b8.jpg",
        title:"荣耀20 李现同款 4800万超广角AI四摄 3200W美颜自拍 麒麟Kirin980全网通版8GB+128GB 幻夜黑 全面屏手机",
        price:2099,
        sales:100,
        normal:20
      },{
        url:"//img10.360buyimg.com/n7/jfs/t1/103237/7/12427/130369/5e4a95c7E45b3da86/d7fadd41ab329a52.jpg",
        title:"荣耀20S 李现同款 3200万人像超级夜景 4800万超广角AI三摄 麒麟810 全网通版6GB+128GB 蝶羽蓝",
        price:1499,
        sales:50,
        normal:9
      },{
        url:"//img14.360buyimg.com/n7/jfs/t1/104564/16/12582/143059/5e4d1e57Ea359ee5e/048aa33e62ae72c7.jpg",
        title:" HUAWEI Mate 30 5G 麒麟990 4000万超感光徕卡影像双超级快充8GB+128GB亮黑色5G全网通游戏手机",
        price:4999,
        sales:60,
        normal:3
      },{
        url:"//img12.360buyimg.com/n7/jfs/t1/103980/26/12527/248017/5e4a6b2bEde93b893/af9f1eb0617ce599.jpg",
        title:"2.19-2.23iPhone暖春特惠，领券立减200元，更可享iPhone全系列白条12期免息，iPhoneXsMax领券立减500元！",
        price:5999,
        sales:60,
        normal:3
      },{
        url:"//img14.360buyimg.com/n7/jfs/t1/105933/22/12289/323533/5e476fb8E0c9e3ab2/d9eddae31cffc084.jpg",
        title:" XS Max (A2104) 256GB 金色 移动联通电信4G手机 双卡双待领券立减500元！领券立减500元！",
        price:4999,
        sales:60,
        normal:3
      },{
        url:"//img13.360buyimg.com/n7/jfs/t1/103037/8/12492/270385/5e4a6da3E9743ec5c/97e65593cf1ab35d.jpg",
        title:" 11 Pro Max (A2220) 256GB 暗夜绿色  移动联通电信4G手机 双卡双待 领券立减500元！",
        price:10999,
        sales:60,
        normal:3
      }]
    },
    currIndex:0
  },

  sort(e){
    let id = e.detail.id
    // console.log(e)
    //价格排序
    let temp;
    let arr = this.data.goodsList.content
    if (id == 1) {
      for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1;j++){
          if(arr[j].price > arr[j+1].price){
            temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
          }
        }
      }
    } else if(id == 2) {
      for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1;j++){
          if(arr[j].sales > arr[j+1].sales){
            temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
          }
        }
      }
    } else {
      for(var i=0;i<arr.length-1;i++){
        for(var j=0;j<arr.length-1;j++){
          if(arr[j].normal > arr[j+1].normal){
            temp = arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
          }
        }
      }
    }
  },
  handleItem(e){
    this.setData({
      currIndex:e.currentTarget.dataset.index
    });
  },
  loadMore(){//下拉加载更多
    // console.log("到底了");
    wx.showToast({
      title: '已经到底了',
      icon: 'none',
      image: '',
      duration: 1500,
      mask: false,
      success: (result) => {
        
      },
      fail: () => {},
      complete: () => {}
    });
      
    // 给父元素传递一个加载更多的时间
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    //请求页面的数据
  },
})