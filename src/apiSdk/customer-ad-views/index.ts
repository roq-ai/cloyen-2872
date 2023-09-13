import axios from 'axios';
import queryString from 'query-string';
import { CustomerAdViewInterface, CustomerAdViewGetQueryInterface } from 'interfaces/customer-ad-view';
import { GetQueryInterface, PaginatedInterface } from '../../interfaces';

export const getCustomerAdViews = async (
  query?: CustomerAdViewGetQueryInterface,
): Promise<PaginatedInterface<CustomerAdViewInterface>> => {
  const response = await axios.get('/api/customer-ad-views', {
    params: query,
    headers: { 'Content-Type': 'application/json' },
  });
  return response.data;
};

export const createCustomerAdView = async (customerAdView: CustomerAdViewInterface) => {
  const response = await axios.post('/api/customer-ad-views', customerAdView);
  return response.data;
};

export const updateCustomerAdViewById = async (id: string, customerAdView: CustomerAdViewInterface) => {
  const response = await axios.put(`/api/customer-ad-views/${id}`, customerAdView);
  return response.data;
};

export const getCustomerAdViewById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/customer-ad-views/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteCustomerAdViewById = async (id: string) => {
  const response = await axios.delete(`/api/customer-ad-views/${id}`);
  return response.data;
};
