import { SocketMessageModel } from '../../socket.message.model.js'

export class RecordCamSocketMessageModel extends SocketMessageModel {
  constructor() {
    super('input', 'record:cam')
  }
}
