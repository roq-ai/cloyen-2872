import * as yup from 'yup';

export const adCampaignValidationSchema = yup.object().shape({
  name: yup.string().required(),
  start_date: yup.date().required(),
  end_date: yup.date().required(),
  client_id: yup.string().nullable().required(),
  platform_id: yup.string().nullable().required(),
});
