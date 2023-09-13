import axios from 'axios';
import queryString from 'query-string';
import { AdCampaignInterface, AdCampaignGetQueryInterface } from 'interfaces/ad-campaign';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdCampaigns = async (
  query?: AdCampaignGetQueryInterface,
): Promise<PaginatedInterface<AdCampaignInterface>> => {
  const response = await axios.get('/api/ad-campaigns', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAdCampaign = async (adCampaign: AdCampaignInterface) => {
  const response = await axios.post('/api/ad-campaigns', adCampaign);
  return response.data;
};

export const updateAdCampaignById = async (id: string, adCampaign: AdCampaignInterface) => {
  const response = await axios.put(`/api/ad-campaigns/${id}`, adCampaign);
  return response.data;
};

export const getAdCampaignById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ad-campaigns/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAdCampaignById = async (id: string) => {
  const response = await axios.delete(`/api/ad-campaigns/${id}`);
  return response.data;
};
