import AuthStrategyInterface from '../interfaces/auth-strategy-interface.js';
import User from './user.js';

export default class Auth {
  constructor(private strategy: AuthStrategyInterface) {}

  public setStrategy(strategy: AuthStrategyInterface) {
    this.strategy = strategy;
  }

  public authUser(user: User): boolean {
    return this.strategy.auth(user);
  }
}
