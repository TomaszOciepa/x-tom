import { ProductTest } from './productTest';

export interface CartItemLocalStorage{
    order_item_id:number,
    order_item_amount:number
    product:ProductTest,
}