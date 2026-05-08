const { categories, drinks } = require('../../utils/mock');

Page({
  data: {
    mode: 'pickup',
    categories,
    activeCategory: 0,
    drinks,
    cartCount: 0
  },
  onShow() {
    const app = getApp();
    this.setData({ cartCount: app.globalData.cart.reduce((a, b) => a + b.count, 0) });
  },
  switchMode(e) {
    this.setData({ mode: e.currentTarget.dataset.mode });
  },
  selectCategory(e) {
    this.setData({ activeCategory: e.currentTarget.dataset.idx });
  },
  addToCart(e) {
    const id = Number(e.currentTarget.dataset.id);
    const app = getApp();
    const item = drinks.find((d) => d.id === id);
    const inCart = app.globalData.cart.find((c) => c.id === id);
    if (inCart) inCart.count += 1;
    else app.globalData.cart.push({ ...item, count: 1 });
    const cartCount = app.globalData.cart.reduce((a, b) => a + b.count, 0);
    this.setData({ cartCount });
    wx.showToast({ title: '已加入购物车', icon: 'success' });
  },
  goCart() {
    wx.navigateTo({ url: '/pages/cart/cart' });
  }
});
