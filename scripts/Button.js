export default class Button {
  constructor(btnConfig) {
    this.btnConfig = btnConfig;
  }

  getElement(state) {
    const div = document.createElement('div');
    div.className = `key ${this.btnConfig.code}`;
    div.setAttribute('data-code', `${this.btnConfig.code}`);
    div.innerHTML = `${state}`;
    return div;
  }
}
