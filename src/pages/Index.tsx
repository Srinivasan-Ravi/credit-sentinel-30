import { CreditScore } from "@/components/CreditScore";
import { RiskFactors } from "@/components/RiskFactors";
import { UserProfile } from "@/components/UserProfile";
import { Bitcoin, Globe, Shield } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-foreground">DeFi Risk Assessment</h1>
            <p className="mt-2 text-muted-foreground">Decentralized Credit Risk Analysis Platform</p>
          </div>
          <div className="flex gap-4">
            <Globe className="h-6 w-6 text-primary" />
            <Bitcoin className="h-6 w-6 text-primary" />
            <Shield className="h-6 w-6 text-primary" />
          </div>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <div className="rounded-lg border border-primary/20 bg-black/20 p-6 backdrop-blur">
              <CreditScore />
            </div>
            <div className="rounded-lg border border-primary/20 bg-black/20 p-6 backdrop-blur">
              <RiskFactors />
            </div>
          </div>
          <div className="rounded-lg border border-primary/20 bg-black/20 p-6 backdrop-blur">
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;