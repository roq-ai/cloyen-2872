interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
  ownerAbilities: string[];
  customerAbilities: string[];
  getQuoteUrl: string;
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Marketing Manager'],
  customerRoles: ['Customer'],
  tenantRoles: ['Business Owner', 'Marketing Manager', 'Ad Campaign Specialist'],
  tenantName: 'Client',
  applicationName: 'Cloyen',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
  customerAbilities: ['View ads from a client.'],
  ownerAbilities: [
    'Manage Client profiles',
    'Invite Business Owner or Ad Campaign Specialist to a Client profile',
    'Disconnect a Client profile from an ad platform',
    'Connect a Client profile to an ad platform',
  ],
  getQuoteUrl: 'https://app.roq.ai/proposal/1587c4cb-580d-489a-8c9c-dac14667ea0d',
};
