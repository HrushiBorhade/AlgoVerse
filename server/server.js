const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const process = require("process");
const app = express();
const PORT = process.env.PORT || 5002;
const { connectDb } = require("./config/connectDb");
const userRouter = require("./routes/userRoutes");
const errorHandler = require("./middleware/errorHandler");
connectDb();
app.use(cors());
app.use(express.json());

app.get("/api", (req, res) => {
  res.status(200).json({ msg: "Welcome to AlgoVerse api" });
});
app.use("/api/user", userRouter);
app.use(errorHandler);
app.listen(PORT, (req, res) => {
  console.log(`Server started on port ${PORT}🚀`);
});
