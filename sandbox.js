const { client } = require("./redis-client");
const { login } = require("./examples/session");
const {
  addToCart,
  removeProductFromCart,
  decreaseProductQuantity,
  getCartSize,
  increaseProductQuantity,
} = require("./examples/shopping-cart");
const { addPlayer, adjustScore, getTop2 } = require("./examples/leaderboard");

const run = async () => {
  // SESSION ---------
  // await login();

  // SHOPPING CART --------
  // await addToCart("p1", 1);
  // await removeProductFromCart("p1");
  // await increaseProductQuantity("p2");
  // await decreaseProductQuantity("p1");
  // await getCartSize();

  // LEADERBOARD
  // await addPlayer("player1", 5);
  // await addPlayer("player2", 3);
  // await addPlayer("player3", 8);

  // await adjustScore("player1", 2);
  // await adjustScore("player3", -14);

  const top2 = await getTop2();
  console.log("🚀 ~ file: sandbox.js:32 ~ run ~ top2:", top2);
  console.log("Finish");
};

run();
