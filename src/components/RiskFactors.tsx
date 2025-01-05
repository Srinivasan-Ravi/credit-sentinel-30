import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const factors = [
  { name: "Payment History", score: 85 },
  { name: "Credit Utilization", score: 70 },
  { name: "Credit Age", score: 90 },
  { name: "Account Mix", score: 75 },
];

export const RiskFactors = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Risk Factors</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {factors.map((factor) => (
            <div key={factor.name} className="space-y-2">
              <div className="flex justify-between">
                <span className="text-sm font-medium">{factor.name}</span>
                <span className="text-sm text-muted-foreground">{factor.score}%</span>
              </div>
              <Progress value={factor.score} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};