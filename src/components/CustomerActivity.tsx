import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, PhoneCall, Mail, Calendar, UserCheck } from "lucide-react";
import { useState, useEffect } from "react";

type Activity = {
  id: number;
  type: 'message' | 'call' | 'email' | 'meeting' | 'status';
  description: string;
  timestamp: string;
};

export const CustomerActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const initialActivities: Activity[] = [
      { id: 1, type: 'message', description: 'Support ticket opened', timestamp: '2 min ago' },
      { id: 2, type: 'call', description: 'Follow-up call scheduled', timestamp: '1 hour ago' },
      { id: 3, type: 'email', description: 'Risk assessment report sent', timestamp: '3 hours ago' },
      { id: 4, type: 'meeting', description: 'Credit review meeting', timestamp: 'Tomorrow' },
      { id: 5, type: 'status', description: 'Credit score updated', timestamp: 'Just now' },
    ];

    setActivities(initialActivities);

    const interval = setInterval(() => {
      const types: Activity['type'][] = ['message', 'call', 'email', 'meeting', 'status'];
      const newActivity: Activity = {
        id: Date.now(),
        type: types[Math.floor(Math.random() * types.length)],
        description: 'New activity recorded',
        timestamp: 'Just now'
      };

      setActivities(prev => [newActivity, ...prev.slice(0, 4)]);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  const getIcon = (type: Activity['type']) => {
    switch (type) {
      case 'message':
        return <MessageSquare className="h-4 w-4 text-blue-500" />;
      case 'call':
        return <PhoneCall className="h-4 w-4 text-green-500" />;
      case 'email':
        return <Mail className="h-4 w-4 text-purple-500" />;
      case 'meeting':
        return <Calendar className="h-4 w-4 text-orange-500" />;
      case 'status':
        return <UserCheck className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <MessageSquare className="h-5 w-5 text-primary" />
          Customer Activity
        </CardTitle>
      </CardHeader>
      <CardContent className="mt-6">
        <div className="space-y-4">
          {activities.map((activity) => (
            <div key={activity.id} className="flex items-center gap-3 p-2 rounded-lg hover:bg-muted/50 transition-colors">
              {getIcon(activity.type)}
              <div className="flex-1">
                <p className="text-sm font-medium text-foreground">{activity.description}</p>
                <p className="text-xs text-muted-foreground">{activity.timestamp}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};