import React, { useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Témoignages avec photos 100% personnes noires
  const testimonials = [
    {
      id: 1,
      name: "Koffi Adékambi",
      role: "Entrepreneur, Cotonou",
      content: "Grâce à AllôBénin, j'ai trouvé des fournisseurs fiables en quelques minutes. L'outil parfait pour les professionnels!",
      rating: 5,
      image: "https://images.pexels.com/photos/7562313/pexels-photo-7562313.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1" // Homme noir professionnel
    },
    {
      id: 2,
      name: "Amina Orou",
      role: "Artisane, Porto-Novo",
      content: "Je reçois désormais plus d'appels de clients sérieux. Un vrai changement pour mon activité artisanale!",
      rating: 5,
      image: "https://images.pexels.com/photos/5905902/pexels-photo-5905902.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1" // Femme noire souriante
    },
    {
      id: 3,
      name: "Marc Agossa",
      role: "Ingénieur, Abomey-Calavi",
      content: "En tant que jeune professionnel, AllôBénin m'a permis de développer mon réseau localement.",
      rating: 4,
      image: "https://images.pexels.com/photos/2380794/pexels-photo-2380794.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1" // Jeune homme noir professionnel
    },
    {
      id: 4,
      name: "Fatou Diallo",
      role: "Commerçante, Parakou",
      content: "AllôBénin a boosté ma visibilité. Mes ventes ont augmenté de 40% en 3 mois!",
      rating: 5,
      image: "https://images.pexels.com/photos/5905777/pexels-photo-5905777.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1" // Femme noire élégante
    },
    {
      id: 5,
      name: "Jean Sègbé",
      role: "Agriculteur, Abomey",
      content: "Je trouve maintenant des acheteurs pour mes produits sans intermédiaires. Merci AllôBénin!",
      rating: 4,
      image: "https://images.pexels.com/photos/5699476/pexels-photo-5699476.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1" // Agriculteur noir souriant
    },
    {
      id: 6,
      name: "Bintou N'diaye",
      role: "Étudiante, Natitingou",
      content: "Je trouve facilement des petits jobs grâce à AllôBénin pour financer mes études.",
      rating: 5,
      image: "https://images.pexels.com/photos/5905497/pexels-photo-5905497.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=1" // Jeune femme noire étudiante
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-yellow-50 to-green-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Ils nous font <span className="text-green-600">confiance</span>
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Découvrez comment AllôBénin simplifie le quotidien des Béninois
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-10 transform transition-all duration-300 hover:shadow-xl">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/3 flex justify-center">
                <div className="relative">
                  <img 
                    src={testimonials[currentTestimonial].image} 
                    alt={testimonials[currentTestimonial].name}
                    className="w-40 h-40 rounded-full object-cover border-4 border-green-100 shadow-md"
                    loading="lazy"
                  />
                  <div className="absolute -bottom-3 -right-3 bg-amber-500 text-white p-2 rounded-full">
                    <FaQuoteLeft className="text-sm" />
                  </div>
                </div>
              </div>
              
              <div className="w-full md:w-2/3">
                <div className="flex mb-3">
                  {[...Array(5)].map((_, i) => (
                    <FaStar 
                      key={i} 
                      className={`text-lg ${i < testimonials[currentTestimonial].rating ? 'text-amber-400' : 'text-gray-200'}`}
                    />
                  ))}
                </div>
                
                <blockquote className="relative">
                  <FaQuoteLeft className="absolute -top-6 -left-6 text-green-100 text-4xl" />
                  <p className="text-gray-700 text-lg italic pl-6 mb-6">
                    {testimonials[currentTestimonial].content}
                  </p>
                </blockquote>
                
                <div>
                  <h4 className="text-xl font-bold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </h4>
                  <p className="text-green-600 font-medium">
                    {testimonials[currentTestimonial].role}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-50 transition-all border border-gray-100"
            aria-label="Témoignage précédent"
          >
            <FaChevronLeft className="text-lg" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 bg-white text-green-600 p-3 rounded-full shadow-lg hover:bg-green-50 transition-all border border-gray-100"
            aria-label="Témoignage suivant"
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all ${index === currentTestimonial ? 'bg-green-600 w-6' : 'bg-gray-300'}`}
                aria-label={`Afficher le témoignage ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;