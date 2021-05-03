import {Injectable} from '@angular/core';
import {ContextClass} from '../classes/context.class';

@Injectable()
export class ContextService {
  // @ts-ignore
  context: ContextClass = null;
}
