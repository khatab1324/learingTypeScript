<<<<<<< HEAD
import { Model } from "./model/Model";
import { User } from "./model/User";

const user = User.buildUser({ name: "khss", age: 19 });
user.save();
user.on("change", () => {
  console.log("user was change", user);
}); //this will call the refrence that will execute the function
user.on("save", () => {
  console.log("the user are saved");
});

user.set({ id: 8, name: "sooso", age: 20 });
user.fetch();
user.save();
=======
import { User } from "./model/User";
import { UsreApi } from "./model/UserApi";

const newUser = new User({ name: "sosom", age: 21 });

// newUser.fetch();
// setTimeout(() => {
//   console.log(newUser.get("name"));
// }, 1000);
// console.log(newUser.get("name"));

const userApi = new UsreApi("http://localhost:3000");
userApi.save(newUser);
(async () => {
  await userApi.fetchAll();
  console.log(userApi.userData); 
})();
>>>>>>> 5c19ece26f52b715c5459284e939009ae0940cc0
