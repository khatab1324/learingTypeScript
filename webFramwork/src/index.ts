import { User, UserProp } from "./model/User";
export const url = "http://localhost:3000/users";

// const user = User.buildUser({ name: "user", age: 10 });
// user.on("save", () => {
//   console.log("user are saved");
// });

// user.on("err", () => {
//   console.log("error");
// });
// user.get("id");
// user.save();
// user.set({ name: "jiji", age: 20, city: "amman" });
// user.save();

const colloction = User.buildUserCollection();
colloction.fetchAll();
colloction.on("change", () => {
  console.log(colloction);
});
