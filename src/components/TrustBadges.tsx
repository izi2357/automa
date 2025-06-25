
import { Shield } from "lucide-react";

const TrustBadges = () => {
  const badges = ["Symantec", "McAfee SECURE", "VeriSign", "SSL Trust", "GeoTrust", "SECURE"];

  return (
    <div className="mb-16">
      <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
        {badges.map((badge, index) => (
          <div key={index} className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded shadow-lg hover:bg-white transition-colors duration-300">
            <div className="flex items-center space-x-2">
              <Shield className="w-4 h-4 text-blue-600" />
              <span className="text-slate-800 font-semibold text-sm">{badge}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
