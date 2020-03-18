import { ProductTest } from './productTest';
import { User } from './user';

export interface CartItem{
    amount:number
    product:ProductTest,
    user:User
}