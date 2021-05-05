import {Injectable} from '@angular/core';
import {ContextClass} from '../classes/context.class';
import {CreatureClass} from '../classes/creature.class';
import {BuffApiClass} from '../classes/api/buff-api.class';

@Injectable()
export class ContextService {
  // @ts-ignore
  context: ContextClass = null;

  getContextEffects(): { creature: CreatureClass, effect: BuffApiClass }[] {
    const effects: { creature: CreatureClass, effect: BuffApiClass }[] = [];
    this.context.creatures
      .filter(item => item.effects && item.effects.length)
      .forEach(creature => {
        creature.effects
          .filter(item => item.charge > 0)
          .forEach(effect => {
            effects.push({creature, effect});
          });
      });
    return effects;
  }
}
