import React, { useState } from 'react';
import {
  BiEnvelope,
  BiSend,
  BiPhone,
  BiPhoneCall,
  BiTime,
  BiErrorAlt,
  BiMap,
  BiCheckCircle
} from 'react-icons/bi';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineTwitter,
  AiOutlineWhatsApp,
  AiOutlineLinkedin
} from 'react-icons/ai';
import { FiAlertTriangle } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch('https://formspree.io/f/xldjazby', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus('success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
      } else {
        throw new Error('Erreur lors de l\'envoi');
      }
    } catch (error) {
      console.error('Error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus(null), 5000);
    }
  };

  return (
    <main className="container mx-auto px-4 py-16 max-w-6xl">
      {/* Section Titre avec animation CSS */}
      <section className="mb-16 text-center animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-extrabold text-green-800 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-yellow-500">
            Contactez-nous
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Nous sommes disponibles pour répondre à toutes vos questions
        </p>
      </section>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Formulaire amélioré */}
        <div className="bg-white p-8 rounded-2xl shadow-xl border border-gray-100 transition-all duration-300 hover:shadow-2xl">
          <div className="flex items-center mb-8">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <BiEnvelope className="text-green-600 text-2xl" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800">
              Envoyez-nous un message
            </h2>
          </div>
          
          {submitStatus === 'success' && (
            <div className="mb-6 p-4 bg-green-50 text-green-700 rounded-lg flex items-center">
              <BiCheckCircle className="text-xl mr-2" />
              Message envoyé avec succès!
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="mb-6 p-4 bg-red-50 text-red-700 rounded-lg flex items-center">
              <FiAlertTriangle className="text-xl mr-2" />
              Erreur lors de l'envoi. Veuillez réessayer.
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">
                Nom complet *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              />
            </div>

            <div className="space-y-1">
              <label htmlFor="subject" className="text-sm font-medium text-gray-700">
                Sujet *
              </label>
              <select
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              >
                <option value="">Sélectionnez un sujet</option>
                <option value="Demande générale">Demande générale</option>
                <option value="Signalement numéro">Signalement de numéro</option>
                <option value="Référencement">Demande de référencement</option>
                <option value="Partenariat">Proposition de partenariat</option>
              </select>
            </div>

            <div className="space-y-1">
              <label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent transition"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full py-3 px-6 rounded-xl font-bold transition-all flex items-center justify-center ${
                isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed'
                  : 'bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 text-white shadow-md hover:shadow-lg'
              }`}
            >
              {isSubmitting ? (
                'Envoi en cours...'
              ) : (
                <>
                  <BiSend className="mr-2" />
                  Envoyer le message
                </>
              )}
            </button>
          </form>
        </div>

        {/* Section contact améliorée */}
        <div className="space-y-8">
          {/* Carte de contact */}
          <div className="bg-gradient-to-br from-green-50 to-yellow-50 p-8 rounded-2xl shadow-lg border border-gray-200">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
              <BiPhone className="text-green-600 text-3xl mr-3" />
              Nos coordonnées
            </h3>
            
            <div className="space-y-5">
              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                  <BiEnvelope className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Email</h4>
                  <a href="mailto:allobenin3@gmail.com" className="text-gray-600 hover:text-green-600 transition">
                    allobenin3@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                  <BiPhoneCall className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Téléphone</h4>
                  <a href="tel:+22943757982" className="text-gray-600 hover:text-green-600 transition">
                    +229 43 75 79 82
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                  <BiTime className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Heures d'ouverture</h4>
                  <p className="text-gray-600">Lundi-Vendredi: 8h-18h</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-white p-2 rounded-lg mr-4 shadow-sm">
                  <BiMap className="text-green-600 text-xl" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-700">Adresse</h4>
                  <p className="text-gray-600">Cotonou, Bénin</p>
                </div>
              </div>
            </div>
          </div>

          {/* Urgence */}
          <div className="bg-white p-6 rounded-2xl shadow-lg border-l-4 border-red-500">
            <h3 className="text-xl font-bold text-red-600 mb-4 flex items-center">
              <FiAlertTriangle className="text-red-500 text-2xl mr-2" />
              Urgence technique
            </h3>
            <p className="text-gray-700 mb-4">
              Pour tout problème urgent nécessitant une assistance immédiate.
            </p>
            <a
              href="tel:+22943757982"
              className="inline-flex items-center px-5 py-2 bg-red-600 hover:bg-red-700 text-white font-semibold rounded-lg transition"
            >
              <BiPhoneCall className="mr-2" />
              Appeler le support urgent
            </a>
          </div>

          {/* Réseaux sociaux */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h3 className="text-xl font-bold text-gray-800 mb-4">
              Suivez-nous sur les réseaux
            </h3>
            <div className="flex flex-wrap gap-4">
              {[
                { icon: <AiFillFacebook className="text-xl" />, 
                  color: 'bg-blue-600 hover:bg-blue-700', 
                  label: 'Facebook' },
                { icon: <AiFillInstagram className="text-xl" />, 
                  color: 'bg-pink-500 hover:bg-pink-600', 
                  label: 'Instagram' },
                { icon: <AiOutlineTwitter className="text-xl" />, 
                  color: 'bg-blue-400 hover:bg-blue-500', 
                  label: 'Twitter' },
                { icon: <AiOutlineWhatsApp className="text-xl" />, 
                  color: 'bg-green-500 hover:bg-green-600', 
                  label: 'WhatsApp' },
              ].map((social, index) => (
                <a
                  key={index}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${social.color} text-white p-3 rounded-full transition transform hover:scale-110 flex items-center justify-center`}
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Animation CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
      `}</style>
    </main>
  );
};

export default Contact;