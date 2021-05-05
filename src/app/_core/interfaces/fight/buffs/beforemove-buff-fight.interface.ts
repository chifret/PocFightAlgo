import {MoveClass} from '../../../classes/move.class';
import {BuffApiClass} from '../../../classes/api/buff-api.class';
import {CreatureClass} from '../../../classes/creature.class';

export interface BeforemoveBuffFightInterface {
  beforemove(effect: { effect: BuffApiClass, creature: CreatureClass }, move: MoveClass): void;
}
