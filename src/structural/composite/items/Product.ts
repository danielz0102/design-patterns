import { Item } from '../types'

export class Product implements Item {
  constructor(
    public name: string,
    public price: number
  ) {}

  getPrice(): number {
    return this.price
  }
}
