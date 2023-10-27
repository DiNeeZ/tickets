import TicketForm from '@/app/(components)/TicketForm';
import React from 'react';

const TicketPage = ({ params }) => {
  const { id } = params;
  return (
    <div className="flex justify-center my-8">
      <TicketForm />
    </div>
  );
};

export default TicketPage;
