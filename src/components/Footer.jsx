import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaWhatsapp, FaGithub, FaChevronRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Colonne Titre + Description */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-amber-100">
              AllôBénin 
            </h2>
            <p className="text-gray-300 leading-relaxed">
              Nous créons des expériences digitales exceptionnelles qui transforment les idées en réalité.
            </p>
            <div className="flex space-x-4">
              <SocialIcon href="#">
                <FaFacebook className="text-xl" />
              </SocialIcon>
              <SocialIcon href="#">
                <FaInstagram className="text-xl" />
              </SocialIcon>
              <SocialIcon href="#">
                <FaTwitter className="text-xl" />
              </SocialIcon>
              <SocialIcon href="#">
                <FaWhatsapp className="text-xl" />
              </SocialIcon>
            </div>
          </div>

          {/* Colonne Liens rapides */}
          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block group">
              Liens rapides
              <span className="absolute bottom-0 left-0 w-full h-0.5 bg-amber-400 transform scale-x-0 origin-left transition-transform duration-300 group-hover:scale-x-100"></span>
            </h3>
            <ul className="space-y-3">
              <FooterLink href="#" icon={<FaChevronRight className="text-xs" />}>Accueil</FooterLink>
              <FooterLink href="/about" icon={<FaChevronRight className="text-xs" />}>À propos</FooterLink>
              <FooterLink href="/services" icon={<FaChevronRight className="text-xs" />}>Services</FooterLink>
              <FooterLink href="/contact" icon={<FaChevronRight className="text-xs" />}>Contact</FooterLink>
              <FooterLink href="/faq" icon={<FaChevronRight className="text-xs" />}>FAQ</FooterLink>
            </ul>
          </div>

          {/* Colonne Contact */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Contactez-nous</h3>
            <ul className="space-y-3">
              <ContactItem icon={<FaMapMarkerAlt />}>
                Cotonou
              </ContactItem>
              <ContactItem icon={<FaPhoneAlt />}>
                +229 43 75 79 82
              </ContactItem>
              <ContactItem icon={<FaEnvelope />}>
                allobenin3@gmail.com
              </ContactItem>
            </ul>
          </div>

          {/* Colonne Newsletter */}
          <div>
            <h3 className="text-xl font-semibold mb-6">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Abonnez-vous pour recevoir les dernières actualités et offres exclusives.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Allô Bénin. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <FooterSmallLink href="#">Politique de confidentialité</FooterSmallLink>
            <FooterSmallLink href="#">Conditions d'utilisation</FooterSmallLink>
            <FooterSmallLink href="#">Mentions légales</FooterSmallLink>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Composants réutilisables
const SocialIcon = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-300 hover:text-white transition-all duration-300 transform hover:-translate-y-1"
    aria-label="Social media link"
  >
    {children}
  </a>
);

const FooterLink = ({ href, icon, children }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-300 hover:text-white hover:pl-2 transition-all duration-300 flex items-center"
    >
      <span className="mr-2 text-amber-400">{icon}</span>
      {children}
    </a>
  </li>
);

const ContactItem = ({ icon, children }) => (
  <li className="flex items-start">
    <span className="text-amber-400 mt-1 mr-3">{icon}</span>
    <span className="text-gray-300">{children}</span>
  </li>
);

const NewsletterForm = () => {
  const [email, setEmail] = React.useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique pour gérer l'abonnement
    console.log('Email submitted:', email);
    setEmail('');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Votre email"
        className="w-full px-4 py-3 rounded-lg bg-white bg-opacity-50 border border-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:border-transparent text-black placeholder-gray-400 transition-all duration-300"
        required
      />
      <button
        type="submit"
        className="w-full bg-yellow-400 text-white font-semibold py-3 px-6 rounded-lg hover:from-amber-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
      >
        S'abonner
      </button>
    </form>
  );
};

const FooterSmallLink = ({ href, children }) => (
  <a 
    href={href} 
    className="text-gray-400 hover:text-white text-sm transition-colors duration-300"
  >
    {children}
  </a>
);

export default Footer;