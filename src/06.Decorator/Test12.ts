interface IUserService {
  users: number;
  getUsersInDatabase(): number;
}

@CreatedAt()
class UserService implements IUserService {
  users: number = 1000;

  getUsersInDatabase(): number {
    return this.users;
  }
}

function CreatedAt(date: Date = new Date()) {
  return <T extends { new (...args: any[]): {} }>(constructor: T) => {
    return class extends constructor {
      createdAt = date;
    };
  };
}

type CreatedAt = {
  createdAt: Date;
};

console.log((new UserService() as UserService & CreatedAt).createdAt);
