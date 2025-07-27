import { UUID } from 'crypto'
import { Component } from './components/Component'

export interface Mediator {
  notify(sender: Component, event: EventType): void
}

export enum EventType {
  PAYMENT_PROCESSED,
  STOCK_UPDATED,
  INVOICE_GENERATED,
  NOTIFICATION_SENT
}

export type Item = {
  id: UUID
  name: string
  price: number
  quantity: number
}
