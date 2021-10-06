const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const testItem = [
      {
        id: "testId",
        name: "testName",
        subject: "ASDASD!@#!@#ASDASD",
        content: "ASDASDASDASDASDASDASd",
      },
    ];
    res.status(200).json(testItem);
  } catch (err) {}
});

module.exports = router;
