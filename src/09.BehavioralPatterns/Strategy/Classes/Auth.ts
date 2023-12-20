import AuthStrategy from '../Interfaces/AuthStrategy.js';
import User from './User.js';

export default class Auth {
  constructor(private strategy: AuthStrategy) {}

  public setStrategy(strategy: AuthStrategy) {
    this.strategy = strategy;
  }

  public authUser(user: User): boolean {
    return this.strategy.auth(user);
  }
}
