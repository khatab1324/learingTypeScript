import { Router, Request, Response, NextFunction } from "express";
const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.signIn) {
    next();
    return;
  }

  res.status(403);
  res.send("Not permitted");
}

router.get("/signin", (req: Request, res: Response) => {
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
router.post(
  "/signin",
  (
    req: Request<{}, {}, { [key: string]: string | undefined }>,
    res: Response
  ) => {
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
  }
);
router.get("/signout", (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect("/");
});
router.get("/protected", requireAuth, (req: Request, res: Response) => {
  res.send("Welcome to protected route, logged in user");
});

export const signInRouter = router;
