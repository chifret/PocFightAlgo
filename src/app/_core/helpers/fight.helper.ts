import {Injectable, Injector} from '@angular/core';
import {ObjectUtils} from '../utils/object.utils';
import {LogService} from '../service/log.service';
import {HasmoveActionsFightInterface} from '../interfaces/fight/actions/hasmove-actions-fight.interface';
import {ContextService} from '../service/context.service';
import {MoveClass} from '../classes/move.class';
import {ActionClass} from '../classes/action.class';

@Injectable()
export class FightHelper {

  // @ts-ignore
  injector: Injector;

  constructor(private logService: LogService,
              private contextService: ContextService) {
  }

  resolveAction(input: ActionClass): void {
    this.logService.log(input.attacker.name + ' annonce un ' + input.type + ' sur ' + input.target.name);
    const event = ObjectUtils.getEventInstance(input.type, this.injector);

    if ((event as any).performMove) {
      this.resolveMove({
        mover: input.attacker,
        type: 'move',
        targetType: 'character',
        target: input.target
      });
    }

    this.contextService.getContextEffects().forEach(effect => {
      const statusType = ObjectUtils.getBuffInstance(effect.effect.type, this.injector);
      if ((statusType as any).beforeaction) {
        (statusType as any).beforeaction(effect, input);
      }
    });

    if ((event as any).performAttack) {
      this.logService.log('PAF');
    }
  }

  resolveMove(input: MoveClass): void {
    if (input.type === 'move') {
      this.contextService.getContextEffects().forEach(effect => {
        const statusType = ObjectUtils.getBuffInstance(effect.effect.type, this.injector);
        if ((statusType as any).beforemove) {
          (statusType as any).beforemove(effect, input);
        }
      });

      this.logService.log(input.mover.name + ' move vers ' + (input.targetType === 'character' ? input.target.name : 'ailleurs'));
    } else {
      this.logService.log(input.mover.name + ' dash vers ' + (input.targetType === 'character' ? input.target.name : 'ailleurs'));
    }
  }
}
