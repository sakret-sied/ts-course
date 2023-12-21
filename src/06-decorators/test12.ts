import UserService from './classes/user-service.js';
import { CreatedAtType } from './types/created-at-type.js';

console.log((new UserService() as UserService & CreatedAtType).createdAt);
