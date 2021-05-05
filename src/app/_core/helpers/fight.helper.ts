import {Injectable, Injector} from '@angular/core';
import {ObjectUtils} from '../utils/object.utils';
import {LogService} from '../service/log.service';
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

    // if ((event as any).performMove) {
    if (event.hasBuffForAttack) {
      this.logService.log(input.attacker.name + ' se buff !');
    }

    // if ((event as any).performMove) {
    if (event.hasMoveBeforeAttack) {
      this.resolveMove({
        mover: input.attacker,
        type: 'move',
        targetType: 'character',
        target: input.target
      });
    }

    this.contextService.getContextEffects().forEach(effect => {
      const statusType = ObjectUtils.getBuffInstance(effect.effect.type, this.injector);
      // if ((statusType as any).beforeaction) {
      if (statusType.beforeAttack) {
        (statusType as any).beforeaction(effect, input);
      }
    });

    // if ((event as any).performAttack) {
    if (event.isAttack) {
      this.logService.log('PAF');
    }

    // if ((event as any).performMove) {
    if (event.hasBuffForAttack) {
      this.logService.log('Ah ben le buff de ' + input.attacker.name + ' est terminé...');
    }
  }

  resolveMove(input: MoveClass): void {
    if (input.type === 'move') {
      this.contextService.getContextEffects().forEach(effect => {
        const statusType = ObjectUtils.getBuffInstance(effect.effect.type, this.injector);
        // if ((statusType as any).beforemove) {
        if (statusType.beforeMove) {
          (statusType as any).beforemove(effect, input);
        }
      });

      this.logService.log(input.mover.name + ' move vers ' + (input.targetType === 'character' ? input.target.name : 'ailleurs'));
    } else {
      this.logService.log(input.mover.name + ' dash vers ' + (input.targetType === 'character' ? input.target.name : 'ailleurs'));
    }
  }
}
