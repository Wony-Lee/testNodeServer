const express = require("express");
const app = express();

const port = 3000;

const { swaggerUi, specs } = require("./modules/swagger");

const usersRouter = require("./routes/member/users");
const boardRouter = require("./routes/board/posts");

// app.use("/user", usersRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/board", boardRouter);
app.listen(port, () => {
  console.log(`Server Start ${port}`);
});
