import * as fightEvents from '../classes/fight/actions/_lib-actions-fight.class';
import * as buffEvents from '../classes/fight/buffs/_lib-buff-fight.class';
import {ActionFightClass} from '../classes/fight/action-fight.class';
import {BuffFightClass} from '../classes/fight/buff-fight.class';
import {Injector, Type} from '@angular/core';
import {BeforemoveBuffFightInterface} from '../interfaces/fight/buffs/beforemove-buff-fight.interface';

export class ObjectUtils<T> {

  static getEventInstance(name: string, injector: Injector): ActionFightClass {
    // @ts-ignore
    return new fightEvents[name](injector);
  }

  static getBuffInstance(name: string, injector: Injector): BuffFightClass {
    // @ts-ignore
    return new buffEvents[name](injector);
  }
}
