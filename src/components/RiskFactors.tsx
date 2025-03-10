import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Shield, AlertCircle } from "lucide-react";
import { useState, useEffect } from "react";

const initialFactors = [
  { name: "Traditional Credit History", score: 85, trend: 0 },
  { name: "DeFi Protocol Usage", score: 70, trend: 0 },
  { name: "Payment History", score: 90, trend: 0 },
  { name: "Asset Diversification", score: 75, trend: 0 },
  { name: "Income Stability", score: 80, trend: 0 },
  { name: "Debt-to-Income Ratio", score: 65, trend: 0 },
  { name: "Property Portfolio", score: 70, trend: 0 },
  { name: "Insurance Coverage", score: 85, trend: 0 },
];

export const RiskFactors = () => {
  const [factors, setFactors] = useState(initialFactors);

  useEffect(() => {
    const interval = setInterval(() => {
      setFactors(prevFactors => 
        prevFactors.map(factor => {
          const change = Math.floor(Math.random() * 5) - 2;
          const newScore = Math.max(0, Math.min(100, factor.score + change));
          return {
            ...factor,
            trend: newScore - factor.score,
            score: newScore,
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center justify-between text-xl font-semibold">
          <div className="flex items-center gap-2">
            <Shield className="h-5 w-5 text-primary" />
            Financial Health Metrics
          </div>
          <AlertCircle className="h-5 w-5 text-yellow-500" />
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="grid gap-6 md:grid-cols-2">
          {factors.map((factor) => (
            <div key={factor.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium text-foreground">{factor.name}</span>
                <div className="flex items-center gap-2">
                  <span className={`text-sm ${factor.trend > 0 ? 'text-green-500' : factor.trend < 0 ? 'text-red-500' : 'text-primary'}`}>
                    {factor.trend > 0 ? '+' : ''}{factor.trend}%
                  </span>
                  <span className="text-sm text-primary">{factor.score}%</span>
                </div>
              </div>
              <Progress 
                value={factor.score} 
                className="h-2 bg-muted"
              />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};