// components/paging/paging.js
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
            title:'「史上最难垃圾分类」',
            Summary:'看了网友们发来的垃圾分类，我瑟瑟发抖...果然是人到中年，就很难适应剧烈的变化！',
            url:'../../image/1.png'
          },
          {
            title:'有趣分类',
            Summary:'222',
            url:'../../image/2.png'
          },
          {
            title:'想不出来',
            Summary:'333',
            url:'../../image/3.png'
          }
        ]
  },
    
  /**
   * 组件的方法列表
   */
  methods: {
    // changeTabbar(e){
    //   this.setData({ index: e.currentTarget.dataset.id})
    // },
  },
})
