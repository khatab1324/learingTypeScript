import express, { Request, Response, Express } from "express";
const app: Express = express();
import { signInRouter } from "./routers/singin";
import bodyParser from "body-parser";
import cookieSession from "cookie-session";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ["randomString"] }));

app.use(signInRouter);
app.get("/", (req: Request, res: Response) => {
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

app.get("/protected", (req: Request, res: Response) => {});
const port = 4321;
app.listen(port, () => {
  console.log(`open on port ${port}`);
});
