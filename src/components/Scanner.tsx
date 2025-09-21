import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, CheckCircle, XCircle, AlertCircle, Scan } from "lucide-react";

interface ScanResult {
  status: 'valid' | 'invalid' | 'used';
  tokenId?: string;
  eventTitle?: string;
  ownerAddress?: string;
  message: string;
}

const Scanner = () => {
  const [isScanning, setIsScanning] = useState(false);
  const [scanResult, setScanResult] = useState<ScanResult | null>(null);

  const startScanning = () => {
    setIsScanning(true);
    setScanResult(null);
    
    // Simulate scanning process
    setTimeout(() => {
      // Mock scan results
      const mockResults: ScanResult[] = [
        {
          status: 'valid',
          tokenId: '1337',
          eventTitle: 'Electronic Music Festival 2024',
          ownerAddress: '0x742d35cc6634c0532925a3b8d1c4532',
          message: 'Valid ticket - Entry granted'
        },
        {
          status: 'used',
          tokenId: '1338',
          eventTitle: 'Electronic Music Festival 2024',
          ownerAddress: '0x742d35cc6634c0532925a3b8d1c4532',
          message: 'Ticket already used'
        },
        {
          status: 'invalid',
          message: 'Invalid QR code or ticket not found'
        }
      ];
      
      const randomResult = mockResults[Math.floor(Math.random() * mockResults.length)];
      setScanResult(randomResult);
      setIsScanning(false);
    }, 2000);
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'valid':
        return <CheckCircle className="h-12 w-12 text-green-500" />;
      case 'used':
        return <AlertCircle className="h-12 w-12 text-yellow-500" />;
      case 'invalid':
        return <XCircle className="h-12 w-12 text-red-500" />;
      default:
        return <Scan className="h-12 w-12 text-muted-foreground" />;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'valid':
        return 'bg-green-500/20 border-green-500/50 text-green-400';
      case 'used':
        return 'bg-yellow-500/20 border-yellow-500/50 text-yellow-400';
      case 'invalid':
        return 'bg-red-500/20 border-red-500/50 text-red-400';
      default:
        return 'bg-muted/20 border-muted/50 text-muted-foreground';
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto max-w-md">
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold mb-4 gradient-crypto bg-clip-text text-transparent">
            Ticket Scanner
          </h2>
          <p className="text-muted-foreground">
            Scan QR codes to validate NFT tickets
          </p>
        </div>

        <Card className="gradient-card border-border/50 glass">
          <CardHeader>
            <CardTitle className="text-center text-primary flex items-center justify-center">
              <Camera className="mr-2 h-5 w-5" />
              QR Scanner
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            {/* Scanner Area */}
            <div className="aspect-square bg-muted/20 rounded-lg border-2 border-dashed border-border/50 mb-6 relative overflow-hidden">
              {isScanning ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-16 w-16 border-4 border-primary border-t-transparent mb-4"></div>
                    <p className="text-sm text-muted-foreground">Scanning...</p>
                  </div>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <Camera className="h-16 w-16 text-muted-foreground mb-4 mx-auto" />
                    <p className="text-sm text-muted-foreground">
                      Tap scan to activate camera
                    </p>
                  </div>
                </div>
              )}

              {/* Scanning Overlay */}
              {isScanning && (
                <div className="absolute inset-0">
                  <div className="absolute inset-4 border-2 border-primary rounded-lg">
                    <div className="w-full h-1 bg-primary animate-pulse-slow"></div>
                  </div>
                </div>
              )}
            </div>

            {/* Scan Result */}
            {scanResult && (
              <div className={`p-4 rounded-lg border mb-6 ${getStatusColor(scanResult.status)}`}>
                <div className="flex items-center justify-center mb-3">
                  {getStatusIcon(scanResult.status)}
                </div>
                
                <div className="text-center">
                  <p className="font-semibold mb-2">{scanResult.message}</p>
                  
                  {scanResult.tokenId && (
                    <div className="space-y-1 text-sm">
                      <p>Token ID: #{scanResult.tokenId}</p>
                      <p>Event: {scanResult.eventTitle}</p>
                      <p className="font-mono">
                        Owner: {scanResult.ownerAddress?.slice(0, 6)}...{scanResult.ownerAddress?.slice(-4)}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Scan Button */}
            <Button 
              onClick={startScanning}
              disabled={isScanning}
              className="w-full gradient-crypto text-white border-0 glow-primary text-lg py-6"
            >
              {isScanning ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Scanning...
                </>
              ) : (
                <>
                  <Scan className="mr-2 h-5 w-5" />
                  Start Scanning
                </>
              )}
            </Button>

            {/* Status Indicator */}
            <div className="mt-4 flex items-center justify-center">
              <Badge className="glass border-primary/50 text-primary">
                <div className="w-2 h-2 bg-primary rounded-full mr-2 animate-pulse-slow"></div>
                Scanner Ready
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Scanner;