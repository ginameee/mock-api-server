const express = require("express");
const app = express();

const _PORT = 3000;

/**
 * import routing modules
 */
const rTest = require("./routes/test");

/**
 * CORS 처리
 */
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
app.use('/test', rTest);

/**
 * server 실행
 */
app.listen(_PORT, function () {
  console.log("Example app listening on port 3000!");
});
