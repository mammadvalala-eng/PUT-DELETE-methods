const express = require("express");

const app = express();

app.use(express.json());

const userRoutes = require("./routes/userRoutes");

app.use("/", userRoutes);

app.listen(3000, () => {
  console.log("Server is running...");
});
