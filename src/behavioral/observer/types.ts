export interface Observer {
  update(event: EventType): void
}

export interface Publisher {
  subscribe(observer: Observer): void
  unsubscribe(observer: Observer): void
  notify(event: EventType): void
}

export enum EventType {
  DOCUMENT_CHANGED = 'DOCUMENT_CHANGED',
  DOCUMENT_RESET = 'DOCUMENT_RESET',
  DOCUMENT_PRINTED = 'DOCUMENT_PRINTED'
}

export type HistoryEntry = {
  event: EventType
  timestamp: Date
}
