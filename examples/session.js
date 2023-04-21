const { client } = require("../redis-client");
const randomString = require("randomstring");

exports.login = async () => {
  // todo: check username password is valid
  // todo: get userId from username

  const userId = randomInteger(1, 100);
  const sessionId = randomString.generate();
  await client.set(`session:user#${userId}`, sessionId, {
    EX: 30,
  });

  // todo: return for client or save in cookie
};

const randomInteger = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};
