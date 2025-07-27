import { Model } from './Model'

export class ModelFactory {
  private models: Map<string, Model> = new Map()

  // If a model weighs 100KB, and we create a model for each Player,
  // If we have 1000 players, that would be 100MB of memory.
  // Instead, we share the same Model for all players with the same texture and mesh.
  // This way, if we have 1000 players with the same texture and mesh, we only use 100KB
  // And if we have a billion of players with the same texture and mesh, we still only use 100KB.
  get(texture: string, mesh: string): Model {
    if (this.models.has(texture + mesh)) {
      return this.models.get(texture + mesh)
    }

    const model = new Model(texture, mesh)
    this.models.set(texture + mesh, model)
    return model
  }
}
