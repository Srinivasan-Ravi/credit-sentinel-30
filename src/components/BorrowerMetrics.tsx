import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Speedometer } from "@/components/ui/speedometer";
import { ShieldCheck } from "lucide-react";

export const BorrowerMetrics = () => {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <ShieldCheck className="h-5 w-5 text-primary" />
          Borrower Metrics
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <Speedometer 
              value={85} 
              label="Reliability Score"
              colorClass="text-green-500"
            />
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">Key Factors:</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Consistent Repayments
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  Wallet Age: 2+ years
                </li>
              </ul>
            </div>
          </div>
          <div>
            <Speedometer 
              value={25} 
              label="Risk Level"
              colorClass="text-red-500"
            />
            <div className="mt-4 space-y-2">
              <p className="text-sm text-muted-foreground">Risk Indicators:</p>
              <ul className="text-sm space-y-1">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Market Volatility
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-red-500"></span>
                  Collateral Ratio
                </li>
              </ul>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};