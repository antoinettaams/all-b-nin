import { useState } from "react";
import { FiSearch, FiChevronDown, FiChevronUp, FiExternalLink } from "react-icons/fi";
import { FaQuestionCircle, FaPhone, FaMoneyBillWave, FaCrown } from "react-icons/fa";
import "../App.css";


const faqs = [
  // Catégorie général
  {
    id: 1,
    category: "general",
    question: "Qu'est-ce qu'AllôBénin ?",
    answer:
      "AllôBénin est un annuaire numérique moderne qui centralise les numéros utiles au Bénin : services publics, urgences, entreprises, artisans, etc.",
    icon: <FaQuestionCircle className="text-green-500" />
  },
  {
    id: 2,
    category: "general",
    question: "Comment utiliser l'annuaire AllôBénin ?",
    answer:
      "Vous pouvez rechercher un numéro ou une catégorie via la barre de recherche, filtrer par ville, domaine, notation, ou prix, puis appeler directement via votre téléphone.",
    icon: <FaQuestionCircle className="text-green-500" />
  },
  {
    id: 3,
    category: "general",
    question: "AllôBénin est-il gratuit ?",
    answer:
      "L'accès à l'annuaire est gratuit. Certains numéros ou services premium peuvent être payants, comme indiqué dans les détails du contact.",
    icon: <FaQuestionCircle className="text-green-500" />
  },

  // Catégorie numeros
  {
    id: 4,
    category: "numeros",
    question: "Comment sont vérifiés les numéros dans l'annuaire ?",
    answer:
      "Tous les numéros sont vérifiés manuellement par notre équipe via des appels tests et des sources officielles avant d'être publiés.",
    icon: <FaPhone className="text-blue-500" />
  },
  {
    id: 5,
    category: "numeros",
    question: "Puis-je proposer un nouveau numéro à ajouter ?",
    answer:
      "Oui, vous pouvez soumettre un nouveau contact via notre formulaire d'ajout. Il sera modéré puis ajouté après validation.",
    icon: <FaPhone className="text-blue-500" />
  },

  // Catégorie paiements
  {
    id: 6,
    category: "paiements",
    question: "Quels moyens de paiement sont acceptés ?",
    answer:
      "Nous acceptons Mobile Money (MoMo), Orange Money, ainsi que les paiements par carte bancaire pour les abonnements premium.",
    icon: <FaMoneyBillWave className="text-yellow-500" />
  },
  {
    id: 7,
    category: "paiements",
    question: "Comment fonctionne la tarification par appel ?",
    answer:
      "Certains numéros affichent un prix par appel (ex: 100 FCFA). Ce tarif est débité automatiquement via Mobile Money à chaque appel effectué depuis l'application.",
    icon: <FaMoneyBillWave className="text-yellow-500" />
  },

  // Catégorie premium
  {
    id: 8,
    category: "premium",
    question: "Quels sont les avantages de l'abonnement premium ?",
    answer:
      "L'abonnement premium offre un accès illimité aux numéros exclusifs, une suppression des publicités, et des fonctionnalités avancées comme les alertes personnalisées.",
    icon: <FaCrown className="text-purple-500" />
  },
  {
    id: 9,
    category: "premium",
    question: "Comment s'abonner au service premium ?",
    answer:
      "Vous pouvez vous abonner depuis votre profil utilisateur via la section 'Abonnement', en choisissant la durée et le moyen de paiement souhaité.",
    icon: <FaCrown className="text-purple-500" />
  },
  {
    id: 10,
    category: "premium",
    question: "Puis-je annuler mon abonnement premium à tout moment ?",
    answer:
      "Oui, vous pouvez annuler votre abonnement à tout moment depuis votre compte. L'accès premium restera actif jusqu'à la fin de la période payée.",
    icon: <FaCrown className="text-purple-500" />
  },
];

const categoryData = {
  general: { name: "Général", icon: <FaQuestionCircle className="text-green-500" /> },
  numeros: { name: "Numéros", icon: <FaPhone className="text-blue-500" /> },
  paiements: { name: "Paiements", icon: <FaMoneyBillWave className="text-yellow-500" /> },
  premium: { name: "Premium", icon: <FaCrown className="text-purple-500" /> },
};

