export default class Button {
  constructor(btnConfig) {
    this.btnConfig = btnConfig;
  }

  getDomElement(state) {
    const div = document.createElement('div');
    div.className = `key ${this.btnConfig.code}`;
    div.setAttribute('data-code', `${this.btnConfig.code}`);

    if (
      state.hasShiftPressed() &&
      this.btnConfig.code === state.getShiftBtnCode()
    ) {
      div.className += ' shift-key';
    }
    const btnValue = state.hasShiftPressed()
      ? this.btnConfig[state.getLocale()].shift
      : this.btnConfig[state.getLocale()].small;
    div.innerHTML = `<span data-code="${this.btnConfig.code}">${btnValue}</span>`;
    return div;
  }
}
