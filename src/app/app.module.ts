import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LogService} from './_core/service/log.service';
import {ObjectService} from './_core/service/object.service';
import {FightHelper} from './_core/helpers/fight.helper';

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
    ObjectService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
