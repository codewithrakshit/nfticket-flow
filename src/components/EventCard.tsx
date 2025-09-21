import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin, Users, Coins } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  price: string;
  available: number;
  total: number;
  image?: string;
}

const EventCard = ({ title, date, location, price, available, total }: EventCardProps) => {
  return (
    <Card className="gradient-card border-border/50 nft-hover overflow-hidden">
      <div className="aspect-video bg-muted gradient-hero relative">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-6xl text-muted-foreground/20">🎵</div>
        </div>
        <Badge className="absolute top-3 right-3 gradient-crypto text-white border-0">
          {available}/{total} Available
        </Badge>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-3 text-primary">{title}</h3>
        
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-muted-foreground">
            <Calendar className="mr-2 h-4 w-4 text-secondary" />
            {date}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-2 h-4 w-4 text-accent" />
            {location}
          </div>
          <div className="flex items-center text-sm text-muted-foreground">
            <Users className="mr-2 h-4 w-4 text-primary" />
            {total - available} / {total} sold
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Coins className="mr-2 h-5 w-5 text-secondary" />
            <span className="text-2xl font-bold gradient-neon bg-clip-text text-transparent">
              {price} ETH
            </span>
          </div>
          
          <Button className="gradient-crypto text-white border-0 glow-primary">
            Mint Ticket
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;