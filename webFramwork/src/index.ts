import { User, UserProp } from "./model/User";
import { UserForm } from "./views/UserFrom";
export const url = "http://localhost:3000/users";

const user = User.buildUser({ name: "dark souls", age: 2009 });
const root = document.getElementById("root");

if (root) {
  const userForm = new UserForm(root, user).render();
} else {
  throw new Error("root not define");
}
