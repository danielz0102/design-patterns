import { Sofa } from '../types'

export class ModernSofa implements Sofa {
  hasLegs(): boolean {
    return false
  }

  lieOn(): void {
    console.log('Lying on a modern sofa.')
  }
}
