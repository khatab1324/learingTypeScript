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
