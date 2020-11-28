// components/paging1/paging.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
        index: 0,
        article_List:[
          {
            title:'如何快速记住类别',
            Summary:'如何进行垃圾分类呀？阿巴阿巴，，，这里是文章摘要。。。看我看我在这里',
            url:'../../image/1.jpg'
          },
          {
            title:'有趣分类',
            Summary:'222',
            url:'../../image/2.jpeg'
          },
          {
            title:'想不出来',
            Summary:'333',
            url:'../../image/3.jpeg'
          }
        ]
  },
    
  /**
   * 组件的方法列表
   */
  methods: {
    changeTabbar(e){
      this.setData({ index: e.currentTarget.dataset.id})
    },
  },
})
