import React from 'react';

const FormField = ({ name }) => {
  return (
    <>
      <label htmlFor={name}>{name}</label>
      <input name={name} />
    </>
  );
};

export default FormField;
