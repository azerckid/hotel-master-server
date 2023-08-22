const express = require("express");
const route = express.Router();

const dataControl = require("../controller/dataControl");
const userControl = require("../controller/userControl");

route.get("/", (req, res) => {
  res.send("Hello World!");
});

route.post("/register", userControl.register);
route.post("/login", userControl.login);
route.post("/logout", userControl.logout);

route.post("/api/import/sanhadate", dataControl.insertData.sanhaDate);
route.post("/api/import/sanhaaccount", dataControl.insertData.sanhaAccount);
route.post("/api/import/lunetdate", dataControl.insertData.lunetDate);
route.post("/api/import/lunetaccount", dataControl.insertData.lunetAccount);

route.post("/api/exportexcel", (req, res) => {
  res.send("Export Excel");
});

module.exports = route;
