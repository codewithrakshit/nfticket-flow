import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calendar, MapPin, Coins, Users, Upload } from "lucide-react";

const CreateEventForm = () => {
  const [isDeploying, setIsDeploying] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsDeploying(true);
    // Simulate contract deployment
    setTimeout(() => {
      setIsDeploying(false);
    }, 3000);
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-2xl">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 gradient-crypto bg-clip-text text-transparent">
            Create Your Event
          </h2>
          <p className="text-muted-foreground">
            Deploy a smart contract and start selling NFT tickets
          </p>
        </div>

        <Card className="gradient-card border-border/50 glass">
          <CardHeader>
            <CardTitle className="text-primary">Event Details</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="title" className="text-foreground">Event Title</Label>
                <Input 
                  id="title" 
                  placeholder="Electronic Music Festival 2024"
                  className="glass border-border/50 focus:border-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="description" className="text-foreground">Description</Label>
                <Textarea 
                  id="description" 
                  placeholder="Describe your event..."
                  className="glass border-border/50 focus:border-primary min-h-[100px]"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="date" className="text-foreground flex items-center">
                    <Calendar className="mr-2 h-4 w-4 text-secondary" />
                    Event Date
                  </Label>
                  <Input 
                    id="date" 
                    type="datetime-local"
                    className="glass border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="location" className="text-foreground flex items-center">
                    <MapPin className="mr-2 h-4 w-4 text-accent" />
                    Location
                  </Label>
                  <Input 
                    id="location" 
                    placeholder="Madison Square Garden"
                    className="glass border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="price" className="text-foreground flex items-center">
                    <Coins className="mr-2 h-4 w-4 text-secondary" />
                    Ticket Price (ETH)
                  </Label>
                  <Input 
                    id="price" 
                    type="number" 
                    step="0.01"
                    placeholder="0.1"
                    className="glass border-border/50 focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="supply" className="text-foreground flex items-center">
                    <Users className="mr-2 h-4 w-4 text-primary" />
                    Max Supply
                  </Label>
                  <Input 
                    id="supply" 
                    type="number"
                    placeholder="1000"
                    className="glass border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="image" className="text-foreground flex items-center">
                  <Upload className="mr-2 h-4 w-4 text-accent" />
                  Event Image
                </Label>
                <Input 
                  id="image" 
                  type="file"
                  accept="image/*"
                  className="glass border-border/50 focus:border-primary"
                />
              </div>

              <Button 
                type="submit" 
                disabled={isDeploying}
                className="w-full gradient-crypto text-white border-0 glow-primary text-lg py-6"
              >
                {isDeploying ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                    Deploying Smart Contract...
                  </>
                ) : (
                  "Deploy Event Contract"
                )}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CreateEventForm;