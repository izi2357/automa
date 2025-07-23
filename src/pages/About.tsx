import Header from "@/components/Header";
import Footer from "@/components/Footer";

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">À propos de nous</h1>
        <p className="text-lg mb-4">
          Automa est une plateforme dédiée à l’apprentissage et au développement des connaissances. Nous nous engageons à offrir un environnement propice à la croissance personnelle et à l’exploration de nouvelles idées.
        </p>
        <p className="text-lg mb-4">
          Notre équipe travaille continuellement pour améliorer l’expérience utilisateur en proposant des outils intuitifs et accessibles à tous, favorisant ainsi l’épanouissement intellectuel.
        </p>
        <p className="text-lg mb-4">
          Chez Automa, nous croyons en la puissance de l’éducation et de la collaboration pour ouvrir de nouvelles perspectives et encourager l’innovation.
        </p>
        <p className="text-lg">
          Nous vous invitons à découvrir Automa et à rejoindre notre communauté grandissante d’apprenants engagés.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default About;
