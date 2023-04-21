const { client } = require("../redis-client");
const randomString = require("randomstring");

exports.login = async () => {
  // todo: check username password is valid
  // todo: get userId from username
  // demo zone ----
  // ------
  // todo: return for client or save in cookie
};

const randomInteger = (from, to) => {
  return Math.floor(Math.random() * (to - from + 1) + from);
};