export default function FAQPage() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("all");
  const [openId, setOpenId] = useState(null);

  const filteredFaqs = faqs.filter(
    (faq) =>
      (filter === "all" || faq.category === filter) &&
      (faq.question.toLowerCase().includes(search.toLowerCase()) ||
      faq.answer.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      {/* Hero Section avec animation */}
      <section className="text-center mb-16 animate-fade-in">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-600 to-green-800 animate-gradient">
            Foire Aux Questions
          </span>
        </h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto animate-fade-in-up delay-100">
          Trouvez rapidement des réponses à vos questions fréquentes
        </p>
      </section>

      {/* Search & Filter avec animations */}
      <div className="mb-12 animate-fade-in-up delay-200">
        <div className="relative mb-6">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400 animate-pulse" />
          </div>
          <input
            type="text"
            placeholder="Rechercher une question..."
            className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all duration-300 hover:shadow-md"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="flex flex-wrap gap-3 justify-center animate-fade-in-up delay-300">
          {[
            { id: "all", name: "Toutes les catégories" },
            ...Object.entries(categoryData).map(([key, val]) => ({ id: key, ...val }))
          ].map((cat, index) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium flex items-center transition-all duration-300 transform hover:scale-105 ${
                filter === cat.id
                  ? "bg-green-600 text-white shadow-md"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
              style={{ animationDelay: `${300 + index * 50}ms` }}
            >
              {cat.icon && <span className="mr-2">{cat.icon}</span>}
              {cat.name}
            </button>
          ))}
        </div>
      </div>

      {/* FAQ List avec animations */}
      <div className="space-y-4">
        {filteredFaqs.length > 0 ? (
          filteredFaqs.map((faq, index) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden transition-all duration-500 ${
                  isOpen ? "ring-2 ring-green-500 shadow-md" : "hover:shadow-md"
                }`}
                style={{
                  animation: `fadeInUp 0.5s ease forwards`,
                  animationDelay: `${index * 0.1}s`,
                  opacity: 0
                }}
              >
                <button
                  className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  aria-expanded={isOpen}
                >
                  <div className="flex items-start">
                    <div className="mt-1 mr-4 transition-transform duration-300 group-hover:rotate-12">
                      {faq.icon}
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 group-hover:text-green-600 transition-colors">
                      {faq.question}
                    </h3>
                  </div>
                  <div className="transition-transform duration-300">
                    {isOpen ? (
                      <FiChevronUp className="text-gray-500 text-xl transform rotate-180" />
                    ) : (
                      <FiChevronDown className="text-gray-500 text-xl" />
                    )}
                  </div>
                </button>

                <div
                  className={`px-6 pb-6 transition-all duration-500 ease-in-out overflow-hidden ${
                    isOpen
                      ? "opacity-100 max-h-96"
                      : "opacity-0 max-h-0"
                  }`}
                >
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-600 mb-4 animate-fade-in">
                      {faq.answer}
                    </p>
                    {faq.category === "premium" && (
                      <a
                        href="/abonnement"
                        className="inline-flex items-center text-green-600 hover:text-green-800 font-medium transition-colors animate-fade-in delay-100"
                      >
                        En savoir plus sur l'abonnement{" "}
                        <FiExternalLink className="ml-1 animate-bounce-x" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div
            className="text-center py-12 animate-fade-in"
            style={{ animationDelay: "200ms" }}
          >
            <div className="mx-auto w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-4 animate-pulse">
              <FiSearch className="text-gray-400 text-3xl" />
            </div>
            <h3 className="text-xl font-medium text-gray-700 mb-2">
              Aucun résultat trouvé
            </h3>
            <p className="text-gray-500">
              Essayez avec d'autres termes de recherche ou une autre catégorie
            </p>
          </div>
        )}
      </div>

      {/* CTA Section avec animation */}
      <div
        className="mt-16 bg-gradient-to-r from-green-50 to-yellow-50 rounded-2xl p-8 text-center border border-green-100 animate-fade-in-up delay-100"
        style={{ animationDelay: "300ms" }}
      >
        <h3 className="text-2xl font-bold text-gray-800 mb-3">
          Vous ne trouvez pas votre réponse ?
        </h3>
        <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
          Notre équipe support est disponible pour répondre à toutes vos questions
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="/contact"
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-medium rounded-lg shadow transition-all duration-300 hover:scale-105"
          >
            Contactez-nous
          </a>
          <a
            href="tel:+22943757982"
            className="px-6 py-3 bg-white hover:bg-gray-50 text-gray-800 font-medium rounded-lg border border-gray-300 shadow-sm transition-all duration-300 hover:scale-105"
          >
            Appeler le support
          </a>
        </div>
      </div>
    </main>
  );
}