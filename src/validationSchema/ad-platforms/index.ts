import * as yup from 'yup';

export const adPlatformValidationSchema = yup.object().shape({
  name: yup.string().required(),
});
