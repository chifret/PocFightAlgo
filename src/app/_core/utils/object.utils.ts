import * as fightEvents from '../classes/fight/events/_lib-event-fight.class';
import * as buffEvents from '../classes/fight/buffs/_lib-buff-fight.class';
import {EventFightClass} from '../classes/fight/event-fight.class';
import {BuffFightClass} from '../classes/fight/buff-fight.class';

export class ObjectUtils<T> {

  static getEventInstance(name: string): EventFightClass {
    // @ts-ignore
    return new fightEvents[name]();
  }

  static getBuffInstance(name: string): BuffFightClass {
    // @ts-ignore
    return new buffEvents[name]();
  }
}
