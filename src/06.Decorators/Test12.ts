import UserService from './Classes/UserService';
import { CreatedAt } from './Types/CreatedAt';

console.log((new UserService() as UserService & CreatedAt).createdAt);
