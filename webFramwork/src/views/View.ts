import { HasId, Model } from "../model/Model";

export abstract class View<T extends Model<K>, K extends HasId> {
  //model need prop like UserProp becuase of that we pass in the model K
  //K you should pass into it something like userProp
  elementArea: { [key: string]: Element } = {};

  constructor(public parent: Element, public model: T) {
    this.model.on("change", () => {
      this.render();
    });
  }

  abstract template(): string; //abstract force me to add template
  eventsMap(): { [key: string]: () => void } {
    return {};
  } //this mean eventsMap is optional not like abstract

  elementAreaMap(): { [key: string]: string } {
    return {};
  }

  bindEvents(fragment: DocumentFragment): void {
    const eventsMap = this.eventsMap();
    console.log(this.eventsMap());

    for (let eventKey in eventsMap) {
      const [eventName, idName] = eventKey.split(":");
      console.log(idName);

      fragment
        ?.getElementById(idName)
        ?.addEventListener(eventName, eventsMap[eventKey]);
    }
  }
  mapElementArea(fragment: DocumentFragment): void {
    const elementAreaMap = this.elementAreaMap();
    for (let key in elementAreaMap) {
      const selector = elementAreaMap[key];
      const element = fragment.getElementById(selector);
      if (element) {
        this.elementArea[key] = element;
      }
    }
  }
  onRender(): void {} //this here to overwritten by onRender that in UserEdit
  render() {
    this.parent.innerHTML = "";
    const templateElement = document.createElement("template");
    templateElement.innerHTML = this.template();
    this.bindEvents(templateElement.content);
    this.mapElementArea(templateElement.content);
    this.onRender();
    this.parent.append(templateElement.content);
  }
}
