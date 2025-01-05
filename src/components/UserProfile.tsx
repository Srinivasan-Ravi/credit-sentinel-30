import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin, Database, Network, Activity, Briefcase, Building, FileText } from "lucide-react";
import { useState, useEffect } from "react";

export const UserProfile = () => {
  const [lastActivity, setLastActivity] = useState("2 minutes ago");
  const [networkStatus, setNetworkStatus] = useState({
    traditional: true,
    defi: true
  });

  useEffect(() => {
    const interval = setInterval(() => {
      const activities = ["1 minute ago", "just now", "2 minutes ago", "5 minutes ago"];
      setLastActivity(activities[Math.floor(Math.random() * activities.length)]);
      
      setNetworkStatus(prev => ({
        traditional: Math.random() > 0.1,
        defi: Math.random() > 0.1
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
            Financial Profile
          </div>
          <Activity className="h-5 w-5 text-green-500 animate-pulse" />
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="space-y-6">
          <div className="flex items-center space-x-4">
            <User className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">John Smith</p>
              <p className="text-sm text-muted-foreground">Premium Member</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <Briefcase className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Senior Developer</p>
              <p className="text-sm text-muted-foreground">Annual Income: $120,000</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Building className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Property Assets</p>
              <p className="text-sm text-muted-foreground">2 Properties, Total Value: $850,000</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <FileText className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium text-foreground">Tax Status</p>
              <p className="text-sm text-muted-foreground">Filed for 2023, Next Due: April 2024</p>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Network className="h-5 w-5 text-primary" />
            <div className="flex flex-col gap-1">
              <p className="text-sm text-foreground">Financial Networks:</p>
              <div className="flex gap-2">
                <span className={`text-xs px-2 py-1 rounded-full ${networkStatus.traditional ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                  Traditional Banking {networkStatus.traditional ? '✓' : '×'}
                </span>
                <span className={`text-xs px-2 py-1 rounded-full ${networkStatus.defi ? 'bg-green-500/20 text-green-500' : 'bg-red-500/20 text-red-500'}`}>
                  DeFi {networkStatus.defi ? '✓' : '×'}
                </span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <Activity className="h-5 w-5 text-primary" />
            <div className="flex flex-col">
              <p className="text-sm text-foreground">Last Transaction: $250.00</p>
              <p className="text-xs text-muted-foreground">Activity: {lastActivity}</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};