import { Inventory } from "./components/Inventory";
import { Payment } from "./components/Payment";
import { Invoice } from "./components/Invoice";
import { Notifier } from "./components/Notifier";
import { CheckoutMediator } from "./mediators/CheckoutMediator";
import { Item } from "./types";

const inventory = new Inventory();
const payment = new Payment();
const invoice = new Invoice();
const notifier = new Notifier();

new CheckoutMediator({
  inventory,
  payment,
  invoice,
  notifier,
});

const videogame: Item = {
  id: crypto.randomUUID(),
  name: "Expedition 33",
  quantity: 1,
  price: 50,
};

payment.process(videogame, true);
