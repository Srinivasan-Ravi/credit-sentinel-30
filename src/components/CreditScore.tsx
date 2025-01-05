import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { ChartBar } from "lucide-react";

const data = [
  { month: "Jan", score: 680 },
  { month: "Feb", score: 695 },
  { month: "Mar", score: 690 },
  { month: "Apr", score: 705 },
  { month: "May", score: 720 },
  { month: "Jun", score: 715 },
];

export const CreditScore = () => {
  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <ChartBar className="h-5 w-5 text-primary" />
          DeFi Score Trend
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis 
                dataKey="month" 
                stroke="#C8C8C9"
              />
              <YAxis 
                domain={[600, 800]} 
                stroke="#C8C8C9"
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#221F26',
                  border: '1px solid rgba(155, 135, 245, 0.2)',
                  color: '#FFFFFF'
                }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#9b87f5"
                strokeWidth={2}
                dot={{ fill: "#9b87f5" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};