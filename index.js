const { default: axios } = require("axios");
const express = require("express");
const { client } = require("./redis-client");
const { getCache } = require("./cache.middleware");

const app = express();
const port = 5000;

const fetchPosts = async () => {
  const res = await axios.get(`https://jsonplaceholder.typicode.com/posts`);
  return res.data;
};

app.get("/posts", getCache, async (req, res) => {
  const posts = await fetchPosts();

  await client.set("posts", JSON.stringify(posts));
  res.json({ data: posts });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
