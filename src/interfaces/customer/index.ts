import { CustomerAdViewInterface } from 'interfaces/customer-ad-view';
import { GetQueryInterface } from 'interfaces';

export interface CustomerInterface {
  id?: string;
  first_name: string;
  last_name: string;
  email: string;
  created_at?: any;
  updated_at?: any;
  customer_ad_view?: CustomerAdViewInterface[];

  _count?: {
    customer_ad_view?: number;
  };
}

export interface CustomerGetQueryInterface extends GetQueryInterface {
  id?: string;
  first_name?: string;
  last_name?: string;
  email?: string;
}
