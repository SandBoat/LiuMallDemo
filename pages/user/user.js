var app = getApp();

Page({
  data: {
    userInfo: {},
    isLogin: false
  },
  onLoad: function() {
    let userInfo = wx.getStorageSync('userInfo');
    let isLogin = wx.getStorageSync('isLogin');

    if (userInfo && isLogin) {
      this.setData({
        userInfo: userInfo,
        isLogin: isLogin
      });
    } else {
      if (app.globalData.userInfo) {
        this.setData({
          userInfo: app.globalData.userInfo,
          isLogin: true
        });
      } else {
        console.log('获取用户信息失败');
      }
    }
    console.log(userInfo);
    console.log(isLogin);
  },
  getUserInfo: function(e) {
    console.log(e);
    if (e.detail.userInfo) {
      this.setData({
        userInfo: e.detail.userInfo,
        isLogin: true
      });
    }
  },
  goToPublish: function() {
    wx.navigateTo({
      url: '/pages/publish/publish',
    })
  }
})