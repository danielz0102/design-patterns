export interface EuroExchangeProvider {
  getExchangeRate(): Promise<ServiceResponse>
}

export type ServiceResponse = {
  time: string
  rates: Excahnge[]
}

export type Excahnge = {
  currency: string
  rate: number
}

export interface XMLResponse {
  'gesmes:Envelope': GesmesEnvelope
}

export interface GesmesEnvelope {
  $: GesmesEnvelopeClass
  'gesmes:subject': string[]
  'gesmes:Sender': GesmesSender[]
  Cube: GesmesEnvelopeCube[]
}

export interface GesmesEnvelopeClass {
  'xmlns:gesmes': string
  xmlns: string
}

export interface GesmesEnvelopeCube {
  Cube: PurpleCube[]
}

export interface PurpleCube {
  $: Purple
  Cube: FluffyCube[]
}

export interface Purple {
  time: string
}

export interface FluffyCube {
  $: Fluffy
}

export interface Fluffy {
  currency: string
  rate: string
}

export interface GesmesSender {
  'gesmes:name': string[]
}
