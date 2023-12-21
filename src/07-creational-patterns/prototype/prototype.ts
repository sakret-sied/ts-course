import UserHistory from './classes/user-history.js';

let user1 = new UserHistory('a@a.com', 'Aa');
console.log(user1);
let user2 = user1.clone();
console.log(user2);
