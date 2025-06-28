import React, { useState } from 'react';
import { FiCheckCircle, FiUsers, FiBarChart2, FiStar, FiChevronDown, FiChevronUp, FiX, FiPhone } from 'react-icons/fi';
import { FaRegHandshake } from 'react-icons/fa';

const ProSpace = () => {
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({
    company: '',
    name: '',
    phone: '',
    activity: ''
  });

  const benefits = [
    {
      icon: <FiUsers className="w-5 h-5 text-green-600" />,
      text: "Visibilité accrue auprès de milliers d'utilisateurs"
    },
    {
      icon: <FiCheckCircle className="w-5 h-5 text-green-600" />,
      text: "Certification de votre profil pour plus de crédibilité"
    },
    {
      icon: <FiStar className="w-5 h-5 text-green-600" />,
      text: "Mise en avant dans les résultats de recherche"
    },
    {
      icon: <FiBarChart2 className="w-5 h-5 text-green-600" />,
      text: "Accès à des statistiques détaillées"
    },
    {
      icon: <FaRegHandshake className="w-5 h-5 text-green-600" />,
      text: "Opportunités commerciales accrues"
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setShowForm(false);
    // Ajouter ici la logique d'envoi du formulaire
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            <span className="text-green-600">Espace Professionnels</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Développez votre activité en rejoignant notre réseau de professionnels vérifiés
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Colonne gauche - Contenu */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold text-gray-800 mb-4">Pourquoi rejoindre AllôBénin ?</h3>
              
              <div className="space-y-4">
                {benefits.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="flex-shrink-0 mt-0.5">{item.icon}</div>
                    <p className="text-gray-700">{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <button
              onClick={() => setShowForm(!showForm)}
              className={`w-full flex items-center justify-center gap-2 px-6 py-3 font-semibold rounded-lg transition-all ${showForm 
                ? 'bg-gray-100 text-gray-700 hover:bg-gray-200' 
                : 'bg-green-600 text-white hover:bg-green-700'}`}
            >
              {showForm ? (
                <>
                  <FiX className="w-5 h-5" />
                  Fermer le formulaire
                </>
              ) : (
                <>
                  <FiPhone className="w-5 h-5" />
                  Inscrire mon entreprise
                </>
              )}
            </button>
          </div>

          {/* Colonne droite - Formulaire ou Image */}
          <div className="relative min-h-[300px]">
            {showForm ? (
              <form 
                onSubmit={handleSubmit}
                className="bg-white rounded-xl shadow-lg p-6 space-y-5 animate-fade-in"
              >
                <h3 className="text-xl font-bold text-gray-800 mb-2">Formulaire d'inscription</h3>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Entreprise *</label>
                  <input 
                    type="text" 
                    name="company"
                    value={formData.company}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Responsable *</label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone *</label>
                  <input 
                    type="tel" 
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Activité *</label>
                  <input 
                    type="text" 
                    name="activity"
                    value={formData.activity}
                    onChange={handleInputChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                    required
                  />
                </div>

                <button 
                  type="submit" 
                  className="w-full py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition-colors"
                >
                  Envoyer la demande
                </button>
              </form>
            ) : (
              <div className="h-full flex items-center justify-center bg-white rounded-xl shadow-md overflow-hidden">
                <img
                  src="/humans.jpg"
                  alt="Professionnels au Bénin"
                  className="w-full h-full object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProSpace;