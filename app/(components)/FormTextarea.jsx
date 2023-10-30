import React from "react";

const FormTextarea = ({ name, required = true, value, handleChange }) => {
  const id = name.toLowerCase();
  return (
    <div className="flex flex-col gap-2 text-default-text/80">
      <label htmlFor={id}>{name}</label>
      <textarea
        id={id}
        name={id}
        onChange={handleChange}
        required={required}
        value={value}
        rows={5}
        className="resize-none"
      />
    </div>
  );
};

export default FormTextarea;
