//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    sportList:[1,2,3],
    commentaryTypeArray: [
        {
            "type": "人气",
            "isSelect": true
        },
        {
            "type": "命中率",
            "isSelect": false
        },
        {
            "type": "带红人数",
            "isSelect": false
        }
    ]
  }
})
