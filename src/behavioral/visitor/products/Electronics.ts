import { Product, Visitor } from '../types'

export class Electronics implements Product {
  constructor(
    public brand: string,
    public model: string,
    public price: number
  ) {}

  accept(visitor: Visitor): void {
    visitor.visitElectronics(this)
  }
}
