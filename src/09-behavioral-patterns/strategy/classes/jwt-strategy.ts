import AuthStrategyInterface from '../interfaces/auth-strategy-interface.js';
import User from './user.js';

export default class JWTStrategy implements AuthStrategyInterface {
  public auth(user: User): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}
