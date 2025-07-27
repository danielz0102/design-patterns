import { ModelFactory } from './ModelFactory'
import { Player } from './Player'

export class Game {
  private players: Player[] = []
  private modelFactory: ModelFactory = new ModelFactory()

  addPlayer(
    texture: string,
    mesh: string,
    x: number,
    y: number,
    z: number
  ): void {
    const model = this.modelFactory.get(texture, mesh)
    const player = new Player(model, x, y, z)
    this.players.push(player)
  }

  init(): void {
    for (const player of this.players) {
      player.render()
    }
  }

  gameOver(): void {
    console.log('Game Over')
    for (const player of this.players) {
      player.move(0, 0, 0)
    }
  }
}
