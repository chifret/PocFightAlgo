import {ActionFightClass} from '../action-fight.class';
import {HasattackFightInterface} from '../../../interfaces/fight/actions/hasattack-actions-fight.interface';

export class OpportunityattackActionsFightClass extends ActionFightClass implements HasattackFightInterface {

  isAttack = true;

  performAttack(): void {
  }
}
