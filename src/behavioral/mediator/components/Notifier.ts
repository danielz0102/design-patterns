import { EventType } from "../types";
import { Component } from "./Component";

export class Notifier extends Component {
  email(message: string): void {
    console.log(`[EMAIL]: ${message}`);
    this.send(EventType.NOTIFICATION_SENT);
  }

  dashboard(message: string): void {
    console.log(`[DASHBOARD]: ${message}`);
    this.send(EventType.NOTIFICATION_SENT);
  }
}
