import {Component, Injector, OnDestroy, OnInit} from '@angular/core';
import {ContextClass} from './_core/classes/context.class';
import {LogService} from './_core/service/log.service';
import {Subscription} from 'rxjs';
import {FightHelper} from './_core/helpers/fight.helper';
import {ChargeActionsFightClass} from './_core/classes/fight/actions/charge-actions-fight.class';
import {ContextService} from './_core/service/context.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // @ts-ignore
  logServiceSubscription: Subscription = null;
  logs: string[] = [];

  constructor(private logService: LogService,
              private contextService: ContextService,
              private fightHelper: FightHelper,
              private injector: Injector) {
    fightHelper.injector = injector;
  }

  ngOnInit(): void {
    this.logServiceSubscription = this.logService.output.subscribe(log => {
      this.logs.push(log);
    });
    this.contextService.context = new ContextClass().mockInit();

    this.mockFight();
  }

  ngOnDestroy(): void {
    this.logServiceSubscription.unsubscribe();
  }

  mockFight(): void {
    this.fightHelper.resolveAction({
      // @ts-ignore
      attacker: this.contextService.context.creatures.find(item => item.id === 1),
      // @ts-ignore
      target: this.contextService.context.creatures.find(item => item.id === 2),
      type: 'ChargeActionsFightClass'
    });
    this.logService.log('(Enfin, l\'autre a dash, donc l\'attaque de la charge c\'est mort, mais j\'ai pas testé les posals !)');
  }
}
