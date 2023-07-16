const express = require("express");
require("./db/config");
const User = require("./db/User");
const app = express();

app.use(express.json());

app.get("/", (res, resp) => {
  resp.send("app is working....");
});

app.post("/signup", async (req, resp) => {
  let user = new User(req.body);
  let result = await user.save();
  resp.send(result);
});

app.post("/signin", async (req, resp) => {
    let user = await User.findOne(req.body);
    if (user) {
      resp.send(user);
    } else {
      resp.send({ result: "No user found" });
    }
  });

app.listen(5000);
