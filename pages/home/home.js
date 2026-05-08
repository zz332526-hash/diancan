const { bannerList } = require('../../utils/mock');
Page({ data: { bannerList, tab: 0 }, switchTab(e){ this.setData({tab:e.currentTarget.dataset.i}); } });
