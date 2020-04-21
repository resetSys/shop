// components/Tab/Tab.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    goodsList:{
      type:Object,
      default:{title:[],content:[]}
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    currIndex:0

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleItem(e){
      this.setData({
        currIndex:e.currentTarget.dataset.index
      });
      this.triggerEvent("sort",{id:e.currentTarget.dataset.index})
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
    }
  }
})
