"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
const singin_1 = require("./routers/singin");
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_session_1 = __importDefault(require("cookie-session"));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use((0, cookie_session_1.default)({ keys: ["randomString"] }));
app.use(singin_1.signInRouter);
app.get("/", (req, res) => {
    console.log(req.session);
    if (req.session && req.session.signIn)
        res.send(`<div>
              <p>welcome</p>
              ${req.session.signIn}
              <a href="/signout">sign out</a>
              <br/>
            </div>
  `);
    res.send(`<p>try sign in</p> <a href="/signin">signin</a>`);
});
app.get("/protected", (req, res) => { });
const port = 4321;
app.listen(port, () => {
    console.log(`open on port ${port}`);
});
