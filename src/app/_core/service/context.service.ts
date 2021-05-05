import {Injectable} from '@angular/core';
import {ContextClass} from '../classes/context.class';

@Injectable()
export class ContextService {
  // @ts-ignore
  context: ContextClass = null;

  getContextEffects(): {
    creature: {
      id: number,
      name: string,
      effects: { date: Date, type: string }[],
      status: { date: Date, type: string }[]
    }, effect: {
      date: Date,
      type: string
    }
  }[] {
    const effects: {
      creature: {
        id: number,
        name: string,
        effects: { date: Date, type: string }[],
        status: { date: Date, type: string }[]
      }, effect: {
        date: Date,
        type: string
      }
    }[] = [];
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
