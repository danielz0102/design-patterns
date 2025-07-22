import { EventType, Item } from "../types";
import { Component } from "./Component";

export class Payment extends Component {
  item: Item;
  invoiceRequired: boolean;

  process(item: Item, invoice: boolean): void {
    this.item = item;
    this.invoiceRequired = invoice;
    this.send(EventType.PAYMENT_PROCESSED);
  }
}
