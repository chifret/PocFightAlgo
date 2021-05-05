import {BuffFightClass} from '../buff-fight.class';
import {BeforeactionBuffFightInterface} from '../../../interfaces/fight/buffs/beforeaction-buff-fight.interface';
import {CreatureClass} from '../../creature.class';
import {BuffApiClass} from '../../api/buff-api.class';

export class FallbackshotBuffFightClass extends BuffFightClass implements BeforeactionBuffFightInterface {

  beforeAttack = true;

  beforeaction(effect: { effect: BuffApiClass, creature: CreatureClass }, action: any): void {

    if (effect.creature.squadId === action.attacker.squadId) {
      return;
    }

    this.logService.log(effect.creature.name + ' réagit grace à ' + effect.effect.type + ' face à l\'action de ' + action.attacker.name);
    effect.effect.charge -= 1;

    this.fightHelper.resolveMove({
      mover: effect.creature,
      type: 'dash',
      targetType: 'tile',
      // @ts-ignore
      target: null
    });

    this.fightHelper.resolveAction({
      attacker: effect.creature,
      target: action.attacker,
      type: 'OpportunityattackActionsFightClass'
    });
  }
}
