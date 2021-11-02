const express = require("express");
const app = express();

const port = 3000;

const { swaggerUi, specs } = require("./modules/swagger");

const usersRouter = require("./routes/member/users");
const boardRouter = require("./routes/board/posts");
const menuRouter = require("./routes/menu/navigation");

// app.use("/user", usersRouter);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));
app.use("/board", boardRouter);
app.use("/category", menuRouter);
app.listen(port, () => {
  console.log(`Server Start ${port}`);
});
