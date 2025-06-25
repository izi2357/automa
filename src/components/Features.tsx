
import { TrendingUp, DollarSign, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "AI-Powered Trading",
      description: "Advanced algorithms analyze market trends 24/7",
      color: "cyan"
    },
    {
      icon: DollarSign,
      title: "High Returns",
      description: "Earn up to $2200 per day with our proven system",
      color: "green"
    },
    {
      icon: Shield,
      title: "Secure & Safe",
      description: "Bank-level security protects your investments",
      color: "blue"
    }
  ];

  return (
    <div className="mt-16 grid md:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <div key={index} className="text-center">
          <div className={`w-16 h-16 bg-${feature.color}-400/20 rounded-full flex items-center justify-center mx-auto mb-4`}>
            <feature.icon className={`w-8 h-8 text-${feature.color}-400`} />
          </div>
          <h3 className="text-white text-xl font-semibold mb-2">{feature.title}</h3>
          <p className="text-slate-300">{feature.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Features;
