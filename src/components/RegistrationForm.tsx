
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const RegistrationForm = () => {
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
  );
};

export default RegistrationForm;
