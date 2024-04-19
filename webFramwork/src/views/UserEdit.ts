import { View } from "./View";
import { User, UserProp } from "../model/User";
import { UserShow } from "./UserShow";
import { UserForm } from "./UserFrom";

export class UserEdit extends View<User, UserProp> {
  elementAreaMap(): { [key: string]: string } {
    return {
      userShow: "user-show",
      userForm: "user-form",
    };
  }
  onRender(): void {
    new UserShow(this.elementArea.userShow, this.model).render();
    new UserForm(this.elementArea.userForm, this.model).render();
  }
  template(): string {
    return `
      <div>
        <div id="user-show"></div>
        <div id="user-form"></div>
      </div>
    `;
  }
}
