import Auth from './classes/auth.js';
import GithubStrategy from './classes/github-strategy.js';
import JWTStrategy from './classes/jwt-strategy.js';
import User from './classes/user.js';

const user = new User();
user.jwtToken = 'token';
const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GithubStrategy());
console.log(auth.authUser(user));
