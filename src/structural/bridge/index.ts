import { Stripe } from "./PaymentProcessors/Stripe";
import { PayPal } from "./PaymentProcessors/PayPal";
import { OrderService } from "./OrderService";

const stripe = new Stripe();
const orderService = new OrderService(stripe);
orderService.placeOrder(100);

console.log();

const paypal = new PayPal();
const anotherOrderService = new OrderService(paypal);
anotherOrderService.placeOrder(50);
