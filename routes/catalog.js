const express = require("express");
const router = express.Router();

const data = require("../data/catalog.json");

/**
 * @description 카탈로그 상세정보 조회 API
 */
router.get("/:id", (req, res) => {
  res.send(data.catalogDetail);
});

/**
 * @description 카탈로그 내 구매옵션 별 상품리스트 조회
 */
router.get("/:catalogId/buycdt/:buycdtId/prodList", (req, res) => {
  res.send(data.prodList);
});

module.exports = router;
