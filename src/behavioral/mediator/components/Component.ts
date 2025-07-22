import { EventType, Mediator } from "../types";

export abstract class Component {
  protected mediator: Mediator;

  protected send(event: EventType): void {
    this.mediator.notify(this, event);
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator;
  }
}
