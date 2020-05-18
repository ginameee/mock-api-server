const express = require("express");
const app = express();

const rCatalog = require("./routes/catalog");

app.all("/*", function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

/**
 * 환경변수 load
 */
require("dotenv").config();

/**
 * mount point 등록
 */
app.use(`/${process.env.API_VERSION}/catalog`, rCatalog);

/**
 * server 실행
 */
app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
