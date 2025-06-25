
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { Play, TrendingUp, Shield, Users, DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Registration Submitted!",
      description: "We'll contact you soon with your trading account details.",
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 rounded-full bg-blue-400/10 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-indigo-400/10 blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-cyan-400/5 blur-3xl"></div>
      </div>

      {/* Main content */}
      <div className="relative z-10 container mx-auto px-4 py-8">
        {/* Header */}
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

        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mb-16">
          {/* Video Section */}
          <div className="lg:w-1/2 max-w-2xl">
            <div className="relative bg-gradient-to-br from-slate-700 to-slate-800 rounded-lg overflow-hidden shadow-2xl">
              <div className="aspect-video flex items-center justify-center bg-slate-600/50">
                <div className="text-center">
                  <Play className="w-16 h-16 text-white mx-auto mb-4 opacity-80" />
                  <p className="text-white/80 text-lg">Watch Our Trading Bot In Action</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="lg:w-1/2 max-w-md w-full">
            <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 p-6 shadow-2xl">
              <div className="text-center mb-6">
                <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <DollarSign className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-white text-lg font-semibold mb-2">
                  Start Earning Money Immediately
                </h3>
                <p className="text-slate-300 text-sm">
                  Get up to 50% registration bonus
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <Input
                  type="text"
                  placeholder="First Name"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange("firstName", e.target.value)}
                  className="bg-white border-0 text-slate-900 placeholder:text-slate-500"
                  required
                />
                <Input
                  type="text"
                  placeholder="Last Name"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange("lastName", e.target.value)}
                  className="bg-white border-0 text-slate-900 placeholder:text-slate-500"
                  required
                />
                <Input
                  type="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="bg-white border-0 text-slate-900 placeholder:text-slate-500"
                  required
                />
                <div className="flex">
                  <Select onValueChange={(value) => handleInputChange("country", value)}>
                    <SelectTrigger className="w-20 bg-white border-0 rounded-r-none">
                      <SelectValue placeholder="🇺🇸" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectItem value="us">🇺🇸 +1</SelectItem>
                      <SelectItem value="uk">🇬🇧 +44</SelectItem>
                      <SelectItem value="ca">🇨🇦 +1</SelectItem>
                      <SelectItem value="au">🇦🇺 +61</SelectItem>
                    </SelectContent>
                  </Select>
                  <Input
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={(e) => handleInputChange("phone", e.target.value)}
                    className="bg-white border-0 text-slate-900 placeholder:text-slate-500 rounded-l-none flex-1"
                    required
                  />
                </div>
                <Button 
                  type="submit" 
                  className="w-full bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white font-semibold py-3 text-lg transition-all duration-300 transform hover:scale-105"
                >
                  START NOW
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mb-16">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8">
            {["Symantec", "McAfee SECURE", "VeriSign", "SSL Trust", "GeoTrust", "SECURE"].map((badge, index) => (
              <div key={index} className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded shadow-lg hover:bg-white transition-colors duration-300">
                <div className="flex items-center space-x-2">
                  <Shield className="w-4 h-4 text-blue-600" />
                  <span className="text-slate-800 font-semibold text-sm">{badge}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mb-16">
          <p className="text-xl md:text-2xl text-cyan-400 font-light italic">
            Today is the perfect opportunity to join us and start earning money instantly!
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "C Stewart", amount: "$214.00", avatar: "👨‍💼" },
            { name: "R Johnson", amount: "$400.00", avatar: "👩‍💼" },
            { name: "S Michelle", amount: "$155.00", avatar: "👨‍🦳" },
            { name: "M Woods", amount: "$845.00", avatar: "👩‍🦰" }
          ].map((testimonial, index) => (
            <Card key={index} className="bg-slate-800/60 backdrop-blur-sm border-slate-700 p-4 text-center hover:bg-slate-800/80 transition-colors duration-300">
              <div className="text-4xl mb-2">{testimonial.avatar}</div>
              <h4 className="text-white font-semibold">{testimonial.name}</h4>
              <p className="text-green-400 font-bold text-lg">{testimonial.amount}</p>
              <p className="text-slate-300 text-sm">Daily Profit</p>
            </Card>
          ))}
        </div>

        {/* Features */}
        <div className="mt-16 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <TrendingUp className="w-8 h-8 text-cyan-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">AI-Powered Trading</h3>
            <p className="text-slate-300">Advanced algorithms analyze market trends 24/7</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-green-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <DollarSign className="w-8 h-8 text-green-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">High Returns</h3>
            <p className="text-slate-300">Earn up to $2200 per day with our proven system</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-blue-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-8 h-8 text-blue-400" />
            </div>
            <h3 className="text-white text-xl font-semibold mb-2">Secure & Safe</h3>
            <p className="text-slate-300">Bank-level security protects your investments</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
