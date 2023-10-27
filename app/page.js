import TicketCard from './(components)/TicketCard';

export default function Home() {
  return (
    <main className="p-5">
      <div className="md:grid grid-cols-2 xl:grid-cols-4">
        <TicketCard />
        <TicketCard />
        <TicketCard />
        <TicketCard />
      </div>
    </main>
  );
}
