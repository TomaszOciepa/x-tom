import { User } from './user';
import { ProductTest } from './productTest';

export interface CartItemUser{
    cart_amount:number
    product: ProductTest
    user:User
}