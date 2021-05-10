const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("public"));

app.get("/*", (req, res) => {
  console.log("hello");
});

app.listen(port || 3000, () => {
  console.log(`🎉 Listening on port ${port}`);
})