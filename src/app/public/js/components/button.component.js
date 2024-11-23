import { Component } from './component.js'

export class ButtonComponent extends Component {
  state = {
    text: '',
    onclick: () => console.log('button component'),
  }

  constructor({ text = '', onclick = (() => console.log('button component')) }) {
    super()
    this.state.text = text
    this.state.onclick = onclick
  }

  getName() { return 'button-component' }

  getTagName() { return 'button' }

  onCreate() {
    super.onCreate()
    this.setText(this.state.text)
    this.on('click', () => this.state.onclick?.())
  }

}
