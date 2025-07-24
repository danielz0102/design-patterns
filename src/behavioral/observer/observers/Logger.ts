import { EventType, Observer } from "../types";

export class Logger implements Observer {
  update(event: EventType): void {
    const timestamp = new Date().toISOString();

    if (event === EventType.DOCUMENT_RESET) {
      console.log("WARN", `${timestamp} - Document content reset`);
    }

    if (event === EventType.DOCUMENT_PRINTED) {
      console.log("INFO", `${timestamp} - Document printed`);
    }
  }
}
