const express = require("express");
const ip = require("ip");
const cors = require("cors");
require("dotenv").config();

const router = require("./router");
const dataBaseConnect = require("./database");

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.MONGODB_URI;

const app = express();
app.use(cors());
app.use(express.json());
app.use("/", router);

app.listen(PORT, () => {
  console.log(`✅ Server is running http://` + ip.address() + `:${PORT}`);
});
dataBaseConnect(DB_URI);
