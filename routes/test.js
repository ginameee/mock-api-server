const express = require("express");
const router = express.Router();

const data = require("../data/test.json");

/**
 * @description 테스트 데이터 조회 API
 */
router.get("/", (req, res) => {
  res.send(data.users);
});

module.exports = router;
