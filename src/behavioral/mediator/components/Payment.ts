import { EventType, Item, Mediator } from '../types'
import { Component } from './Component'

export class Payment extends Component {
  public item: Item | null = null
  public invoiceRequired = false

  constructor(mediator?: Mediator) {
    super(mediator)
  }

  process(item: Item, invoice: boolean): void {
    this.item = item
    this.invoiceRequired = invoice
    this.send(EventType.PAYMENT_PROCESSED)
  }
}
