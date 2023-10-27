'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import FormInput from './FormInput';

const initialFormFields = {
  title: '',
  description: '',
  category: 'Hardware Problem',
  priority: 1,
  progress: 0,
  status: 'not started',
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
    <div>
      <h2 className="mb-4 tracking-widest">Create your ticket</h2>
      <form className="flex flex-col gap-8">
        <FormInput
          name="Title"
          value={formFields.title}
          handleChange={handleChange}
        />
        <FormInput
          name="Description"
          value={formFields.description}
          handleChange={handleChange}
        />
        <FormInput
          name="Category"
          value={formFields.category}
          handleChange={handleChange}
        />
      </form>
    </div>
  );
};

export default TicketForm;
