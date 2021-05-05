import {Injector} from '@angular/core';
import {FightHelper} from '../../helpers/fight.helper';

export class ActionFightClass {

  fightHelper: FightHelper;

  constructor(injector: Injector) {
    this.fightHelper = injector.get(FightHelper);
  }
}
