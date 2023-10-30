"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FormInput from "./FormInput";
import FormTextarea from "./FormTextarea";
import FormSelect from "./FormSelect";

const formCategories = ["Hardware Problem", "Software Problem", "Project"];

const initialFormFields = {
  title: "",
  description: "",
  category: formCategories[0],
  priority: 1,
  progress: 0,
  status: "not started",
};

const TicketForm = () => {
  const [formFields, setFormFields] = useState(initialFormFields);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormFields((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <form className="flex flex-col gap-8 w-1/2 border border-card">
      <legend className="text-2xl font-bold text-center">
        Create your ticket
      </legend>
      <FormInput
        name="Title"
        value={formFields.title}
        handleChange={handleChange}
      />
      <FormTextarea
        name="Description"
        value={formFields.description}
        handleChange={handleChange}
      />
      <FormSelect
        options={formCategories}
        name="Category"
        value={formFields.category}
        handleChange={handleChange}
      />
    </form>
  );
};

export default TicketForm;
