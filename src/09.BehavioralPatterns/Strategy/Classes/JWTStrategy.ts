import AuthStrategy from '../Interfaces/AuthStrategy.js';
import User from './User.js';

export default class JWTStrategy implements AuthStrategy {
  public auth(user: User): boolean {
    if (user.jwtToken) {
      return true;
    }
    return false;
  }
}
