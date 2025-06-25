
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { DollarSign } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const { data, error } = await supabase.from('form_submissions').insert([
      {
        first_name: formData.firstName,
        last_name: formData.lastName,
        email: formData.email,
        phone: formData.phone,
      }
    ]);

    if (error) {
      toast({
        title: "Erreur lors de l'inscription",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Inscription Soumise !",
        description: "Nous vous contacterons bientôt avec les détails de votre compte de trading.",
      });
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
      });
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="w-full max-w-md mx-auto px-4 sm:px-6 lg:px-8">
      <Card className="bg-slate-800/90 backdrop-blur-sm border-slate-700 p-6 shadow-2xl">
        <div className="text-center mb-6">
          <div className="w-12 h-12 bg-cyan-400/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <DollarSign className="w-6 h-6 text-cyan-400" />
          </div>
          <h3 className="text-white text-lg font-semibold mb-2">
            Commencez à Gagner de l'Argent Immédiatement
          </h3>
          <p className="text-slate-300 text-sm">
            Obtenez jusqu'à 50% de bonus d'inscription
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <Input
            type="text"
            placeholder="Prénom"
            value={formData.firstName}
            onChange={(e) => handleInputChange("firstName", e.target.value)}
            className="bg-white border-0 text-slate-900 placeholder:text-slate-500"
            required
          />
          <Input
            type="text"
            placeholder="Nom de famille"
            value={formData.lastName}
            onChange={(e) => handleInputChange("lastName", e.target.value)}
            className="bg-white border-0 text-slate-900 placeholder:text-slate-500"
            required
          />
          <Input
            type="email"
            placeholder="Adresse courriel"
            value={formData.email}
            onChange={(e) => handleInputChange("email", e.target.value)}
            className="bg-white border-0 text-slate-900 placeholder:text-slate-500"
            required
          />
          <div className="flex">
            <div className="w-20 bg-white border-0 rounded-r-none flex items-center justify-center text-slate-900 font-semibold">
              🇨🇦 +1
            </div>
            <Input
              type="tel"
              placeholder="Numéro de téléphone"
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
            COMMENCER MAINTENANT
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default RegistrationForm;
