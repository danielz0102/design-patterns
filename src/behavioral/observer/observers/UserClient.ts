import { EventType, Observer } from "../types";

export class UserClient implements Observer {
  constructor(private username: string) {}

  update(event: EventType): void {
    if (event === EventType.DOCUMENT_CHANGED) {
      this.toast("Document has been updated");
    }

    if (event === EventType.DOCUMENT_RESET) {
      this.toast("Document has been reset.");
    }

    if (event === EventType.DOCUMENT_PRINTED) {
      this.toast("Document has been printed.");
    }
  }

  toast(message: string): void {
    console.log(`(@${this.username}) ${message}`);
  }
}
