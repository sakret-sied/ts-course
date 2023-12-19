import 'reflect-metadata';
import { IUserService } from '../Interfaces/IUserService.js';

@CreatedAt()
export default class UserService implements IUserService {
  @Max(100)
  private _users: number = 1000;

  @Catch({ rethrow: false })
  public getUsersInDatabase(users: number): number {
    console.log(this._users, users);
    throw new Error('404');
  }

  public getSome(@Positive() some: number = 1) {
    console.log(some);
  }
}

function CreatedAt(date: Date = new Date()) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      createdAt = date;
    };
  };
}

function Catch({ rethrow }: { rethrow: boolean }) {
  return <T extends TypedPropertyDescriptor<(...args: any[]) => any>>(
    _target: Object,
    _propertyKey: string,
    descriptor: T
  ): T | void => {
    let method = descriptor.value!;
    descriptor.value = function () {
      try {
        method.call(this, ...arguments);
      } catch (error) {
        const e = error as Error;
        console.log(e.message);
        if (rethrow) {
          throw e;
        }
      }
    };
  };
}

function Max(max: number) {
  return (target: Object, propertyKey: string) => {
    let value: number;
    const setter = function (newValue: number) {
      if (newValue > max) {
        console.log('More than max value');
      } else {
        value = newValue;
      }
    };
    const getter = function () {
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      set: setter,
      get: getter,
    });
  };
}

function Positive() {
  return (target: Object, propertyKey: string, _: number) => {
    console.log(Reflect.getOwnMetadata('design:type', target, propertyKey));
    console.log(
      Reflect.getOwnMetadata('design:paramtypes', target, propertyKey)
    );
    console.log(
      Reflect.getOwnMetadata('design:returntype', target, propertyKey)
    );
  };
}
