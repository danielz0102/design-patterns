import { Chair } from '../types'

export class ModernChair implements Chair {
  hasLegs(): boolean {
    return false
  }

  sitOn(): void {
    console.log('Sitting on a modern chair.')
  }
}
