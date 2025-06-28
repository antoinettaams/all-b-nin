import React from "react";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";
import "../App.css";

export default function Hero() {
  return (
    <section className="relative py-12 md:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-yellow-50 to-green-50 overflow-hidden">
      {/* Éléments d'arrière-plan subtils */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 md:top-20 md:left-20 md:w-80 md:h-80 bg-green-200 rounded-full filter blur-[60px] md:blur-[80px]"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 md:bottom-20 md:right-20 md:w-80 md:h-80 bg-yellow-200 rounded-full filter blur-[60px] md:blur-[80px]"></div>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div className="text-center px-2">
          {/* Titre avec Typewriter */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-4 md:mb-6 leading-tight">
            <Typewriter
              options={{
                strings: [
                  "Trouvez les bons contacts, au bon moment",
                  "Des services utiles, certifiés et disponibles",
                  "Appelez, Trouvez, Résolvez."
                ],
                autoStart: true,
                loop: true,
                delay: 40,
                deleteSpeed: 30,
                cursor: "|",
                cursorClassName: "text-amber-500 animate-blink"
              }}
            />
          </h1>

          {/* Sous-titre */}
          <p className="text-lg sm:text-xl text-gray-700 max-w-md sm:max-w-xl md:max-w-2xl mx-auto mb-6 sm:mb-8 md:mb-10">
            AllôBénin vous connecte rapidement aux numéros utiles et services de confiance au Bénin.
          </p>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">

            <Link to="/services" className="px-6 py-3 sm:px-8 sm:py-4 bg-green-600 hover:bg-green-700 text-white font-bold rounded-lg transition-all hover:scale-105 active:scale-95 shadow-md hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"> 
              Explorer maintenant
            </Link>
            
            <a
              href="#how-it-works"
              className="px-6 py-3 sm:px-8 sm:py-4 bg-white hover:bg-gray-50 text-gray-800 font-semibold rounded-lg transition-all border border-gray-300 hover:border-green-600 flex items-center justify-center gap-2 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Voir la démo
            </a>
          </div>
        </div>

        {/* Indicateurs de confiance */}
        <div className="mt-10 sm:mt-12 md:mt-16 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 max-w-xs sm:max-w-md md:max-w-2xl mx-auto">
          {[
            { value: "500+", label: "Services", color: "text-green-600", bg: "bg-green-100" },
            { value: "24/7", label: "Disponibilité", color: "text-amber-600", bg: "bg-amber-100" },
            { value: "98%", label: "Satisfaction", color: "text-blue-600", bg: "bg-blue-100" }
          ].map((item, index) => (
            <div 
              key={index} 
              className={`${item.bg} p-3 sm:p-4 rounded-lg border border-white shadow-sm flex flex-col items-center justify-center`}
            >
              <div className={`text-2xl sm:text-3xl font-bold ${item.color} mb-1`}>{item.value}</div>
              <div className="text-xs sm:text-sm text-gray-600 text-center">{item.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}