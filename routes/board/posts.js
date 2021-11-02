const express = require("express");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const testItem = [
      {
        id: "testId1",
        name: "testName1",
        subject: "Subject1",
        content: "content1",
      },
      {
        id: "testId2",
        name: "testName2",
        subject: "Subject2",
        content: "content2",
      },
      {
        id: "testId3",
        name: "testName3",
        subject: "Subject3",
        content: "content3",
      },
      {
        id: "testId4",
        name: "testName4",
        subject: "Subject4",
        content: "content4",
      },
      {
        id: "testId5",
        name: "testName5",
        subject: "Subject5",
        content: "content5",
      },
      {
        id: "testId6",
        name: "testName6",
        subject: "Subject6",
        content: "content6",
      },
      {
        id: "testId7",
        name: "testName7",
        subject: "Subject7",
        content: "content7",
      },
      {
        id: "testId8",
        name: "testName8",
        subject: "Subject8",
        content: "content8",
      },
      {
        id: "testId9",
        name: "testName9",
        subject: "Subject9",
        content: "content9",
      },
      {
        id: "testId10",
        name: "testName10",
        subject: "Subject10",
        content: "content10",
      },
    ];
    res.status(200).json(testItem);
  } catch (err) {}
});

module.exports = router;
