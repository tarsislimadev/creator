import { io } from './libs/socket/index.js'
import { PageComponent } from './js/components/page.component.js'
import { TextComponent } from './js/components/text.component.js'
import { ButtonComponent } from './js/components/button.component.js'
import { SocketMessageModel } from './js/models/socket.message.model.js'
import { RecordScreenSocketMessageModel } from './js/models/message/socket/record.screen.js'
import { RecordCamSocketMessageModel } from './js/models/message/socket/record.cam.js'

export class Page extends PageComponent {
  state = {
    socket: io(),
    ee: new EventTarget(),
    messages: [],
  }

  onRecordScreenButtonClick() {
    this.sendSocketMessage(new RecordScreenSocketMessageModel()) // ('record:screen')
  }

  onRecordCamButtonClick() {
    this.sendSocketMessage(new RecordCamSocketMessageModel())
  }

  setEvents() {
    this.state.socket.on('message', (m) => this.append(new TextComponent({ text: m })))
  }

  setBody() {
    this.append(new TextComponent({ text: 'body text' }))
    this.append(new ButtonComponent({ text: 'record cam', onclick: () => this.onRecordCamButtonClick() }))
    this.append(new ButtonComponent({ text: 'record cam', onclick: () => this.onRecordCamButtonClick() }))
  }

  sendSocketMessage(message = new SocketMessageModel('input')) {
    this.state.messages.push(message)
    this.state.socket.send('message', message.toString())
  }

}
