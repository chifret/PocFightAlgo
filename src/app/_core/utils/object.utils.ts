import * as fightEvents from '../classes/fight/actions/_lib-actions-fight.class';
import * as buffEvents from '../classes/fight/buffs/_lib-buff-fight.class';
import {ActionFightClass} from '../classes/fight/action-fight.class';
import {BuffFightClass} from '../classes/fight/buff-fight.class';
import {Injector} from '@angular/core';

export class ObjectUtils {

  static getEventInstance(name: string, injector: Injector): ActionFightClass {
    // @ts-ignore
    return new fightEvents[name](injector);
  }

  static getBuffInstance(name: string, injector: Injector): BuffFightClass {
    // @ts-ignore
    return new buffEvents[name](injector);
  }
}
