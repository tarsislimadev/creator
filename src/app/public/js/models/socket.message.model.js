import { MessageModel } from './message.model.js'

export class SocketMessageModel extends MessageModel {
  state = {
    type: 'none',
    name: '',
    params: {},
  }

  constructor(type, name, params = {}) {
    super()
    this.state.type = type
    this.state.name = name
    this.state.params = params
  }

  toJSON() {
    const { type, name, params } = this.state
    return { type, name, params }
  }
}
