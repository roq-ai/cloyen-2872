import * as yup from 'yup';

export const customerAdViewValidationSchema = yup.object().shape({
  view_date: yup.date().required(),
  customer_id: yup.string().nullable().required(),
  ad_campaign_id: yup.string().nullable().required(),
});
