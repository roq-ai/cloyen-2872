import axios from 'axios';
import queryString from 'query-string';
import { AdPlatformInterface, AdPlatformGetQueryInterface } from 'interfaces/ad-platform';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getAdPlatforms = async (
  query?: AdPlatformGetQueryInterface,
): Promise<PaginatedInterface<AdPlatformInterface>> => {
  const response = await axios.get('/api/ad-platforms', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createAdPlatform = async (adPlatform: AdPlatformInterface) => {
  const response = await axios.post('/api/ad-platforms', adPlatform);
  return response.data;
};

export const updateAdPlatformById = async (id: string, adPlatform: AdPlatformInterface) => {
  const response = await axios.put(`/api/ad-platforms/${id}`, adPlatform);
  return response.data;
};

export const getAdPlatformById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/ad-platforms/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteAdPlatformById = async (id: string) => {
  const response = await axios.delete(`/api/ad-platforms/${id}`);
  return response.data;
};
