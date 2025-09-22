import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  gradient?: boolean;
}

const FeatureCard = ({ icon, title, description, gradient = false }: FeatureCardProps) => {
  return (
    <Card className={`group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 ${
      gradient ? "bg-gradient-card" : "bg-card"
    }`}>
      <CardContent className="p-6">
        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          gradient ? "bg-gradient-primary" : "bg-primary/10"
        }`}>
          <div className={gradient ? "text-primary-foreground" : "text-primary"}>
            {icon}
          </div>
        </div>
        <h3 className="text-lg font-semibold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;