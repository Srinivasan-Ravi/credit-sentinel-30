import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Database, Network } from "lucide-react";

export const UserProfile = () => {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Database className="h-5 w-5 text-primary" />
          Wallet Profile
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <User className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">John.eth</p>
              <p className="text-sm text-muted-foreground">ID: 0x1234...5678</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-primary" />
            <p className="text-sm text-foreground">john.eth@ens.domains</p>
          </div>
          <div className="flex items-center space-x-4">
            <Network className="h-5 w-5 text-primary" />
            <p className="text-sm text-foreground">Connected Networks: Ethereum, Polygon</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="text-sm text-foreground">Decentraland: -12, 45</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};