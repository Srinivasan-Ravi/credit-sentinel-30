import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield } from "lucide-react";

const factors = [
  { name: "Smart Contract Interaction", score: 85 },
  { name: "DeFi Protocol Usage", score: 70 },
  { name: "Wallet Age", score: 90 },
  { name: "Asset Diversification", score: 75 },
];

export const RiskFactors = () => {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <Shield className="h-5 w-5 text-primary" />
          Risk Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="space-y-6">
          {factors.map((factor) => (
            <div key={factor.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-foreground">{factor.name}</span>
                <span className="text-sm text-primary">{factor.score}%</span>
              </div>
              <Progress 
                value={factor.score} 
                className="h-2 bg-muted"
                indicatorClassName="bg-gradient-to-r from-primary to-accent"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};