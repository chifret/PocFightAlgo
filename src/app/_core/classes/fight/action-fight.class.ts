import {Injector} from '@angular/core';
import {FightHelper} from '../../helpers/fight.helper';

export abstract class ActionFightClass {

  isAttack = false;
  hasMoveBeforeAttack = false;
  hasBuffForAttack = false;

  fightHelper: FightHelper;

  constructor(injector: Injector) {
    this.fightHelper = injector.get(FightHelper);
  }
}
