import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { ChartBar, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export const CreditScore = () => {
  const [data, setData] = useState([
    { month: "Jan", score: 680, traditional: 690, defi: 670 },
    { month: "Feb", score: 695, traditional: 700, defi: 690 },
    { month: "Mar", score: 690, traditional: 695, defi: 685 },
    { month: "Apr", score: 705, traditional: 710, defi: 700 },
    { month: "May", score: 720, traditional: 725, defi: 715 },
    { month: "Jun", score: 715, traditional: 720, defi: 710 },
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newScore = prevData[prevData.length - 1].score + Math.floor(Math.random() * 21) - 10;
        const newTraditional = prevData[prevData.length - 1].traditional + Math.floor(Math.random() * 21) - 10;
        const newDefi = prevData[prevData.length - 1].defi + Math.floor(Math.random() * 21) - 10;
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const newMonth = months[new Date().getMonth()];
        
        return [...prevData.slice(1), { 
          month: newMonth, 
          score: newScore,
          traditional: newTraditional,
          defi: newDefi
        }];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const currentScore = data[data.length - 1].score;
  const previousScore = data[data.length - 2].score;
  const scoreChange = currentScore - previousScore;
  const trend = scoreChange >= 0 ? "positive" : "negative";

  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center justify-between text-xl font-semibold">
          <div className="flex items-center gap-2">
            <ChartBar className="h-5 w-5 text-primary" />
            Comprehensive Credit Score
          </div>
          <div className="flex items-center gap-2 text-sm">
            <TrendingUp className={`h-4 w-4 ${trend === 'positive' ? 'text-green-500' : 'text-red-500'}`} />
            <span className={trend === 'positive' ? 'text-green-500' : 'text-red-500'}>
              {scoreChange > 0 ? '+' : ''}{scoreChange.toFixed(0)}
            </span>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" stroke="#C8C8C9" />
              <YAxis domain={[600, 800]} stroke="#C8C8C9" />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: '#221F26',
                  border: '1px solid rgba(155, 135, 245, 0.2)',
                  color: '#FFFFFF'
                }}
              />
              <ReferenceLine
                y={700}
                stroke="#666"
                strokeDasharray="3 3"
                label={{ value: 'Good Score', position: 'right', fill: '#666' }}
              />
              <Line
                name="Overall Score"
                type="monotone"
                dataKey="score"
                stroke="#9b87f5"
                strokeWidth={2}
                dot={{ fill: "#9b87f5" }}
              />
              <Line
                name="Traditional Finance"
                type="monotone"
                dataKey="traditional"
                stroke="#4CAF50"
                strokeWidth={2}
                dot={{ fill: "#4CAF50" }}
              />
              <Line
                name="DeFi Score"
                type="monotone"
                dataKey="defi"
                stroke="#FF9800"
                strokeWidth={2}
                dot={{ fill: "#FF9800" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};