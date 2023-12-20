import AuthStrategy from '../Interfaces/AuthStrategy.js';
import User from './User.js';

export default class GithubStrategy implements AuthStrategy {
  public auth(user: User): boolean {
    if (user.githubToken) {
      return true;
    }
    return false;
  }
}
