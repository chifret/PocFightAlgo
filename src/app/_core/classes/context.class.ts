import {BuffApiClass} from './api/buff-api.class';
import {CreatureClass} from './creature.class';

export class ContextClass {
  creatures: CreatureClass[] = [];

  mockInit(): ContextClass {
    this.creatures.push({
      id: 1,
      name: 'Porko Rosso',
      squadId: 1,
      effects: [],
      status: []
    });

    this.creatures.push({
      id: 2,
      name: 'El Pistolero',
      squadId: 2,
      effects: [{
        date: new Date('Fri, 26 Sep 2014 18:30:00 GMT'),
        type: 'FallbackshotBuffFightClass',
        initCharge: 1,
        charge: 1
      }],
      status: []
    });

    this.creatures.push({
      id: 3,
      name: 'Don Interposito',
      squadId: 2,
      effects: [{
        date: new Date('Fri, 26 Sep 2014 18:32:00 GMT'),
        type: 'OpportunityattackBuffFightClass',
        initCharge: 1,
        charge: 1
      }],
      status: []
    });

    return this;
  }
}
