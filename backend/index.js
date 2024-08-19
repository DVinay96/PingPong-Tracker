const express = require("express");
const app = express();
const mongoose = require("mongoose");
const matchesRoutes = require("./routes/match.route");
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());
app.listen(process.env.PORT, () => {
  console.log("Server running");
});

app.use("/", matchesRoutes);

mongoose.connect(process.env.MONGODB_URI).then(() => console.log("Connected!"));
