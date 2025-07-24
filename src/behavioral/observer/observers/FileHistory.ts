import { EventType, HistoryEntry, Observer } from "../types";

export class FileHistory implements Observer {
  private history: HistoryEntry[] = [];

  constructor() {}

  update(event: EventType): void {
    this.history.push({ event, timestamp: new Date() });
  }

  getHistory(): HistoryEntry[] {
    return this.history;
  }
}
