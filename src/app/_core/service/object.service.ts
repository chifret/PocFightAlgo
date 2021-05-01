import {Injectable} from '@angular/core';

@Injectable()
export class ObjectService<T> {
  // tslint:disable-next-line:ban-types
  constructor(private context: Object) {
    console.log(context);
  }

  getInstance(name: string, ...args: any[]): T {
    // @ts-ignore
    const instance = Object.create(this.context[name].prototype);
    instance.constructor.apply(instance, args);
    return instance as T;
  }
}
