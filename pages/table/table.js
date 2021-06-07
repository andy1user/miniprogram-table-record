// pages/table/table.js
function deepCopy(s){
  var d = []
  for(var i in s){
    d[i] = s[i]  
  } 
  return d
}

var app = getApp()

var pagesize = 3  //需要显示的数据的行数
const col1 = ['打印机','笔记本','台式机']
const col2 = ['10','2','5']
var col3 = deepCopy(col2)
app.globalData.rest = col3
console.log(app.globalData.rest)

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
    dataList: [],
    select:false,
    getListLoading:false,
    dialogShow: false,
    buttons: [{text: '确定'}],
    selectKeys: [],
    // list: [{
    //   text: "附件",
    // },{
    //   text: "申请",
    // }]
  },
  getList(l1,l2,l3){
    var content = []
    for(var i=0;i<pagesize;i++){
      content[i]={name:l1[i], num:l2[i], rest:l3[i]}
    }
    return content
  },
  handleClickItem(e){
    console.log(e);
    const { index, item } = e.detail.value;
    wx.showToast({
        title: `点击第${index + 1}行`
    });
  },
  tapButton(e){
    console.log('tapButton')
    console.log(e)
    // 剩余数量减一
    // for(var i=0;i<col3.length;i++){
    //   if(col3[i]>0)
    //     col3[i]--
    //   else
    //     this.setData({
    //       dialogShow: true
    //     })
    // }    
    //剩余数量显示
    // for(var i=0;i<this.data.dataList.length;i++){
    //   console.log(i)
    //   console.log(this.data.dataList[i].rest)
    //   this.setData({
    //     //``表示路径，关于this.setData的详细解释https://blog.csdn.net/lezeqe/article/details/115903167
    //     [`dataList[${i}].rest`]: col3[i]  
    //   })
    // }
    this.setData({
      select: true
    })
  },
  tapDialogButton(e) {
    this.setData({
        dialogShow: false
    })
  },
  //确定勾选数据
  handleClickConfirm(e){
    console.log('handleClickConfirm');
    console.log(e);
    this.setData({
      select:false
  });
    app.globalData.rowKeys = this.data.select;
  },
  handleClickInitCheck() {
    this.setData({
        selectKeys: []
    });
  },
  //点击勾选
  handleCheckTable(e) {
    console.log('handleCheckTable');
    console.log(e);
    this.data.selectKeys = e.detail.value;
  },
  // tabChange(e) {
  //   console.log('tab change', e)
  // },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {
    this.setData({
      ab: "biao",
      dataList: this.getList(col1,col2,col2)
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
    console.log(app.globalData.rest,col3,col2)
    col3 = app.globalData.rest
    this.setData({
      // dataList: this.getList(col1,col2,app.globalData.res) //直接使用全局变量会报错
      dataList: this.getList(col1,col2,col3)
    })
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