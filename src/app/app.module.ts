import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogService} from './_core/service/log.service';
import {FightHelper} from './_core/helpers/fight.helper';
import {ContextService} from './_core/service/context.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    FightHelper,
    LogService,
    ContextService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
