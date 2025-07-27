import { Book } from './products/Book'
import { Clothing } from './products/Clothing'
import { Electronics } from './products/Electronics'

export interface Visitor {
  visitBook(book: Book): void
  visitClothing(clothing: Clothing): void
  visitElectronics(electronics: Electronics): void
}

export interface Product {
  accept(visitor: Visitor): void
}
