# 点餐微信小程序（简洁版）

## 功能
- 首页：参考提供 UI，顶部分类 + 轮播。
- 点单：左侧分类、右侧商品列表、一键加入购物车。
- 购物车：增减数量、自动计算总价。
- 结算：到店取/外送切换。
- 支付：接入 `wx.requestPayment`（示例为 mock 参数，实际需后端统一下单）。

## 支付接入说明
1. 小程序端调用后端接口（如 `/api/pay/unified-order`）。
2. 后端用商户号证书调用微信支付 JSAPI 下单，返回 `timeStamp/nonceStr/package/signType/paySign`。
3. 小程序调用 `wx.requestPayment` 拉起支付。

## 启动
用微信开发者工具打开本目录，选择 AppID（测试可用 `touristappid`）。
