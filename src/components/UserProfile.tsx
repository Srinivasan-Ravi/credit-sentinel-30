import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, Mail, Phone, MapPin } from "lucide-react";

export const UserProfile = () => {
  return (
    <Card className="w-full animate-fade-in">
      <CardHeader>
        <CardTitle className="text-xl font-semibold">User Profile</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="flex items-center space-x-4">
            <User className="h-5 w-5 text-primary" />
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-sm text-muted-foreground">ID: #123456</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Mail className="h-5 w-5 text-primary" />
            <p className="text-sm">john.doe@example.com</p>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="h-5 w-5 text-primary" />
            <p className="text-sm">+1 (555) 123-4567</p>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="h-5 w-5 text-primary" />
            <p className="text-sm">New York, NY</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};