Page({
  data: { total: '0.00', mode: 'pickup' },
  onShow() {
    const total = getApp().globalData.cart.reduce((s, i) => s + i.price * i.count, 0);
    this.setData({ total: total.toFixed(2) });
  },
  switchMode(e){ this.setData({ mode: e.currentTarget.dataset.mode }); },
  pay() {
    // 实战中先请求后端统一下单接口，拿到 payment 参数
    const mockPayParams = {
      timeStamp: `${Math.floor(Date.now() / 1000)}`,
      nonceStr: 'demoNonceStr',
      package: 'prepay_id=wx_demo_prepay_id',
      signType: 'RSA',
      paySign: 'demoSign'
    };

    wx.requestPayment({
      ...mockPayParams,
      success: () => {
        getApp().globalData.cart = [];
        wx.showToast({ title: '支付成功' });
        wx.switchTab({ url: '/pages/home/home' });
      },
      fail: () => {
        wx.showToast({ title: '支付取消/失败', icon: 'none' });
      }
    });
  }
});
