import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContextClass} from './_core/classes/context.class';
import {LogService} from './_core/service/log.service';
import {Subscription} from 'rxjs';
import {FightHelper} from './_core/helpers/fight.helper';
import {ChargeEventFightClass} from './_core/classes/fight/events/charge-event-fight.class';
import * as fightEvents from './_core/classes/fight/events/_lib-event-fight.class';
import * as buffEvents from './_core/classes/fight/buffs/_lib-buff-fight.class';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {
  // @ts-ignore
  logServiceSubscription: Subscription = null;
  logs: string[] = [];
  context: ContextClass = new ContextClass();

  constructor(private logService: LogService,
              private fightHelper: FightHelper) {
  }

  ngOnInit(): void {
    this.logServiceSubscription = this.logService.output.subscribe(log => {
      this.logs.push(log);
    });
    this.context.mockInit();

    setTimeout(() => {
      this.mockFight();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.logServiceSubscription.unsubscribe();
  }

  mockFight(): void {
    const machinQuiCharge = {
      attacker: 1,
      target: 2,
      type: 'ChargeEventFightClass'
    };

    // this.fightHelper.resolveEvent(machinQuiCharge);


    // const greeter = Object.create(window['ChargeEventFightClass'].prototype);
    // greeter.constructor.apply(greeter, []);
    // console.log(greeter);

    // var newInstance = Object.create((window as any['ChargeEventFightClass'] as any).prototype);
    // newInstance.constructor.apply(newInstance, []);
    // console.log(newInstance);

    // var test = new ChargeEventFightClass();
    // const newClass: any = new (window as any)['ChargeEventFightClass']();

    let test: any;
    test = new fightEvents['ChargeEventFightClass']();
    console.log('ChargeEventFightClass', test);

  }
}
