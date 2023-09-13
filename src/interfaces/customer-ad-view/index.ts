import { CustomerInterface } from 'interfaces/customer';
import { AdCampaignInterface } from 'interfaces/ad-campaign';
import { GetQueryInterface } from 'interfaces';

export interface CustomerAdViewInterface {
  id?: string;
  customer_id: string;
  ad_campaign_id: string;
  view_date: any;
  created_at?: any;
  updated_at?: any;

  customer?: CustomerInterface;
  ad_campaign?: AdCampaignInterface;
  _count?: {};
}

export interface CustomerAdViewGetQueryInterface extends GetQueryInterface {
  id?: string;
  customer_id?: string;
  ad_campaign_id?: string;
}
