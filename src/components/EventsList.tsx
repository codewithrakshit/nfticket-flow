import EventCard from "./EventCard";

const EventsList = () => {
  const mockEvents = [
    {
      title: "Electronic Music Festival 2024",
      date: "March 15, 2025 - 8:00 PM",
      location: "Madison Square Garden, NYC",
      price: "0.15",
      available: 850,
      total: 1000
    },
    {
      title: "Crypto Conference Miami",
      date: "April 22, 2025 - 10:00 AM",
      location: "Miami Beach Convention Center",
      price: "0.08",
      available: 450,
      total: 500
    },
    {
      title: "NFT Art Gallery Opening",
      date: "May 8, 2025 - 6:00 PM",
      location: "Chelsea Art District, NYC",
      price: "0.05",
      available: 95,
      total: 100
    },
    {
      title: "Web3 Developer Summit",
      date: "June 12, 2025 - 9:00 AM",
      location: "Silicon Valley Tech Park",
      price: "0.12",
      available: 0,
      total: 750
    },
    {
      title: "Decentralized Finance Forum",
      date: "July 3, 2025 - 2:00 PM",
      location: "Financial District, NYC",
      price: "0.20",
      available: 300,
      total: 300
    },
    {
      title: "Metaverse Gaming Expo",
      date: "August 18, 2025 - 11:00 AM",
      location: "Los Angeles Convention Center",
      price: "0.10",
      available: 1200,
      total: 1500
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 gradient-crypto bg-clip-text text-transparent">
            Live Events
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover and mint tickets for upcoming events. Each ticket is a unique NFT on the blockchain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockEvents.map((event, index) => (
            <EventCard
              key={index}
              title={event.title}
              date={event.date}
              location={event.location}
              price={event.price}
              available={event.available}
              total={event.total}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsList;