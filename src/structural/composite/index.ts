import { Cart } from './items/Cart'
import { Product } from './items/Product'
import { PaymentService } from './PaymentService'

const fatherCart = new Cart("Father's Cart")
fatherCart.addItem(
  new Product('Cigars', 29),
  new Product('Clock', 19),
  new Product('Jeans', 49)
)

const motherCart = new Cart("Mother's Cart")
motherCart.addItem(
  new Product('Blouse', 29),
  new Product('Plant', 15),
  new Product('Perfume', 99)
)

const myCart = new Cart('My Cart')
myCart.addItem(
  new Product('Laptop', 1299),
  new Product("Baldur's Gate 3", 59),
  new Product('Charger', 19)
)

const familyCart = new Cart('Family Cart')
familyCart.addItem(fatherCart, motherCart, myCart)

const paymentService = new PaymentService(familyCart)
paymentService.pay()
