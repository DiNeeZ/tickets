import React from "react";

const FormSelect = ({ options, name, value, handleChange }) => {
  const id = name.toLowerCase();
  return (
    <div className="flex flex-col gap-2 text-default-text/80">
      <label htmlFor={id}>{name}</label>
      <select
        className="border-r-transparent border-r-[16px]"
        name={id}
        id={id}
        value={value}
        onChange={handleChange}
      >
        {options.map((value) => (
          <option key={value.toLowerCase().replace(" ", "")} value={value}>
            {value}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
