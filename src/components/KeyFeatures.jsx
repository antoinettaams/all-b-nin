import React from 'react';
import {
  FiSearch, FiFilter, FiMapPin, FiSmartphone,
  FiClock, FiShield, FiDownload
} from 'react-icons/fi';
import { RiAiGenerate } from 'react-icons/ri';

const KeyFeatures = () => {
  const features = [
    {
      icon: <FiSearch className="w-6 h-6" />,
      title: "Recherche intelligente",
      description: "Trouvez instantanément les contacts avec notre moteur de recherche avancé",
      highlight: "Reconnaissance vocale incluse",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: <FiFilter className="w-6 h-6" />,
      title: "Filtres précis",
      description: "Affinez vos résultats par localisation, disponibilité et catégorie",
      highlight: "Filtres personnalisables",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: "Géolocalisation",
      description: "Visualisez les services proches de vous sur notre carte interactive",
      highlight: "Itinéraires intégrés",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: <FiSmartphone className="w-6 h-6" />,
      title: "Application mobile",
      description: "Accès à tous les contacts même hors connexion",
      highlight: "Notifications instantanées",
      color: "bg-red-100 text-red-600"
    },
    {
      icon: <RiAiGenerate className="w-6 h-6" />,
      title: "Listes automatiques",
      description: "Générez des listes de contacts adaptées à vos besoins",
      highlight: "Export en un clic",
      color: "bg-yellow-100 text-yellow-600"
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: "Sécurité totale",
      description: "Tous nos contacts sont vérifiés et certifiés",
      highlight: "Données protégées",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* En-tête */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Nos <span className="text-green-600">fonctionnalités</span> clés
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez ce qui fait la puissance d'AllôBénin pour trouver les meilleurs services
          </p>
        </div>

        {/* Grille de fonctionnalités */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 border border-gray-100"
            >
              <div className="p-6">
                <div className={`w-12 h-12 ${feature.color} rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600 mb-4">{feature.description}</p>
                <div className="flex items-center text-sm text-green-600 font-medium">
                  <FiClock className="mr-2" />
                  {feature.highlight}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA supplémentaire */}
        <div className="mt-16 text-center">
          <a
            href="#download"
            className="inline-flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-colors shadow-md"
          >
            <FiDownload className="mr-2" />
            Télécharger l'application
          </a>
        </div>
      </div>
    </section>
  );
};

export default KeyFeatures;