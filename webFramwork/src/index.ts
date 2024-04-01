import { User } from "./model/User";

const user = User.buildUser({ name: "user", age: 10 });
user.on("save", () => {
  console.log("user are saved");
});
user.on("change", () => {
  console.log("user are change");
});
user.on("err", () => {
  console.log("error");
});
user.get("id");
user.save();
user.set({ name: "jiji", age: 20, city: "amman" });
user.save();
