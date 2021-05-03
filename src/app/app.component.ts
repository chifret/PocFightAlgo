import {Component, OnDestroy, OnInit} from '@angular/core';
import {ContextClass} from './_core/classes/context.class';
import {LogService} from './_core/service/log.service';
import {Subscription} from 'rxjs';
import {FightHelper} from './_core/helpers/fight.helper';
import {ChargeEventFightClass} from './_core/classes/fight/events/charge-event-fight.class';
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
              private fightHelper: FightHelper) {
  }

  ngOnInit(): void {
    this.logServiceSubscription = this.logService.output.subscribe(log => {
      this.logs.push(log);
    });
    // this.context.mockInit();
    this.contextService.context = new ContextClass().mockInit();

    setTimeout(() => {
      this.mockFight();
    }, 1000);
  }

  ngOnDestroy(): void {
    this.logServiceSubscription.unsubscribe();
  }

  mockFight(): void {
    this.fightHelper.resolveEvent({
      attacker: 'El Porko Rosso',
      target: 'Pistol Chimp\'',
      type: 'ChargeEventFightClass'
    });
  }
}
