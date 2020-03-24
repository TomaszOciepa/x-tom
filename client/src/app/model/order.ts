import { User } from './user';

export interface Order {
  orders_id: number;
  orders_payments_sum: number;
  orders_number: number;
  orders_number_delivery_days: number;
  orders_status: string;
  orders_delivery_method: string;
  orders_payments_method: string;
  orders_firstName:  string;
  orders_lastName: string;
  orders_street: string;
  orders_zipCode: string;
  orders_city: string;
  orders_email:  string;
  orders_phoneNumber: number;
  orders_date_time: Date;
  orders_date_time_delivery: Date
  user: User;
  }