import {ActionFightClass} from '../action-fight.class';
import {IsattackFightInterface} from '../../../interfaces/fight/actions/isattack-actions-fight.interface';
import {HasmoveActionsFightInterface} from '../../../interfaces/fight/actions/hasmove-actions-fight.interface';
import {HasactionbuffActionsFightInterface} from '../../../interfaces/fight/actions/hasactionbuff-actions-fight.interface';
import {EncourageBuffFightClass} from '../buffs/encourage-buff-fight.class';

export class ChargeActionsFightClass extends ActionFightClass implements IsattackFightInterface,
  HasmoveActionsFightInterface,
  HasactionbuffActionsFightInterface {

  performMove(): void {
  }

  performAttack(): void {
  }
}
