import { User } from './user';
import { ProductTest } from './productTest';

export interface CartItemUser{
    order_item_amount:number
    product: ProductTest
    user:User
}