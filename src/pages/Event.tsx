import { useParams } from "react-router-dom";
import Header from "@/components/Header";
import TicketDisplay from "@/components/TicketDisplay";

const Event = () => {
  const { id } = useParams();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 gradient-crypto bg-clip-text text-transparent">
              Your NFT Ticket
            </h1>
            <p className="text-muted-foreground">
              Your ticket has been successfully minted! Show this QR code at the event entrance.
            </p>
          </div>

          <TicketDisplay
            tokenId="1337"
            eventTitle="Electronic Music Festival 2024"
            date="March 15, 2025 - 8:00 PM"
            location="Madison Square Garden, NYC"
            qrCode="mock-qr-code"
            ownerAddress="0x742d35cc6634c0532925a3b8d1c4532925a3b8d1c"
          />
        </div>
      </main>
    </div>
  );
};

export default Event;