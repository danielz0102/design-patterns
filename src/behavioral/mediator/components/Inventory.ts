import { UUID } from "crypto";
import { EventType, Item } from "../types";
import { Component } from "./Component";

export class Inventory extends Component {
  private stock: Map<UUID, number> = new Map();

  updateStock(item: Item): void {
    const currentQuantity = this.stock.get(item.id) || 0;

    this.stock.set(item.id, currentQuantity + item.quantity);
    
    this.send(EventType.STOCK_UPDATED);
  }
}
