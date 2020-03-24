import { ProductTest } from './productTest';

export interface OrderItem {
    order_item_id: number;
    order_item_number: number;
    order_item_amount: number;
    order_item_price: number;
    product: ProductTest;
  }