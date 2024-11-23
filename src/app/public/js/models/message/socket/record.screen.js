import { SocketMessageModel } from '../../socket.message.model.js'

export class RecordScreenSocketMessageModel extends SocketMessageModel {
  constructor() {
    super('input', 'record:screen')
  }
}
