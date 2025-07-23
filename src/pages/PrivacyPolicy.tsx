import Header from "@/components/Header";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Politique de Confidentialité</h1>
        <p className="text-lg mb-4">
          Chez Automa, la protection de vos données personnelles est une priorité absolue. Cette politique de confidentialité décrit comment nous collectons, utilisons et protégeons les informations que vous nous fournissez lors de l’utilisation de nos services.
        </p>
        <p className="text-lg mb-4">
          Nous collectons uniquement les données nécessaires pour améliorer votre expérience utilisateur, assurer la sécurité de nos plateformes et personnaliser nos offres. Ces informations peuvent inclure vos coordonnées, vos préférences et vos interactions avec nos services.
        </p>
        <p className="text-lg mb-4">
          Toutes les données sont traitées conformément aux réglementations en vigueur, notamment le Règlement Général sur la Protection des Données (RGPD). Nous mettons en place des mesures techniques et organisationnelles strictes pour garantir la confidentialité et la sécurité de vos informations.
        </p>
        <p className="text-lg mb-4">
          Vous disposez de droits d’accès, de rectification, de suppression et d’opposition concernant vos données personnelles. Pour exercer ces droits ou pour toute question relative à notre politique de confidentialité, n’hésitez pas à nous contacter.
        </p>
        <p className="text-lg">
          En utilisant nos services, vous acceptez les termes de cette politique de confidentialité et consentez à la collecte et à l’utilisation de vos données comme décrit ci-dessus.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
