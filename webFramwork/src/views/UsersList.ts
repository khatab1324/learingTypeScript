import { User, UserProp } from "../model/User";
import { View } from "./View";

export class UsersList extends View<User, UserProp> {
  template(): string {
    return `
        <div>
       ${this.model.fetchAll()}
        </div>
        `;
  }
}
