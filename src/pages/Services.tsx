import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Services = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Nos Services</h1>
        <p className="text-lg mb-4">
          Automa propose une variété d’outils et de ressources conçus pour soutenir votre apprentissage et favoriser le développement de vos compétences.
        </p>
        <p className="text-lg mb-4">
          Nos services sont pensés pour être accessibles, intuitifs et adaptés à différents profils, afin de vous accompagner dans votre parcours de croissance personnelle.
        </p>
        <p className="text-lg mb-4">
          Nous mettons l’accent sur la qualité de l’expérience utilisateur et l’amélioration continue pour répondre au mieux à vos besoins.
        </p>
        <p className="text-lg">
          Rejoignez Automa pour découvrir un environnement stimulant et enrichissant.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Services;
