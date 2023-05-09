const { client } = require("../redis-client");

exports.addPlayer = async (playerId, score) => {
  await client.zAdd(`leaderboard`, [{ value: playerId, score }]);
};

exports.adjustScore = async (playerId, score) => {
  await client.zIncrBy(`leaderboard`, score, playerId);
};

exports.getTop2 = async () => {
  return await client.zRange(`leaderboard`, 0, 1, { REV: true });
};
