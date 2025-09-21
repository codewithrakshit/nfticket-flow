import { Button } from "@/components/ui/button";
import { Ticket, Shield, Sparkles } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative py-20 px-4 overflow-hidden">
      <div className="gradient-hero absolute inset-0 opacity-50" />
      
      <div className="container mx-auto text-center relative z-10">
        <div className="animate-float mb-8">
          <div className="gradient-crypto p-4 rounded-full inline-block glow-primary">
            <Ticket className="h-12 w-12 text-white" />
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-crypto bg-clip-text text-transparent animate-glow">
          Decentralized Ticketing
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Create, buy, and validate tickets as NFTs on the blockchain. 
          <br />
          Secure, transparent, and impossible to counterfeit.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="gradient-crypto text-white border-0 glow-primary text-lg px-8 py-4">
            <Sparkles className="mr-2 h-5 w-5" />
            Create Event
          </Button>
          <Button size="lg" variant="outline" className="glass border-primary/50 text-primary hover:bg-primary/10">
            <Shield className="mr-2 h-5 w-5" />
            Browse Events
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          <div className="gradient-card p-6 rounded-xl glass nft-hover">
            <div className="gradient-neon p-3 rounded-lg inline-block mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-primary">Secure NFTs</h3>
            <p className="text-muted-foreground">Each ticket is an NFT stored on the blockchain, making it impossible to counterfeit or duplicate.</p>
          </div>

          <div className="gradient-card p-6 rounded-xl glass nft-hover">
            <div className="gradient-crypto p-3 rounded-lg inline-block mb-4">
              <Ticket className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-accent">Smart Contracts</h3>
            <p className="text-muted-foreground">Automated ticket sales with built-in royalties and transparent revenue distribution.</p>
          </div>

          <div className="gradient-card p-6 rounded-xl glass nft-hover">
            <div className="gradient-neon p-3 rounded-lg inline-block mb-4">
              <Sparkles className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-secondary">Easy Validation</h3>
            <p className="text-muted-foreground">QR code scanning with real-time blockchain verification at event entrances.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;