import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EventsList from "@/components/EventsList";
import CreateEventForm from "@/components/CreateEventForm";
import Scanner from "@/components/Scanner";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <Hero />
        
        <section id="events">
          <EventsList />
        </section>
        
        <section id="create">
          <CreateEventForm />
        </section>
        
        <section id="scan">
          <Scanner />
        </section>
      </main>

      <footer className="border-t border-border/40 py-8 px-4 mt-16">
        <div className="container mx-auto text-center">
          <div className="gradient-crypto p-2 rounded-lg inline-block mb-4">
            <div className="text-2xl">⚡</div>
          </div>
          <p className="text-muted-foreground">
            Built with love for the decentralized future
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
