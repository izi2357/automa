
import { TrendingUp } from "lucide-react";

const Header = () => {
  return (
    <header className="text-center mb-8">
      <div className="flex items-center justify-center mb-4">
        <TrendingUp className="w-8 h-8 text-cyan-400 mr-2" />
        <h1 className="text-2xl font-bold text-white">TradeMaster AI</h1>
      </div>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 leading-tight">
        Earn Between $950 and $2200 Per Day
        <br />
        <span className="text-cyan-400">With The World's Smartest Trading Software</span>
      </h2>
    </header>
  );
};

export default Header;
