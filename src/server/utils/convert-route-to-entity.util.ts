const mapping: Record<string, string> = {
  'ad-campaigns': 'ad_campaign',
  'ad-platforms': 'ad_platform',
  clients: 'client',
  customers: 'customer',
  'customer-ad-views': 'customer_ad_view',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
