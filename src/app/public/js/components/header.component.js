import { HTML } from '../../libs/frontend/index.js'
import { TextComponent } from './text.component.js'

export class HeaderComponent extends HTML {
  onCreate() {
    super.onCreate()
    this.append(new TextComponent({ text: 'Header Component' }))
  }
}
