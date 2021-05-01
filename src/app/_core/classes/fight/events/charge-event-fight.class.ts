import {EventFightClass} from '../event-fight.class';
import {IsattackFightInterface} from '../../../interfaces/fight/events/isattack-events-fight.interface';
import {HasmoveEventsFightInterface} from '../../../interfaces/fight/events/hasmove-events-fight.interface';
import {HasactionbuffEventsFightInterface} from '../../../interfaces/fight/events/hasactionbuff-events-fight.interface';
import {EncourageBuffFightClass} from '../buffs/encourage-buff-fight.class';

export class ChargeEventFightClass extends EventFightClass implements IsattackFightInterface,
  HasmoveEventsFightInterface,
  HasactionbuffEventsFightInterface {

  constructor() {
    super();
    console.log('test');
    this.buff = new EncourageBuffFightClass();
  }

  buff: EncourageBuffFightClass;

  performMove(): void {
  }
}
