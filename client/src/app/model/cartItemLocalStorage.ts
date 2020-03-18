import { ProductTest } from './productTest';

export interface CartItemLocalStorage{
    cart_id:number,
    cart_amount:number
    product:ProductTest,
}