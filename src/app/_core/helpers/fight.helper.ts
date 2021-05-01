import {EventFightClass} from '../classes/fight/event-fight.class';
import {ObjectService} from '../service/object.service';
import {Injectable} from '@angular/core';

@Injectable()
export class FightHelper {

  eventFightClassLoader: ObjectService<EventFightClass>;

  // constructor(private context: Object) {
  // }
  constructor() {
    this.eventFightClassLoader = new ObjectService<EventFightClass>(window);

    // var example = loader.getInstance('Example', 'A', 'B');
  }

  resolveEvent(input: any): void {

    // const event: EventFightClass = Object.create(window[input.type].prototype);
    // event.constructor.apply(event);
    // console.log(event);

    const event = this.eventFightClassLoader.getInstance(input.type);

  }

  resolveMove(input: any): void {
  }

  resolveBuff(input: any): void {
  }
}
