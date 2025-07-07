import { Item } from "./types";

export class PaymentService {
  constructor(private item: Item) {}

  pay(): void {
    console.log(
      `Processing payment for ${
        this.item.name
      } with price $${this.item.getPrice()}...`
    );
    setTimeout(() => {
      console.log("Payment completed successfully");
    }, 1000);
  }
}
