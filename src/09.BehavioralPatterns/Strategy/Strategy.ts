import Auth from './Classes/Auth.js';
import GithubStrategy from './Classes/GithubStrategy.js';
import JWTStrategy from './Classes/JWTStrategy.js';
import User from './Classes/User.js';

const user = new User();
user.jwtToken = 'token';
const auth = new Auth(new JWTStrategy());
console.log(auth.authUser(user));
auth.setStrategy(new GithubStrategy());
console.log(auth.authUser(user));
