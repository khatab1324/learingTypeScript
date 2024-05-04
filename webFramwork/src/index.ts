import { User, UserProp } from "./model/User";
import { UserEdit } from "./views/UserEdit";
export const url = "http://localhost:3000/users";

const user = User.buildUser({ name: "dark souls", age: 2009 });
const root = document.getElementById("root");

if (root) {
  const userEdit = new UserEdit(root, user);
  userEdit.render();

  console.log(userEdit);
} else {
  throw new Error("root not define");
}
