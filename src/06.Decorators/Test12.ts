import UserService from './Classes/UserService.js';
import { CreatedAt } from './Types/CreatedAt.js';

console.log((new UserService() as UserService & CreatedAt).createdAt);
