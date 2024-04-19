import { User, UserProp } from "../model/User";
import { View } from "./View";

export class UserForm extends View<User, UserProp> {
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:set_age": this.onSetRandomAge,
      "click:set_name": this.onSetName,
      "click:save_user": this.onSaveUser,
    };
  }

  onSetRandomAge = (): void => {
    this.model.setRandomAge();
  };
  onSetName = (): void => {
    const input = this.parent.querySelector("input");
    if (input && input.value !== "") {
      this.model.setName(input.value);
    }
  };
  onSaveUser = (): void => {
    this.model.save();
  };

  template(): string {
    return `
    <div>
    <input placeholder="${this.model.get("name")}"/>
    <button id="set_age">set random age</button>
    <button id="set_name">change name</button>
    <button id="save_user">save user</button>
    </div>
    `;
  }
}
