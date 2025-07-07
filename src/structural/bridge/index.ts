import { Stripe } from "./PaymentProcessors";
import { OrderService } from "./OrderService";

const stripe = new Stripe();
const orderService = new OrderService(stripe);
orderService.placeOrder(100);
