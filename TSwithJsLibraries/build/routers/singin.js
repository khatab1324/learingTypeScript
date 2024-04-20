"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signInRouter = void 0;
const express_1 = require("express");
const router = (0, express_1.Router)();
function requireAuth(req, res, next) {
  if (req.session && req.session.signIn) {
    next();
    return;
  }
  res.status(403);
  res.send("Not permitted");
}
router.get("/signin", (req, res) => {
  res.send(`
    <div>
    <form method="POST">
    <div>
      <label>username</label>
      <input name="username" />
    </div>
    <div>
      <label>Password</label>
      <input name="password" type="password" />
    </div>
    <button>Submit</button>
  </form>
      <a href="/">home page</a>
      <br/>
  </div>
  `);
});
router.post("/signin", (req, res) => {
  // interface userData {
  //   username: string;
  //   password: string;
  //   confirmPassword: string;
  // }
  const userData = req.body;
  const { username, password, confirmPassword } = userData;
  if (username === "khatab") {
    req.session = { signIn: true };
    console.log("seccess signIn");
  } else {
    res.send("wrong username");
  }
  console.log(userData);
  res.redirect("/");
});
router.get("/signout", (req, res) => {
  req.session = undefined;
  res.redirect("/");
});
router.get("/protected", requireAuth, (req, res) => {
  res.send("Welcome to protected route, logged in user");
});

exports.signInRouter = router;
