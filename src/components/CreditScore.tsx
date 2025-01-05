import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine } from "recharts";
import { ChartBar, TrendingUp } from "lucide-react";
import { useEffect, useState } from "react";

export const CreditScore = () => {
  const [data, setData] = useState([
    { month: "Jan", score: 680 },
    { month: "Feb", score: 695 },
    { month: "Mar", score: 690 },
    { month: "Apr", score: 705 },
    { month: "May", score: 720 },
    { month: "Jun", score: 715 },
  ]);

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setData(prevData => {
        const newScore = prevData[prevData.length - 1].score + Math.floor(Math.random() * 21) - 10;
        const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const newMonth = months[new Date().getMonth()];
        
        const newData = [...prevData.slice(1), { month: newMonth, score: newScore }];
        return newData;
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
            DeFi Score Trend
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
              <ReferenceLine
                y={700}
                stroke="#666"
                strokeDasharray="3 3"
                label={{ value: 'Threshold', position: 'right', fill: '#666' }}
              />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#9b87f5"
                strokeWidth={2}
                dot={{ fill: "#9b87f5" }}
                isAnimationActive={true}
                animationDuration={300}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};