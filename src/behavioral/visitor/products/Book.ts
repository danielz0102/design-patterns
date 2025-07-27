import { Product, Visitor } from '../types'

export class Book implements Product {
  constructor(
    public title: string,
    public author: string,
    public price: number
  ) {}

  accept(visitor: Visitor): void {
    visitor.visitBook(this)
  }
}
