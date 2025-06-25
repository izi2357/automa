
import { TrendingUp, DollarSign, Shield } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: TrendingUp,
      title: "Trading Propulsé par l'IA",
      description: "Des algorithmes avancés analysent les tendances du marché 24h/24 et 7j/7",
      color: "cyan"
    },
    {
      icon: DollarSign,
      title: "Hauts Rendements",
      description: "Gagnez jusqu'à 2200 $ par jour avec notre système éprouvé",
      color: "green"
    },
    {
      icon: Shield,
      title: "Sécurisé & Sûr",
      description: "Une sécurité de niveau bancaire protège vos investissements",
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
