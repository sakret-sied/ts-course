import User from '../classes/user.js';

export default interface AuthStrategyInterface {
  auth(user: User): boolean;
}
