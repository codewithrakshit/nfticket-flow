import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { QrCode, Download, Share2, Calendar, MapPin, Hash } from "lucide-react";

interface TicketProps {
  tokenId: string;
  eventTitle: string;
  date: string;
  location: string;
  qrCode: string;
  ownerAddress: string;
}

const TicketDisplay = ({ 
  tokenId, 
  eventTitle, 
  date, 
  location, 
  qrCode, 
  ownerAddress 
}: TicketProps) => {
  return (
    <div className="max-w-md mx-auto">
      <Card className="gradient-card border-primary/50 glow-primary nft-hover overflow-hidden">
        {/* NFT Header */}
        <div className="gradient-crypto p-4 text-center">
          <Badge className="bg-white/20 text-white border-0 mb-2">
            NFT Ticket #{tokenId}
          </Badge>
          <h2 className="text-xl font-bold text-white">{eventTitle}</h2>
        </div>

        <CardContent className="p-6">
          {/* QR Code */}
          <div className="bg-white p-4 rounded-lg mb-6 flex items-center justify-center">
            <div className="w-32 h-32 bg-muted rounded flex items-center justify-center">
              <QrCode className="h-16 w-16 text-muted-foreground" />
            </div>
          </div>

          {/* Event Details */}
          <div className="space-y-3 mb-6">
            <div className="flex items-center text-sm">
              <Calendar className="mr-2 h-4 w-4 text-secondary" />
              <span className="text-muted-foreground">{date}</span>
            </div>
            <div className="flex items-center text-sm">
              <MapPin className="mr-2 h-4 w-4 text-accent" />
              <span className="text-muted-foreground">{location}</span>
            </div>
            <div className="flex items-center text-sm">
              <Hash className="mr-2 h-4 w-4 text-primary" />
              <span className="text-muted-foreground font-mono text-xs">
                {ownerAddress.slice(0, 6)}...{ownerAddress.slice(-4)}
              </span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-2">
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 glass border-secondary/50 text-secondary hover:bg-secondary/10"
            >
              <Download className="mr-2 h-4 w-4" />
              Save
            </Button>
            <Button 
              variant="outline" 
              size="sm" 
              className="flex-1 glass border-accent/50 text-accent hover:bg-accent/10"
            >
              <Share2 className="mr-2 h-4 w-4" />
              Share
            </Button>
          </div>

          {/* Authenticity Badge */}
          <div className="mt-6 p-3 glass rounded-lg border border-primary/20">
            <div className="flex items-center justify-center text-xs text-primary">
              <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-slow"></div>
              Verified on Polygon Blockchain
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default TicketDisplay;