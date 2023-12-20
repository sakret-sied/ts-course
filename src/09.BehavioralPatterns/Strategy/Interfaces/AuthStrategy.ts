import User from '../Classes/User.js';

export default interface AuthStrategy {
  auth(user: User): boolean;
}
