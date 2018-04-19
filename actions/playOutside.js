module.exports = async context => {
  const { displayName } = context.session.user;

  // 設定為開團初始 state
  context.setState({
    onThePlay: true,
    playPerson: context.session.user,
    orders: [],
  });

  await context.replyText(`${displayName} 開團囉! 大家快來點!`);
};