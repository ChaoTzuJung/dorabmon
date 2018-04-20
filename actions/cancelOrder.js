module.exports = async context => {
  const { userId, displayName } = context.session.user;

  // 檢查訂單裡面有沒有這個人點過的東西
  if (context.state.orders.some(obj => obj.userId === userId)) {
    // 取消就是把訂單裡面這個人的東西過濾掉
    context.setState({
      ...context.state,
      orders: context.state.orders.filter(order => order.userId !== userId),
    });
    await context.replyText(`${displayName} 幫你取消囉!`);
  } else {
    await context.replyText(
      `${displayName} 你沒點過無法取消，輸入「我要ooo」來下訂單`
    );
  }
};