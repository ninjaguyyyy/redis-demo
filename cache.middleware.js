const { client } = require("./redis-client");

exports.getCache = async (req, res, next) => {
  const cachedData = await client.get("posts");
  if (!cachedData) {
    return next();
  }

  res.json({ data: JSON.parse(cachedData) });
};
