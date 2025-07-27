import { Book } from '../products/Book'
import { Clothing } from '../products/Clothing'
import { Electronics } from '../products/Electronics'
import { Visitor } from '../types'

export class ReportVisitor implements Visitor {
  visitBook(book: Book): void {
    console.log(
      `Generating report for book: ${book.title} by ${book.author}, Price: $${book.price.toFixed(2)}`
    )
  }

  visitClothing(clothing: Clothing): void {
    console.log(
      `Generating report for clothing: ${clothing.name}, Size: ${clothing.size}, Price: $${clothing.price.toFixed(2)}`
    )
  }

  visitElectronics(electronics: Electronics): void {
    console.log(
      `Generating report for electronics: ${electronics.brand} ${electronics.model}, Price: $${electronics.price.toFixed(2)}`
    )
  }
}
