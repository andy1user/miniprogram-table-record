// pages/table/table.js
function deepCopy(s){
  var d = []
  for(var i in s){
    d[i] = s[i]  
  } 
  return d
}

var pagesize = 8
const col1 = ['打印机','笔记本','台式机','','','','','']
const col2 = ['10','2','5','','','','','']
var col3 = deepCopy(col2)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    ab: 'table',
    // tableColumns:['A','B','C'],
    tableColumns:[{
        title: "名称",
        key: "name",
    }, {
        title: "储备数量",
        key: "num",
    }, {
        title: "剩余数量",
        key: "rest",
    }, {
        title: "其他",
        key: "qita",
    }, {
        title: "其他2",
        key: "qita2",
    }],
    dataList:[{
      id:'1',name:col1[0],num:col2[0],rest:col3[0]
    },{
      id:'2',name:col1[1],num:col2[1],rest:col3[1]
    },{
      id:'3',name:col1[2],num:col2[2],rest:col3[2]
    },{
      id:'4',name:col1[3],num:col2[3],rest:col3[3]
    },{
      id:'5',name:col1[4],num:col2[4],rest:col3[4]
    },{
      id:'6',name:col1[5],num:col2[5],rest:col3[5]
    },{
      id:'7',name:col1[6],num:col2[6],rest:col3[6]
    },{
      id:'8',name:col1[7],num:col2[7],rest:col3[7]
    }],
    getListLoading:false,
    dialogShow: false,
    buttons: [{text: '确定'}]
  },
  handleClickItem(){

  },
  tapButton(e){
    console.log(e)
    for(var i=0;i<col3.length;i++){
      if(col3[i]>0)
        col3[i]--
      else
        this.setData({
          dialogShow: true
        })
    }
    // for(var i=0;i<col3.length;i++)
    // {
    //   console.log(col3[i])
    //   console.log(col2[i])
    // }

    // console.log(this.data.dataList[0].rest)
    // console.log(this.data.dataList.length)
    
    for(var i=0;i<this.data.dataList.length;i++){
      console.log(i)
      console.log(this.data.dataList[i].rest)
      this.setData({
        //``表示路径，关于this.setData的详细解释https://blog.csdn.net/lezeqe/article/details/115903167
        [`dataList[${i}].rest`]: col3[i]  
      })
    }
  },
  tapDialogButton(e) {
    this.setData({
        dialogShow: false
    })
},
  handleClickInitCheck() {
    this.setData({
        initSelectKeys: [2, 4, 15]
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      ab: "biao"
    })
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