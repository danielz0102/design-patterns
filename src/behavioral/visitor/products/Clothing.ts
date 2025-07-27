import { Product, Visitor } from '../types'

export class Clothing implements Product {
  constructor(
    public name: string,
    public size: string,
    public price: number
  ) {}

  accept(visitor: Visitor): void {
    visitor.visitClothing(this)
  }
}
