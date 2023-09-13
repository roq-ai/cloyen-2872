import { CustomerAdViewInterface } from 'interfaces/customer-ad-view';
import { ClientInterface } from 'interfaces/client';
import { AdPlatformInterface } from 'interfaces/ad-platform';
import { GetQueryInterface } from 'interfaces';

export interface AdCampaignInterface {
  id?: string;
  name: string;
  client_id: string;
  platform_id: string;
  start_date: any;
  end_date: any;
  created_at?: any;
  updated_at?: any;
  customer_ad_view?: CustomerAdViewInterface[];
  client?: ClientInterface;
  ad_platform?: AdPlatformInterface;
  _count?: {
    customer_ad_view?: number;
  };
}

export interface AdCampaignGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
  client_id?: string;
  platform_id?: string;
}
