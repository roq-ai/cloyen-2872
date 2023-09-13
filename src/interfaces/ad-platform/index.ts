import { AdCampaignInterface } from 'interfaces/ad-campaign';
import { GetQueryInterface } from 'interfaces';

export interface AdPlatformInterface {
  id?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  ad_campaign?: AdCampaignInterface[];

  _count?: {
    ad_campaign?: number;
  };
}

export interface AdPlatformGetQueryInterface extends GetQueryInterface {
  id?: string;
  name?: string;
}
