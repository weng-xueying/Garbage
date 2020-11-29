// components/ten/ten.js
Component({
  /**
   * 组件的属性列表
   */

  //父组件给子组件传值
  properties: {
    title:{
      type:String,
      value: 'title',
    },
    num:{
      type:Number,
      value: 1,
    },
    answer:{
      type:Number,
      value:-1,
    }
  },
  /**
   * 页面的初始数据
   */
  data: {
    // ten_title:this.properties.title,
    setbtn:{},
    num:{},
    btn_num:{},
    numb:0,
    disabled:false,
    btn:['可回收垃圾','有害垃圾','厨余垃圾','其他垃圾'],
  },
  /**
   * 组件的方法列表
   */
  methods: {
    click:function(res){
      this.setData({
        //btn_num是button的id
        btn_num: res.target.dataset.current,
        numb: this.data.numb+1,
        disabled: true,
      });
      if(this.data.answer == this.data.btn_num){
        wx.showToast({
          title: '回答正确',
          duration: 2000//持续的时间
        })
      }
      else{
        wx.showToast({
          icon: "none",
          title:'答案错误,'+this.data.title+"是"+this.data.btn[this.data.answer],
          duration: 2000//持续的时间
        })
      }
      // 给父组件传值，需要在父组件的wxml绑定add（bindadd="父组件对应的方法名"）,mess是传的值
      this.triggerEvent('add',{mess: true})
    },
  },
})