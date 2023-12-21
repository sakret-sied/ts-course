import AuthStrategyInterface from '../interfaces/auth-strategy-interface.js';
import User from './user.js';

export default class GithubStrategy implements AuthStrategyInterface {
  public auth(user: User): boolean {
    if (user.githubToken) {
      return true;
    }
    return false;
  }
}
