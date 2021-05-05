import {BuffFightClass} from '../buff-fight.class';
import {BeforemoveBuffFightInterface} from '../../../interfaces/fight/buffs/beforemove-buff-fight.interface';
import {CreatureClass} from '../../creature.class';
import {MoveClass} from '../../move.class';
import {BuffApiClass} from '../../api/buff-api.class';

export class OpportunityattackBuffFightClass extends BuffFightClass implements BeforemoveBuffFightInterface {

  beforeMove = true;

  beforemove(effect: { effect: BuffApiClass, creature: CreatureClass }, move: MoveClass): void {

    if (effect.creature.squadId === move.mover.squadId) {
      return;
    }

    this.logService.log(effect.creature.name + ' réagit grace à ' + effect.effect.type + ' face au mouvement de ' + move.mover.name);
    effect.effect.charge -= 1;

    this.fightHelper.resolveAction({
      attacker: effect.creature,
      target: move.mover,
      type: 'OpportunityattackActionsFightClass'
    });
  }
}

