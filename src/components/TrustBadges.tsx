
const TrustBadges = () => {
  const badges = [
    { name: "Symantec", logo: "/badges/symantec.png" },
    { name: "McAfee SÉCURISÉ", logo: "/badges/mcafee.jpg" },
    { name: "VeriSign", logo: "/badges/Verisign.png" },
    { name: "SSL Trust", logo: "/badges/ssltrust.png" },
    { name: "GeoTrust", logo: "/badges/geotrust.png" },
    { name: "SÉCURISÉ", logo: "/badges/securessl.jpg" },
  ];

  return (
    <div className="mb-16">
      <div className="flex flex-wrap justify-center items-center gap-8 md:gap-10">
        {badges.map((badge, index) => (
          <div key={index} className="bg-white/90 backdrop-blur-sm px-5 py-3 rounded shadow-lg hover:bg-white transition-colors duration-300">
            <div className="flex items-center space-x-3">
              <img src={badge.logo} alt={badge.name + ' logo'} className="w-10 h-10 object-contain" />
              <span className="text-slate-800 font-semibold text-base">{badge.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrustBadges;
