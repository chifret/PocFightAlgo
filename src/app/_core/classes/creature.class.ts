import {BuffApiClass} from './api/buff-api.class';

export class CreatureClass {
  id = -1;
  name = '';
  squadId = -1;
  effects: BuffApiClass[] = [];
  status: BuffApiClass[] = [];
}
