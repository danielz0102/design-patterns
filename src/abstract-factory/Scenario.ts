import { FurnitureFactory, Chair, Sofa, CoffeeTable } from "./types";

export class Scenario {
  private chair: Chair;
  private sofa: Sofa;
  private coffeeTable: CoffeeTable;

  constructor(private furnitureFactory: FurnitureFactory) {
    this.chair = this.furnitureFactory.createChair();
    this.sofa = this.furnitureFactory.createSofa();
    this.coffeeTable = this.furnitureFactory.createCoffeeTable();
  }

  loadScene(): void {
    this.coffeeTable.putCoffeeOn();
    this.coffeeTable.addChair(this.chair);

    const tableChair = this.coffeeTable.getChairs()[0];

    if (!this.sofa.hasLegs()) {
      console.log("> This sofa looks so comfortable!");
      this.sofa.lieOn();
    } else {
      console.log("> I'm going to drink some coffee");
      tableChair.sitOn();
    }
  }
}
