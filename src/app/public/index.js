import { io } from './libs/socket/index.js'
import { PageComponent } from './js/components/page.component.js'
import { TextComponent } from './js/components/text.component.js'

export class Page extends PageComponent {
  state = {
    socket: io(),
    ee: new EventTarget(),
  }

  setEvents() {
    this.state.socket.on('message', (m) => this.append(new TextComponent({ text: m })))
  }

  setBody() {
    this.append(new TextComponent({ text: 'body text' }))
  }

}
