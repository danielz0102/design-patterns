import { Sofa } from '../types'

export class VictorianSofa implements Sofa {
  hasLegs(): boolean {
    return true
  }

  lieOn(): void {
    console.log('Lying on a Victorian sofa.')
  }
}
