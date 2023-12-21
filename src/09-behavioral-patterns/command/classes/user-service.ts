import User from './user.js';

export default class UserService {
  public saveUser(user: User) {
    console.log(`Save user with id: ${user.userId}`);
  }

  public deleteUser(userId: number) {
    console.log(`Delete user with id: ${userId}`);
  }
}
