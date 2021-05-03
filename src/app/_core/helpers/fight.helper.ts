import {EventFightClass} from '../classes/fight/event-fight.class';
import {Injectable} from '@angular/core';
import {ObjectUtils} from '../utils/object.utils';
import {LogService} from '../service/log.service';
import {HasmoveEventsFightInterface} from '../interfaces/fight/events/hasmove-events-fight.interface';
import {HasdashEventsFightInterface} from '../interfaces/fight/events/hasdash-events-fight.interface';

@Injectable()
export class FightHelper {

  constructor(private logService: LogService) {
  }

  resolveEvent(input: any): void {
    this.logService.log(input.attacker + ' annonce un ' + input.type + ' sur ' + input.target);
    const event = ObjectUtils.getEventInstance(input.type);

    // @ts-ignore
    if ((event as HasmoveEventsFightInterface).performMove) {
      this.resolveMove({
        mover: input.attacker,
        type: 'move',
        targetType: 'character',
        target: input.target
      });
    }

    // @ts-ignore
    if ((event as HasdashEventsFightInterface).performDash) {
      this.logService.log('It is a HasdashEventsFightInterface');
    }
  }


  resolveMove(input: any): void {
    if (input.type === 'move') {

      this.logService.log('Check si AO');

      if (input.targetType === 'character') {
        this.logService.log(input.mover + ' move vers ' + input.target);
      } else {
        this.logService.log(input.mover + ' move en ' + input.target);
      }
    } else if (input.type === 'move') {
      if (input.targetType === 'character') {
        this.logService.log(input.mover + ' dash vers ' + input.target);
      } else {
        this.logService.log(input.mover + ' dash en ' + input.target);
      }
    }
  }

  resolveBuff(input: any): void {
  }
}
