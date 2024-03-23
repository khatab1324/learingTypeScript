import { User } from "./model/User";
import { UsreApi } from "./model/UserApi";

const newUser = new User({ name: "meme", age: 19 });

// console.log(newUser.get("name"));
// newUser.set({ name: "moo", age: 10 });
// console.log(newUser.get("name"));
// newUser.on("click", () => {
//   console.log("");
// });
// console.log(newUser.trigger("click"));
// newUser.fetch();
// setTimeout(() => {
//   //   console.log(newUser);
// }, 3000);
// console.log(newUser);
newUser.save();

// const userApi = new UsreApi("http://localhost:3000");
// userApi.fetchUsername("khattab");
// console.log(userApi);
