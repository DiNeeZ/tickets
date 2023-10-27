import DeleteBlock from './DeleteBlock';
import PriorityDisplay from './PriorityDisplay';
import ProgressDisplay from './ProgressDisplay';
import StatusDisplay from './StatusDisplay';

const TicketCard = () => {
  return (
    <div className="flex flex-col p-3 m-2 bg-card hover:bg-card-hover rounded-md shadow-lg">
      <div className="flex justify-between mb-3">
        <PriorityDisplay />
        <DeleteBlock />
      </div>
      <h3>Ticket title</h3>
      <hr className="h-px border-0 bg-page mb-2" />
      <p className="whitespace-pre-wrap">
        This is the ticket description! Please do this ticket{' '}
      </p>
      <div className="flex-grow" />
      <div className="flex items-end justify-between mt-2">
        <div className="flex flex-col">
          <p className="text-xs my-1">10/27/2023 11:15AM</p>
          <ProgressDisplay />
        </div>
        <StatusDisplay />
      </div>
    </div>
  );
};

export default TicketCard;
