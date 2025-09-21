import { Button } from "@/components/ui/button";
import { Wallet, Zap } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 glass backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <div className="flex items-center space-x-2">
          <div className="gradient-crypto p-2 rounded-lg">
            <Zap className="h-6 w-6 text-white" />
          </div>
          <span className="text-xl font-bold gradient-crypto bg-clip-text text-transparent">
            NeoTix
          </span>
        </div>

        <nav className="hidden md:flex items-center space-x-6">
          <a href="#events" className="text-muted-foreground hover:text-primary transition-smooth">
            Events
          </a>
          <a href="#create" className="text-muted-foreground hover:text-primary transition-smooth">
            Create Event
          </a>
          <a href="#scan" className="text-muted-foreground hover:text-primary transition-smooth">
            Scanner
          </a>
        </nav>

        <Button variant="outline" className="gradient-crypto text-white border-0 glow-primary">
          <Wallet className="mr-2 h-4 w-4" />
          Connect Wallet
        </Button>
      </div>
    </header>
  );
};

export default Header;