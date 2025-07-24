import { EventType, Observer, Publisher } from "./types";

export class Document implements Publisher {
  private observers: Observer[] = [];
  private content: string = "";

  subscribe(observer: Observer): void {
    if (!this.observers.includes(observer)) {
      this.observers.push(observer);
    }
  }

  unsubscribe(observer: Observer): void {
    this.observers = this.observers.filter((obs) => obs !== observer);
  }

  notify(event: EventType): void {
    this.observers.forEach((observer) => observer.update(event));
  }

  write(content: string): void {
    this.content = content;
    this.notify(EventType.DOCUMENT_CHANGED);
  }

  reset(): void {
    this.content = "";
    this.notify(EventType.DOCUMENT_RESET);
  }

  print(): void {
    console.log('---------------')
    console.log(this.content);
    console.log('---------------')
    this.notify(EventType.DOCUMENT_PRINTED);
  }
}
