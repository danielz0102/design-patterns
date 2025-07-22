import { EventType, Item } from "../types";
import { Component } from "./Component";

export class Invoice extends Component {
  content: string = "";

  generate(item: Item): void {
    this.content = `
      PRODUCT: ${item.name}
      QUANTITY: ${item.quantity}
      PRICE: $${item.price}
      TOTAL: $${item.price * item.quantity}
      `;
    this.send(EventType.INVOICE_GENERATED);
  }
}
