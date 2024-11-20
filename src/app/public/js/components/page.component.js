import { HTML } from '../../libs/frontend/index.js'
import { HeaderComponent } from './header.component.js'
import { FooterComponent } from './footer.component.js'
import { TextComponent } from './text.component.js'

export class PageComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.append(new HeaderComponent())
    this.setBody()
    this.append(new FooterComponent())
    this.setEvents()
  }

  setEvents() {
  }

  setBody() {
    this.append(new TextComponent({ text: 'Text Component' }))
  }
}
