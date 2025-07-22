import { Component } from "../components/Component";
import { Inventory } from "../components/Inventory";
import { Invoice } from "../components/Invoice";
import { Notifier } from "../components/Notifier";
import { Payment } from "../components/Payment";
import { EventType, Mediator } from "../types";

type CheckoutMediatorParams = {
  inventory: Inventory;
  payment: Payment;
  invoice: Invoice;
  notifier: Notifier;
};

export class CheckoutMediator implements Mediator {
  private inventory: Inventory;
  private payment: Payment;
  private invoice: Invoice;
  private notifier: Notifier;

  constructor(params: CheckoutMediatorParams) {
    this.inventory = params.inventory;
    this.payment = params.payment;
    this.invoice = params.invoice;
    this.notifier = params.notifier;

    this.inventory.setMediator(this);
    this.payment.setMediator(this);
    this.invoice.setMediator(this);
    this.notifier.setMediator(this);
  }

  notify(sender: Component, event: EventType): void {
    if (event === EventType.PAYMENT_PROCESSED && sender instanceof Payment) {
      this.handlePayment();
    }

    if (event === EventType.INVOICE_GENERATED && sender instanceof Invoice) {
      this.handleInvoice();
    }

    if (event === EventType.STOCK_UPDATED && sender instanceof Inventory) {
      this.handleStockUpdate();
    }
  }

  private handlePayment(): void {
    const item = this.payment.item;

    if (!item) {
      throw new Error("No item to process payment for");
    }

    this.inventory.updateStock(item);
    this.notifier.email(
      `Thank you for your payment of $${item.price * item.quantity} for ${
        item.name
      } [${item.quantity}].`
    );

    if (this.payment.invoiceRequired) {
      this.invoice.generate(item);
    }
  }

  private handleInvoice(): void {
    this.notifier.email(
      `Greetings, this is the invoice for your purchase:
      ${this.invoice.content}
      Thank you for your business!`
    );
  }

  private handleStockUpdate(): void {
    if (!this.payment.item) {
      throw new Error("No item to update stock for");
    }

    this.notifier.dashboard(
      `Product #${this.payment.item.id} was updated in stock.`
    );
  }
}
