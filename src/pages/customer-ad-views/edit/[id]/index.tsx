import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Box,
  Spinner,
  FormErrorMessage,
  Switch,
  Flex,
  Center,
} from '@chakra-ui/react';
import Breadcrumbs from 'components/breadcrumb';
import DatePicker from 'components/date-picker';
import { Error } from 'components/error';
import { FormWrapper } from 'components/form-wrapper';
import { NumberInput } from 'components/number-input';
import { SelectInput } from 'components/select-input';
import { AsyncSelect } from 'components/async-select';
import { TextInput } from 'components/text-input';
import AppLayout from 'layout/app-layout';
import { FormikHelpers, useFormik } from 'formik';
import { useRouter } from 'next/router';
import { FunctionComponent, useState, useRef } from 'react';
import * as yup from 'yup';
import useSWR from 'swr';
import { AccessOperationEnum, AccessServiceEnum, requireNextAuth, withAuthorization } from '@roq/nextjs';
import { compose } from 'lib/compose';
import { ImagePicker } from 'components/image-file-picker';
import { getCustomerAdViewById, updateCustomerAdViewById } from 'apiSdk/customer-ad-views';
import { customerAdViewValidationSchema } from 'validationSchema/customer-ad-views';
import { CustomerAdViewInterface } from 'interfaces/customer-ad-view';
import { CustomerInterface } from 'interfaces/customer';
import { AdCampaignInterface } from 'interfaces/ad-campaign';
import { getCustomers } from 'apiSdk/customers';
import { getAdCampaigns } from 'apiSdk/ad-campaigns';

function CustomerAdViewEditPage() {
  const router = useRouter();
  const id = router.query.id as string;

  const { data, error, isLoading, mutate } = useSWR<CustomerAdViewInterface>(
    () => (id ? `/customer-ad-views/${id}` : null),
    () => getCustomerAdViewById(id),
  );
  const [formError, setFormError] = useState(null);

  const handleSubmit = async (values: CustomerAdViewInterface, { resetForm }: FormikHelpers<any>) => {
    setFormError(null);
    try {
      const updated = await updateCustomerAdViewById(id, values);
      mutate(updated);
      resetForm();
      router.push('/customer-ad-views');
    } catch (error: any) {
      if (error?.response.status === 403) {
        setFormError({ message: "You don't have permisisons to update this resource" });
      } else {
        setFormError(error);
      }
    }
  };

  const formik = useFormik<CustomerAdViewInterface>({
    initialValues: data,
    validationSchema: customerAdViewValidationSchema,
    onSubmit: handleSubmit,
    enableReinitialize: true,
    validateOnChange: false,
    validateOnBlur: false,
  });

  return (
    <AppLayout
      breadcrumbs={
        <Breadcrumbs
          items={[
            {
              label: 'Customer Ad Views',
              link: '/customer-ad-views',
            },
            {
              label: 'Update Customer Ad View',
              isCurrent: true,
            },
          ]}
        />
      }
    >
      <Box rounded="md">
        <Box mb={4}>
          <Text as="h1" fontSize={{ base: '1.5rem', md: '1.875rem' }} fontWeight="bold" color="base.content">
            Update Customer Ad View
          </Text>
        </Box>
        {(error || formError) && (
          <Box mb={4}>
            <Error error={error || formError} />
          </Box>
        )}

        <FormWrapper onSubmit={formik.handleSubmit}>
          <FormControl id="view_date" mb="4">
            <FormLabel fontSize="1rem" fontWeight={600}>
              View Date
            </FormLabel>
            <DatePicker
              selected={formik.values?.view_date ? new Date(formik.values?.view_date) : null}
              onChange={(value: Date) => formik.setFieldValue('view_date', value)}
            />
          </FormControl>
          <AsyncSelect<CustomerInterface>
            formik={formik}
            name={'customer_id'}
            label={'Select Customer'}
            placeholder={'Select Customer'}
            fetcher={getCustomers}
            labelField={'email'}
          />
          <AsyncSelect<AdCampaignInterface>
            formik={formik}
            name={'ad_campaign_id'}
            label={'Select Ad Campaign'}
            placeholder={'Select Ad Campaign'}
            fetcher={getAdCampaigns}
            labelField={'name'}
          />
          <Flex justifyContent={'flex-start'}>
            <Button
              isDisabled={formik?.isSubmitting}
              bg="state.info.main"
              color="base.100"
              type="submit"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              _hover={{
                bg: 'state.info.main',
                color: 'base.100',
              }}
            >
              Submit
            </Button>
            <Button
              bg="neutral.transparent"
              color="neutral.main"
              type="button"
              display="flex"
              height="2.5rem"
              padding="0rem 1rem"
              justifyContent="center"
              alignItems="center"
              gap="0.5rem"
              mr="4"
              onClick={() => router.push('/customer-ad-views')}
              _hover={{
                bg: 'neutral.transparent',
                color: 'neutral.main',
              }}
            >
              Cancel
            </Button>
          </Flex>
        </FormWrapper>
      </Box>
    </AppLayout>
  );
}

export default compose(
  requireNextAuth({
    redirectTo: '/',
  }),
  withAuthorization({
    service: AccessServiceEnum.PROJECT,
    entity: 'customer_ad_view',
    operation: AccessOperationEnum.UPDATE,
  }),
)(CustomerAdViewEditPage);
