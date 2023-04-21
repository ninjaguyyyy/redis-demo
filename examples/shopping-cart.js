const { client } = require("../redis-client");

exports.addToCart = async (productId, quantity) => {};

exports.removeProductFromCart = async (productId) => {};

exports.increaseProductQuantity = async (productId) => {};

exports.decreaseProductQuantity = async (productId) => {};

exports.getCartSize = async () => {};
