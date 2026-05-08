Page({
  data: { cart: [], total: 0 },
  onShow() {
    this.sync();
  },
  sync() {
    const app = getApp();
    const total = app.globalData.cart.reduce((s, i) => s + i.price * i.count, 0);
    this.setData({ cart: app.globalData.cart, total: total.toFixed(2) });
  },
  changeCount(e) {
    const { id, delta } = e.currentTarget.dataset;
    const app = getApp();
    const item = app.globalData.cart.find((c) => c.id === Number(id));
    if (!item) return;
    item.count += Number(delta);
    app.globalData.cart = app.globalData.cart.filter((c) => c.count > 0);
    this.sync();
  },
  checkout() {
    wx.navigateTo({ url: '/pages/checkout/checkout' });
  }
});
