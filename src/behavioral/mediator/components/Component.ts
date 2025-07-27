import { EventType, Mediator } from '../types'

export abstract class Component {
  protected mediator: Mediator | null = null

  constructor(mediator?: Mediator) {
    if (mediator) {
      this.setMediator(mediator)
    }
  }

  protected send(event: EventType): void {
    this.mediator?.notify(this, event)
  }

  setMediator(mediator: Mediator): void {
    this.mediator = mediator
  }
}
