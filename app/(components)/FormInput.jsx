import React from 'react';

const FormInput = ({
  name,
  type = 'text',
  required = true,
  value,
  handleChange,
}) => {
  const id = name.toLowerCase();
  return (
    <div className="flex flex-col gap-2 text-default-text/80">
      <label htmlFor={id}>{name}</label>
      <input
        id={id}
        name={id}
        type={type}
        required={required}
        value={value}
        onChange={handleChange}
        className="text-dark-text rounded px-4 py-2"
      />
    </div>
  );
};

export default FormInput;
