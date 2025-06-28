import React from "react";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { MdVerified, MdAccessTime } from "react-icons/md";
import { Link } from "react-router-dom";
import "../App.css";

export default function ServicesSection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-r from-yellow-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        {/* Carte principale avec effet de profondeur */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 md:p-12 max-w-6xl mx-auto overflow-hidden relative">
          {/* Décoration d'arrière-plan */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-green-100 rounded-full filter blur-[80px] opacity-40"></div>
          
          <div className="flex flex-col md:flex-row items-center gap-10 relative z-10">
            {/* Colonne texte */}
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
                <span className="text-green-600">Tous les services essentiels</span><br />
                regroupés pour vous
              </h2>
              
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                AllôBénin centralise les contacts vérifiés du Bénin. Urgences, services publics ou professionnels, 
                accédez en quelques secondes au bon interlocuteur.
              </p>

              {/* Points clés */}
              <div className="space-y-4 mb-8">
                {[
                  { icon: <MdVerified className="text-green-500 text-xl" />, text: "Contacts certifiés et à jour" },
                  { icon: <FaPhoneAlt className="text-amber-500 text-lg" />, text: "Accès immédiat 24h/24" },
                  { icon: <MdAccessTime className="text-blue-500 text-xl" />, text: "Gain de temps garanti" }
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <span className="mt-1">{item.icon}</span>
                    <span className="text-gray-700">{item.text}</span>
                  </div>
                ))}
              </div>

              {/* Boutons */}
              <div className="flex flex-col sm:flex-row gap-4">

                <Link to="/services" className="flex items-center justify-center px-6 py-3 bg-gradient-to-r from-green-600 to-green-700 text-white font-bold rounded-lg shadow-md hover:shadow-lg hover:from-green-700 hover:to-green-800 transition-all duration-300 group"> 
                  Explorer les services
                  <FaArrowRight className="ml-3 group-hover:translate-x-1 transition-transform" />
                </Link>
  
                <Link
                  to="/faq"
                  className="px-6 py-3 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-green-500 hover:text-green-700 transition-colors"
                >
                  Comment ça marche ?
                </Link>
              </div>
            </div>

            {/* Colonne image */}
            <div className="md:w-1/2 flex justify-center relative">
              <div className="relative">
                <img
                  src="/screen.png"
                  alt="Interface AllôBénin"
                  className="rounded-xl shadow-xl w-full max-w-md border-8 border-white transform rotate-1 hover:rotate-0 transition-transform duration-300"
                />
                {/* Badge décoratif */}
                <div className="absolute -bottom-4 -right-4 bg-amber-400 text-white px-4 py-2 rounded-full shadow-md font-bold animate-bounce">
                  Disponible 24/7
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}