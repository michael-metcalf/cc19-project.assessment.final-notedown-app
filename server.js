const express = require("express");
const config = require("./knexfile")[environment];
const knex = require("knex")(config);
const app = express();
const PORT = 3000;

app.use(express.static("public"));

app.get("/*", (req, res) => {
  console.log("hello");
});

app.listen(PORT || 3000, () => {
  console.log(`🎉 Listening on PORT ${port}`);
})