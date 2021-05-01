import {BuffFightClass} from '../buff-fight.class';
import {HasdashbeforeBuffFightInterface} from '../../../interfaces/fight/buffs/hasdashbefore-buff-fight.interface';
import {HasattackbeforeBuffFightInterface} from '../../../interfaces/fight/buffs/hasattackbefore-buff-fight.interface';
import {QuickshotEventFightClass} from '../events/quickshot-event-fight.class';

export class FallbackshotBuffFightClass extends BuffFightClass implements HasdashbeforeBuffFightInterface,
  HasattackbeforeBuffFightInterface {
  attack = 'QuickshotEventFightClass';

  performDash(): void {
  }

  castBonus(): void {
  }
}
