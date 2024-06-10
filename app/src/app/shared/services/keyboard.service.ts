import { Keyboard } from 'src/app/workflow/auth/pages/login/commons/models/responses/info-response.interfaces';
export class KeyBoardHelper {
  keyboard: Keyboard = {seed:'', keys:[]};

  setKeyBoard(keyboard: Keyboard){
    this.keyboard = keyboard;
  } 
  getSeed(){
    return this.keyboard ? this.keyboard.seed: "NO-SEED-INCLUDE";
  }
  getPasswordHash(password: string): string[] {
    let arrayOfHash = [];

    if(!this.keyboard?.keys) return [''];

    for (let char of password) {
      let hash = this.keyboard.keys.find(item => item.value === char); 
      arrayOfHash.push(hash?.id);
    }
    return arrayOfHash as [];
  }

}
