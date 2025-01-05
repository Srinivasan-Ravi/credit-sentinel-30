import { CreditScore } from "@/components/CreditScore";
import { RiskFactors } from "@/components/RiskFactors";
import { UserProfile } from "@/components/UserProfile";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-7xl space-y-8">
        <h1 className="text-3xl font-bold text-gray-900">Credit Risk Dashboard</h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-8">
            <CreditScore />
            <RiskFactors />
          </div>
          <div>
            <UserProfile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;