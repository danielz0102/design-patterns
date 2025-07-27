import { Book } from '../products/Book'
import { Clothing } from '../products/Clothing'
import { Electronics } from '../products/Electronics'
import { Visitor } from '../types'

export class DiscountVisitor implements Visitor {
  visitBook(book: Book): void {
    book.price *= 0.9
    console.log(
      `Discount applied to book: ${book.title}, new price: $${book.price.toFixed(2)}`
    )
  }

  visitClothing(clothing: Clothing): void {
    clothing.price *= 0.85
    console.log(
      `Discount applied to clothing: ${clothing.name}, new price: $${clothing.price.toFixed(2)}`
    )
  }

  visitElectronics(electronics: Electronics): void {
    electronics.price *= 0.8
    console.log(
      `Discount applied to electronics: ${electronics.brand} ${electronics.model}, new price: $${electronics.price.toFixed(2)}`
    )
  }
}
