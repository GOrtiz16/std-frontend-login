import { Keyboard } from '../../workflow/auth/pages/login/interfaces/info-response.interfaces';

export class KeyBoardHelper {
  keyboard: Keyboard = { seed: '', keys: [] };

  setKeyBoard(keyboard: Keyboard) {
    this.keyboard = keyboard;
  }

  getSeed() {
    return this.keyboard ? this.keyboard.seed : 'NO-SEED-INCLUDE';
  }

  getPasswordHash(password: string): string[] {
    if (!this.keyboard?.keys) {
      return [''];
    }

    const keyMap = new Map(this.keyboard.keys.map((item) => [item.value, item.id]));
    const arrayOfHash = password.split('').map((char) => keyMap.get(char) || '');

    return arrayOfHash;
  }
}
