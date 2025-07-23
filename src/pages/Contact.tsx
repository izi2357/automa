import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-6">Contactez-nous</h1>
        <p className="text-lg mb-4">
          Vous avez des questions, des suggestions ou besoin d’assistance ? Notre équipe est à votre écoute pour vous accompagner et répondre à toutes vos demandes.
        </p>
        <p className="text-lg mb-4">
          N’hésitez pas à utiliser le formulaire ci-dessous pour nous envoyer un message. Nous nous engageons à vous répondre dans les plus brefs délais afin de vous offrir un service de qualité.
        </p>
        <form className="max-w-lg mx-auto">
          <label className="block mb-2 font-semibold" htmlFor="name">Nom</label>
          <input id="name" type="text" className="w-full border border-gray-300 rounded p-2 mb-4" placeholder="Votre nom" />
          <label className="block mb-2 font-semibold" htmlFor="email">Email</label>
          <input id="email" type="email" className="w-full border border-gray-300 rounded p-2 mb-4" placeholder="Votre email" />
          <label className="block mb-2 font-semibold" htmlFor="message">Message</label>
          <textarea id="message" className="w-full border border-gray-300 rounded p-2 mb-4" rows={5} placeholder="Votre message"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Envoyer</button>
        </form>
        <p className="text-sm text-gray-500 mt-6">
          Vous pouvez également nous contacter par téléphone au +33 1 23 45 67 89 ou par email à support@automa.fr.
        </p>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
