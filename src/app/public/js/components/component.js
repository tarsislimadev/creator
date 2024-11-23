import { HTML } from '../../libs/frontend/index.js'

export class Component extends HTML {
  on(name, fn = function () { console.log('component')   }) {
    this.element['on' + name] = fn
    return this
  }

}
