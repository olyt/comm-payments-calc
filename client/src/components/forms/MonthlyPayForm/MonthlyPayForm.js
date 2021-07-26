import React from 'react';
import { useFormik } from 'formik';
import FormField from '../FormField/FormField';

const MonthlyPayForm = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: (values) => console.log(values),
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <FormField name="ololo" />
    </form>
  );
};

export default MonthlyPayForm;
