require("dotenv").config();
const express = require("express");
const apiRouter = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.use("/api", apiRouter);

app.get("/", (req, res) => {
  res.json({
    message: "Server đang chạy! Thử GET /api/info?name=YourName&age=20",
  });
});

app.listen(PORT, () => {
  console.log(`Server đang chạy tại http://localhost:${PORT}`);
});
