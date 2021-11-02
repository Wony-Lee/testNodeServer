const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const testItem = [];
    for (let i = 0; i < 50; i++) {
      const defaultItem = {
        id: `testId${i}`,
        name: `testName${i}`,
        subject: `Subject${i}`,
        content: `content${i}`,
      };
      testItem.push(defaultItem);
    }
    res.status(200).json(testItem);
  } catch (err) {
    console.error("API CALL FAILURE", testItem);
  }
});

module.exports = router;
