import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

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
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">Credit Score Trend</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="month" />
              <YAxis domain={[600, 800]} />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="score"
                stroke="#1E40AF"
                strokeWidth={2}
                dot={{ fill: "#1E40AF" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
};