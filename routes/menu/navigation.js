const express = require("express");
const router = express.Router();

router.get("/navigation", async (req, res, next) => {
  try {
    const navigation = [];
    for (let i = 0; i < 10; i++) {
      const defaultItem = {
        categoryNum: `${i}`,
        categoryName: `Menu${i}`,
      };
      navigation.push(defaultItem);
    }
    res.status(200).json(navigation);
    console.log("==> nav", navigation);
  } catch (err) {
    console.error("API CALL FAILURE", err);
  }
});

router.get("/sideNavigation", async (req, res, next) => {
  try {
    const sideNavigation = [];
    for (let i = 0; i < 10; i++) {
      const defaultItem = {
        categoryNum: `${i}`,
        categoryName: `Side${i}`,
      };
      sideNavigation.push(defaultItem);
    }

    res.status(200).json(sideNavigation);
    console.log("side Menu", sideNavigation);
  } catch (err) {
    console.error("API CALL FAILURE", err);
  }
});

module.exports = router;
