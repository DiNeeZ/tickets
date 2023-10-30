import React from "react";

const FormInput = ({
  name,
  type = "text",
  required = true,
  value,
  handleChange,
}) => {
  const id = name.toLowerCase();
  return (
    <div className="flex flex-col gap-2 text-default-text/80">
      <label htmlFor={id}>{name}</label>
      <div className="border border-transparent focus-within:border-default-text/50 rounded">
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          value={value}
          onChange={handleChange}
        />
      </div>
    </div>
  );
};

export default FormInput;
