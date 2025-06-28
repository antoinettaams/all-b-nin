import React from "react";
import { FaShieldAlt, FaCoins, FaSync, FaRegBuilding, FaUniversity, FaFirstAid } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { BsQuote } from 'react-icons/bs';

const AboutPage = () => {
  return (
    <main className="container mx-auto px-4 py-12 max-w-6xl">
      {/* Section Mission */}
      <section className="mb-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-red-600 mb-6">
          Notre <span className="text-green-600">Mission</span>
        </h1>
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transition-all duration-300 hover:shadow-xl">
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
            Connecter les citoyens aux <span className="text-green-600 font-semibold">services essentiels</span> partout au Bénin grâce à un annuaire numérique <span className="text-red-500 font-semibold">fiable</span> et <span className="text-blue-500 font-semibold">actualisé</span>.
          </p>
        </div>
      </section>

      {/* Section Histoire */}
      <section className="mb-16 bg-white p-8 rounded-2xl shadow-lg border border-gray-100 animate-fade-in delay-100">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="hidden md:block flex-shrink-0">
            <div className="bg-yellow-50 p-6 rounded-full transition-transform duration-300 hover:scale-110">
              <IoTimeOutline className="text-6xl text-yellow-500" />
            </div>
          </div>
          <div>
            <h2 className="text-3xl font-bold text-green-800 mb-6">
              Notre Histoire
            </h2>
            <p className="mb-6 text-lg text-gray-700 leading-relaxed">
              Fondé en 2025 à Cotonou, <span className="font-semibold text-green-600">AllôBénin</span> est né d'un constat simple : <span className="font-semibold text-red-500">80% des Béninois</span> ont déjà perdu du temps à chercher un numéro utile.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Aujourd'hui, notre plateforme référence <span className="font-semibold text-green-600">500+</span> services vérifiés à travers tout le pays, avec une satisfaction client de <span className="font-semibold text-yellow-500">98%</span>.
            </p>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <div className="bg-gradient-to-r from-green-600 to-green-700 p-8 rounded-2xl shadow-lg my-12 relative overflow-hidden animate-fade-in delay-200">
        <div className="absolute -top-10 -left-10 w-32 h-32 bg-white/10 rounded-full filter blur-xl"></div>
        <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-yellow-400/10 rounded-full filter blur-xl"></div>
        
        <blockquote className="relative z-10">
          <BsQuote className="text-4xl text-white opacity-20 mb-2" />
          <p className="text-xl text-white italic mb-6 leading-relaxed transition-transform duration-300 hover:scale-102">
            "AllôBénin m'a sauvé la vie quand j'ai eu besoin d'un électricien en urgence à minuit ! Le service était rapide et professionnel."
          </p>
          <div className="flex items-center">
            <div className="bg-white w-12 h-12 rounded-full mr-4 flex items-center justify-center">
              <span className="text-green-600 font-bold">AD</span>
            </div>
            <div>
              <div className="font-semibold text-white">Aïcha D.</div>
              <div className="text-sm text-white/80">Utilisatrice à Parakou</div>
            </div>
          </div>
        </blockquote>
      </div>

      {/* Section Valeurs */}
      <section className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl mb-16 border border-gray-200 animate-fade-in delay-300">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Nos <span className="text-red-500">Valeurs</span>
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { 
              icon: <FaShieldAlt className="text-3xl text-green-600" />,
              title: "Fiabilité",
              text: "Tous nos numéros sont vérifiés mensuellement par notre équipe",
              color: "bg-green-100"
            },
            { 
              icon: <FaCoins className="text-3xl text-yellow-500" />,
              title: "Accessibilité",
              text: "Service gratuit pour tous les numéros essentiels et services publics",
              color: "bg-yellow-100"
            },
            { 
              icon: <FaSync className="text-3xl text-blue-500" />,
              title: "Actualité",
              text: "Mise à jour permanente de notre base de données",
              color: "bg-blue-100"
            }
          ].map((item, index) => (
            <div 
              key={index}
              className={`${item.color} p-6 rounded-xl shadow-md border border-white transition-all duration-300 hover:-translate-y-1`}
            >
              <div className="flex items-center mb-4">
                <div className="bg-white p-3 rounded-lg shadow-sm mr-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800">{item.title}</h3>
              </div>
              <p className="text-gray-700">{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Chiffres Clés */}
      <section className="my-16 animate-fade-in delay-400">
        <h2 className="text-3xl font-bold text-red-600 mb-10 text-center">
          AllôBénin <span className="text-green-600">en Chiffres</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "500+", label: "Numéros vérifiés", color: "text-green-600" },
            { value: "24h/24", label: "Disponibilité", color: "text-blue-600" },
            { value: "12", label: "Villes couvertes", color: "text-yellow-600" },
            { value: "98%", label: "Satisfaction", color: "text-red-600" }
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg text-center border border-gray-100 transition-transform duration-300 hover:scale-105"
            >
              <div className={`text-4xl font-bold ${item.color} mb-2`}>{item.value}</div>
              <div className="text-gray-600">{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Partenaires */}
      <section className="my-16 animate-fade-in delay-500">
        <h2 className="text-3xl font-bold text-green-800 mb-8 text-center">
          Nos <span className="text-yellow-500">Partenaires</span>
        </h2>
        <div className="flex flex-wrap justify-center gap-8 bg-white p-8 rounded-2xl shadow-lg">
          {[1, 2, 3].map((item, index) => (
            <div
              key={index}
              className="w-40 h-24 bg-gray-50 flex items-center justify-center rounded-lg border border-gray-200 transition-transform duration-300 hover:scale-110"
            >
              {index === 0 && <FaRegBuilding className="text-4xl text-gray-500" />}
              {index === 1 && <FaUniversity className="text-4xl text-gray-500" />}
              {index === 2 && <FaFirstAid className="text-4xl text-gray-500" />}
            </div>
          ))}
        </div>
        <p className="text-center mt-6 text-lg text-gray-600">
          <a href="/contact" className="text-green-600 hover:underline font-semibold">
            Devenez partenaire →
          </a>
        </p>
      </section>

      {/* CTA */}
      <div className="bg-gradient-to-r from-yellow-100 to-yellow-50 border border-yellow-200 rounded-2xl p-8 my-16 text-center shadow-lg animate-fade-in delay-600">
        <h3 className="text-2xl font-bold text-gray-800 mb-4">
          Vous êtes un service public ou une entreprise ?
        </h3>
        <p className="mb-6 text-lg text-gray-700">
          Référencez-vous sur AllôBénin pour augmenter votre visibilité et toucher plus de clients
        </p>
        <a
          href="/contact" 
          className="inline-block bg-gradient-to-r from-green-600 to-green-700 text-white px-8 py-3 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        >
          Nous contacter
        </a>
      </div>

      {/* Styles globaux pour les animations */}
      <style jsx global>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }
        .delay-400 { animation-delay: 0.4s; }
        .delay-500 { animation-delay: 0.5s; }
        .delay-600 { animation-delay: 0.6s; }
      `}</style>
    </main>
  );
};

export default AboutPage;