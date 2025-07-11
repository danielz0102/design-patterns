import { Mesh, Texture } from "./gameModules";

// Model stores the intrinsic state: the texture and mesh (really big objects).
// Instantiating this class many times can destroy performance.
export class Model {
  private texture: Texture;
  private mesh: Mesh;

  constructor(texturePath: string, meshPath: string) {
    this.texture = new Texture(texturePath);
    this.mesh = new Mesh(meshPath);
  }

  render(x: number, y: number, z: number): void {
    console.log(
      `Rendering model with texture ${this.texture.filepath} and mesh ${this.mesh.filepath} at position (${x}, ${y}, ${z})`
    );
  }
}
