import {Injector} from '@angular/core';
import {FightHelper} from '../../helpers/fight.helper';
import {LogService} from '../../service/log.service';

export abstract class BuffFightClass {

  isBuff = false;
  beforeAttack = false;
  beforeMove = false;

  fightHelper: FightHelper;
  logService: LogService;

  constructor(injector: Injector) {
    this.fightHelper = injector.get(FightHelper);
    this.logService = injector.get(LogService);
  }
}
