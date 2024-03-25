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