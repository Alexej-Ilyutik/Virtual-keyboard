export default class State {
  static LOCALE_EN = 'en';

  static LOCALE_RU = 'ru';

  constructor() {
    this.locale = State.LOCALE_EN;
    this.isShiftPressed = false;
    this.shiftBtnCode = '';
  }

  getLocale() {
    return this.locale;
  }

  setLocale(locale) {
    this.locale = locale;
  }

  hasShiftPressed() {
    return this.isShiftPressed;
  }

  getShiftBtnCode() {
    return this.shiftBtnCode;
  }

  toggleShiftPressed(btnCode) {
    this.isShiftPressed = !this.isShiftPressed;
    this.shiftBtnCode = btnCode;
  }
}
