import PrototypeInterface from '../Interfaces/prototype-interface.js';

export default class UserHistory implements PrototypeInterface<UserHistory> {
  public createdAt: Date;

  constructor(public email: string, public name: string) {}

  public clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}
