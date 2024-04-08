import { User } from "../model/User";

export class UserForm {
  constructor(public parent: Element, public model: User) {
    this.model.on("change", () => {
      this.render();
    });
  }
  eventsMap(): { [key: string]: () => void } {
    return {
      "click:set_age": this.onSetRandomAge,
      "click:set_name": this.onSetName,
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

  template(): string {
    return `
    <div>
    <h1 >hello there</h1>
    <div>username : ${this.model.get("name")}</div>
    <div>user age : ${this.model.get("age")}</div>
    <input/>
    <button id="set_age">set random age</button>
    <button id="set_name">change name</button>
    </div>
    `;
  }
  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    for (let eventKey in eventsMap) {
      const [eventName, idName] = eventKey.split(":");
      console.log(idName);

      fragment
        ?.getElementById(idName)
        ?.addEventListener(eventName, eventsMap[eventKey]);
    }
  }
  render() {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.parent.append(templateElement.content);
  }
}
