import { Item } from '../types'

export class Cart implements Item {
  private items: Item[] = []

  constructor(public name: string) {}

  getPrice(): number {
    return this.items.reduce((total, item) => total + item.getPrice(), 0)
  }

  addItem(...items: Item[]): void {
    this.items.push(...items)
  }

  removeItem(name: string): void {
    this.items = this.items.filter((item) => item.name !== name)
  }
}
