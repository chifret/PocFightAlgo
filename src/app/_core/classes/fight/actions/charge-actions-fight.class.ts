import {ActionFightClass} from '../action-fight.class';
import {HasmoveActionsFightInterface} from '../../../interfaces/fight/actions/hasmove-actions-fight.interface';
import {HasactionbuffActionsFightInterface} from '../../../interfaces/fight/actions/hasactionbuff-actions-fight.interface';
import {HasattackFightInterface} from '../../../interfaces/fight/actions/hasattack-actions-fight.interface';

export class ChargeActionsFightClass extends ActionFightClass implements HasattackFightInterface,
  HasmoveActionsFightInterface,
  HasactionbuffActionsFightInterface {

  isAttack = true;
  hasMoveBeforeAttack = true;
  hasBuffForAttack = true;

  performMove(): void {
  }

  performAttack(): void {
  }

  performBuff(): void {
  }
}
