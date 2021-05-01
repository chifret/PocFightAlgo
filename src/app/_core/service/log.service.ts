import {EventEmitter, Injectable, Output} from '@angular/core';

@Injectable()
export class LogService {
  @Output() output: EventEmitter<any> = new EventEmitter();

  log(log: string): void {
    this.output.emit(log);
  }
}
