import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Database, Network, Activity } from "lucide-react";
import { useState, useEffect } from "react";

export const UserProfile = () => {
  const [lastActivity, setLastActivity] = useState("2 minutes ago");
  const [networkStatus, setNetworkStatus] = useState({
    ethereum: true,
    polygon: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const activities = ["1 minute ago", "just now", "2 minutes ago", "5 minutes ago"];
      setLastActivity(activities[Math.floor(Math.random() * activities.length)]);
      
      setNetworkStatus(prev => ({
        ethereum: Math.random() > 0.1,
        polygon: Math.random() > 0.1
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center justify-between text-xl font-semibold">
          <div className="flex items-center gap-2">
            <Database className="h-5 w-5 text-primary" />
            Wallet Profile
          </div>
          <Activity className="h-5 w-5 text-green-500 animate-pulse" />
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
            <div className="flex flex-col gap-1">
              <p className="text-sm text-foreground">Connected Networks:</p>
              <div className="flex gap-2">
                <span className={`text-xs px-2 py-1 rounded-full ${networkStatus.ethereum ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                  Ethereum {networkStatus.ethereum ? '✓' : '×'}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${networkStatus.polygon ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                  Polygon {networkStatus.polygon ? '✓' : '×'}
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-5 w-5 text-primary" />
            <div className="flex flex-col">
              <p className="text-sm text-foreground">Decentraland: -12, 45</p>
              <p className="text-xs text-muted-foreground">Last active: {lastActivity}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};