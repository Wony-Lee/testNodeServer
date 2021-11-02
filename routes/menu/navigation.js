const express = require("express");
const router = express.Router();

router.get("/navigation", async (req, res, next) => {
  try {
    const navigation = [
      {
        categoryNum: 1,
        categoryName: "Menu1",
      },
      {
        categoryNum: 2,
        categoryName: "Menu2",
      },
      {
        categoryNum: 3,
        categoryName: "Menu3",
      },
      {
        categoryNum: 4,
        categoryName: "Menu4",
      },
      {
        categoryNum: 5,
        categoryName: "Menu5",
      },
    ];
    res.status(200).json(navigation);
    console.log("==> nav", navigation);
  } catch (err) {
    console.error("API CALL FAILURE", err);
  }
});

router.get("/sideNavigation", async (req, res, next) => {
  try {
    const sideNavigation = [
      {
        categoryNum: 1,
        categoryName: "Side1",
      },
      {
        categoryNum: 2,
        categoryName: "Side2",
      },
      {
        categoryNum: 3,
        categoryName: "Side3",
      },
      {
        categoryNum: 4,
        categoryName: "Side4",
      },
      {
        categoryNum: 5,
        categoryName: "Side5",
      },
    ];

    res.status(200).json(sideNavigation);
    console.log("side Menu", sideNavigation);
  } catch (err) {
    console.error("API CALL FAILURE", err);
  }
});

module.exports = router;
