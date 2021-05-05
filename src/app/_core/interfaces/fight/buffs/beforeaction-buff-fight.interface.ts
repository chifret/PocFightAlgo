import {BuffApiClass} from '../../../classes/api/buff-api.class';
import {CreatureClass} from '../../../classes/creature.class';

export interface BeforeactionBuffFightInterface {
  beforeaction(effect: { effect: BuffApiClass, creature: CreatureClass }, action: any): void;
}
