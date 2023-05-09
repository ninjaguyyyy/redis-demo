const { client } = require("../redis-client");

exports.addToCart = async (productId, quantity) => {
  await client.hSet(`cart:user#1`, productId, quantity);
};

exports.removeProductFromCart = async (productId) => {
  await client.hDel(`cart:user#1`, productId);
};

exports.increaseProductQuantity = async (productId) => {
  await client.hIncrBy(`cart:user#1`, productId, 1);
};

exports.decreaseProductQuantity = async (productId) => {
  await client.hIncrBy(`cart:user#1`, productId, -1);
};

exports.getCartSize = async () => {};
