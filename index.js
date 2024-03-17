const express = require("express");
// import express from "express" (another style of importing

const app = express();
const dotenv = require("dotenv");
dotenv.config();
const git_data = {
  login: "vamsi422",
  id: 68322728,
  node_id: "MDQ6VXNlcjY4MzIyNzI4",
  avatar_url: "https://avatars.githubusercontent.com/u/68322728?v=4",
  gravatar_id: "",
  url: "https://api.github.com/users/vamsi422",
  html_url: "https://github.com/vamsi422",
  followers_url: "https://api.github.com/users/vamsi422/followers",
  following_url: "https://api.github.com/users/vamsi422/following{/other_user}",
  gists_url: "https://api.github.com/users/vamsi422/gists{/gist_id}",
  starred_url: "https://api.github.com/users/vamsi422/starred{/owner}{/repo}",
  subscriptions_url: "https://api.github.com/users/vamsi422/subscriptions",
  organizations_url: "https://api.github.com/users/vamsi422/orgs",
  repos_url: "https://api.github.com/users/vamsi422/repos",
  events_url: "https://api.github.com/users/vamsi422/events{/privacy}",
  received_events_url: "https://api.github.com/users/vamsi422/received_events",
  type: "User",
  site_admin: false,
  name: "vamshi",
  company: null,
  blog: "",
  location: "India, Hyderabad",
  email: null,
  hireable: null,
  bio: "I am a web developer working on MERN stack projects",
  twitter_username: null,
  public_repos: 18,
  public_gists: 0,
  followers: 0,
  following: 1,
  created_at: "2020-07-15T08:00:14Z",
  updated_at: "2024-03-17T08:46:53Z",
};

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
app.get("/git_hub", (req, res) => {
  res.json(git_data);
});
app.listen(process.env.PORT, (req, res) => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});

//console.log("test command");
//from the above console log we return back to terminal where as if we use express we don't return to the terminal we keep listening to the port 3000 t
