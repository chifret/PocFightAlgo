import {Injector} from '@angular/core';
import {FightHelper} from '../../helpers/fight.helper';
import {LogService} from '../../service/log.service';

export abstract class BuffFightClass {

  fightHelper: FightHelper;
  logService: LogService;

  constructor(injector: Injector) {
    this.fightHelper = injector.get(FightHelper);
    this.logService = injector.get(LogService);
  }
}
