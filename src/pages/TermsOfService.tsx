import Header from "@/components/Header";
import Footer from "@/components/Footer";

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Conditions d’Utilisation</h1>
        <p className="text-lg mb-4">
          Les présentes conditions d’utilisation régissent l’accès et l’utilisation des services proposés par Automa. En utilisant nos plateformes, vous acceptez de vous conformer à ces conditions dans leur intégralité.
        </p>
        <p className="text-lg mb-4">
          Nos services sont destinés à un usage légal et conforme aux lois en vigueur. Toute utilisation abusive, frauduleuse ou contraire à l’éthique est strictement interdite et peut entraîner la suspension ou la résiliation de votre accès.
        </p>
        <p className="text-lg mb-4">
          Automa s’efforce de fournir des informations précises et à jour, mais ne garantit pas l’exactitude, l’exhaustivité ou la pertinence des contenus. Les utilisateurs sont responsables de leurs décisions et des conséquences associées.
        </p>
        <p className="text-lg mb-4">
          Nous nous réservons le droit de modifier ces conditions à tout moment. Les utilisateurs seront informés des changements importants et sont invités à consulter régulièrement cette page.
        </p>
        <p className="text-lg">
          En continuant à utiliser nos services, vous acceptez les conditions mises à jour et reconnaissez avoir pris connaissance de ces termes.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfService;
