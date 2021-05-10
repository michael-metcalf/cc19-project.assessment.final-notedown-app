const express = require("express");
const config = require("./knexfile")[process.env.NODE_ENV || "development"];
const app = express();
const knex = require("knex")(config);

app.use(express.json());
app.use(express.static("build"));

app.get("/*", (req, res) => {
  console.log("hello");
});

app.get("/api/notes", async (req, res) => {
  try {
  const response = await knex.select().table("notes");
  console.log(response);
  res.status(200);
  res.send(response);
  } catch (err) {
    console.error(err);
  }
});

const PORT = 3001;
app.listen(PORT || 3001, () => {
  console.log(`🎉 Listening on PORT ${PORT}`);
});