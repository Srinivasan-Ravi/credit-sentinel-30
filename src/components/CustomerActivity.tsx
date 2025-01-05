import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, PhoneCall, Mail, Calendar, UserCheck, CreditCard, Home, Receipt, Heart, Wallet } from "lucide-react";
import { useState, useEffect } from "react";

type Activity = {
  id: number;
  type: 'message' | 'call' | 'email' | 'meeting' | 'payment' | 'property' | 'subscription' | 'health' | 'investment' | 'status';
  description: string;
  timestamp: string;
  amount?: string;
};

export const CustomerActivity = () => {
  const [activities, setActivities] = useState<Activity[]>([]);

  useEffect(() => {
    const initialActivities: Activity[] = [
      { id: 1, type: 'payment', description: 'Monthly rent payment', timestamp: '2 min ago', amount: '$2,500' },
      { id: 2, type: 'subscription', description: 'Netflix subscription renewed', timestamp: '1 hour ago', amount: '$15.99' },
      { id: 3, type: 'health', description: 'Health insurance premium', timestamp: '3 hours ago', amount: '$350' },
      { id: 4, type: 'investment', description: 'Stock portfolio update', timestamp: 'Today', amount: '+$1,200' },
      { id: 5, type: 'property', description: 'Property tax payment', timestamp: 'Yesterday', amount: '$750' },
    ];

    setActivities(initialActivities);

    const interval = setInterval(() => {
      const types: Activity['type'][] = ['payment', 'subscription', 'health', 'investment', 'property', 'message', 'call', 'email', 'meeting', 'status'];
      const descriptions = [
        'Utility bill payment',
        'Amazon purchase',
        'Investment dividend',
        'Insurance premium',
        'Subscription renewal',
      ];
      const amounts = ['$50', '$120', '$750', '$25.99', '$1,000'];
      
      const newActivity: Activity = {
        id: Date.now(),
        type: types[Math.floor(Math.random() * types.length)],
        description: descriptions[Math.floor(Math.random() * descriptions.length)],
        timestamp: 'Just now',
        amount: amounts[Math.floor(Math.random() * amounts.length)],
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
      case 'payment':
        return <CreditCard className="h-4 w-4 text-red-500" />;
      case 'property':
        return <Home className="h-4 w-4 text-indigo-500" />;
      case 'subscription':
        return <Receipt className="h-4 w-4 text-yellow-500" />;
      case 'health':
        return <Heart className="h-4 w-4 text-pink-500" />;
      case 'investment':
        return <Wallet className="h-4 w-4 text-emerald-500" />;
      case 'status':
        return <UserCheck className="h-4 w-4 text-primary" />;
    }
  };

  return (
    <Card className="border-primary/20 bg-card/50 backdrop-blur animate-fade-in">
      <CardHeader className="border-b border-primary/10">
        <CardTitle className="flex items-center gap-2 text-xl font-semibold">
          <MessageSquare className="h-5 w-5 text-primary" />
          Financial Activity
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
              {activity.amount && (
                <span className={`text-sm font-medium ${activity.amount.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                  {activity.amount}
                </span>
              )}
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};