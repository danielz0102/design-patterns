export class Mesh {
  constructor(readonly filepath: string) {
    console.log('Loading very heavy mesh')
  }
}

export class Texture {
  constructor(readonly filepath: string) {
    console.log('Loading very heavy texture')
  }
}
