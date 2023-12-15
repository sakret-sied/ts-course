import { Prototype } from '../Interfaces/Prototype.js';

export default class UserHistory implements Prototype<UserHistory> {
  createdAt: Date;

  constructor(public email: string, public name: string) {}

  clone(): UserHistory {
    let target = new UserHistory(this.email, this.name);
    target.createdAt = this.createdAt;
    return target;
  }
}
