const { LineHandler } = require('bottender');

const playOutside = require('./actions/playOutside');
const timesUp = require('./actions/timesUp');
const statisticAll = require('./actions/statisticAll');
const cancelOrder = require('./actions/cancelOrder');
const orderGoods = require('./actions/orderGoods');

// 沒開團的狀態下，輸入「開團」可以開團
const noneHandler = new LineHandler().onText('開團', playOutside).build();

// 已開團的狀態下，有四種指令可以用
const ingHandler = new LineHandler()
  .onText('截止', timesUp)
  .onText('統計', statisticAll)
  .onText('取消', cancelOrder)
  .onText(/^我也?要(.*)/, orderGoods)
  .build();

// 按照 state 決定現在的狀態要用哪個子 handler
module.exports = new LineHandler()
  .on(context => !context.state.onThePlay, noneHandler)
  .on(context => context.state.onThePlay, ingHandler)
  .build();