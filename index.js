const express = require("express");
// import express from "express" (another style of importing

const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("my_twitter");
});
app.get("/login", (req, res) => {
  res.send("<h2>please login!</h2>");
});
app.get("/youtube", (req, res) => {
  res.send("<h1>YOU_tube</h1>");
});
app.listen(process.env.PORT, (req, res) => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

//console.log("test command");
//from the above console log we return back to terminal where as if we use express we don't return to the terminal we keep listening to the port 3000 t
