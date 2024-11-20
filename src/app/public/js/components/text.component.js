import { HTML } from '../../libs/frontend/index.js'

export class TextComponent extends HTML {
  state = { text: '' }

  constructor({ text = '' }) {
    super()
    this.state.text = text
  }

  onCreate() {
    super.onCreate()
    this.setText(this.state.text)
  }
}
