import React, { useState, useEffect } from 'react';
import { FiSearch, FiMapPin, FiX, FiStar, FiPhone, FiUser, FiChevronRight, FiHeart } from 'react-icons/fi';
import { FiCheck} from 'react-icons/fi';

const AnnuaireBenin = () => {
  // Données enrichies avec prix et localisation
  const contactsData = [
    {
      id: 1,
      name: "Police Nationale",
      phone: "117",
      category: "urgence",
      city: "Cotonou",
      rating: 4.5,
      description: "Numéro d'urgence national disponible 24h/24",
      premium: true,
      price: "Gratuit",
      location: { lat: 6.3725, lng: 2.3589 },
      address: "Commissariat Central, Cotonou"
    },
    {
      id: 2,
      name: "SAMU Urgences Médicales",
      phone: "112",
      category: "sante",
      city: "Porto-Novo",
      rating: 4.2,
      description: "Service médical d'urgence avec ambulance",
      premium: false,
      price: "Gratuit",
      location: { lat: 6.4969, lng: 2.6289 },
      address: "Centre Hospitalier, Porto-Novo"
    },
    {
      id: 3,
      name: "Electricien Pro",
      phone: "+229 67 89 45 23",
      category: "artisan",
      city: "Abomey-Calavi",
      rating: 4.8,
      description: "Dépannage électrique rapide et certifié",
      premium: true,
      price: "200 FCFA",
      location: { lat: 6.4485, lng: 2.3557 },
      address: "Zone Industrielle, Abomey-Calavi"
    },
    {
      id: 4,
      name: "Taxi Moto Express",
      phone: "+229 96 45 32 10",
      category: "transport",
      city: "Cotonou",
      rating: 3.9,
      description: "Transport rapide dans toute la ville",
      premium: false,
      price: "150 FCFA",
      location: { lat: 6.3667, lng: 2.4333 },
      address: "Dantokpa, Cotonou"
    },
    {
      id: 5,
      name: "Pompier Secours",
      phone: "118",
      category: "urgence",
      city: "Cotonou",
      rating: 4.7,
      description: "Intervention rapide pour incendie et secours",
      premium: true,
      price: "Gratuit",
      location: { lat: 6.3525, lng: 2.4259 },
      address: "Caserne Gendarmerie, Cotonou"
    },
    {
      id: 6,
      name: "Plombier Qualifié",
      phone: "+229 90 12 34 56",
      category: "artisan",
      city: "Porto-Novo",
      rating: 4.3,
      description: "Réparation fuite d'eau et installation sanitaire",
      premium: false,
      price: "200 FCFA",
      location: { lat: 6.4789, lng: 2.6323 },
      address: "Avenue Jean-Paul II, Porto-Novo"
    },
    {
      id: 7,
      name: "Clinique La Lumière",
      phone: "+229 21 30 45 67",
      category: "sante",
      city: "Cotonou",
      rating: 4.6,
      description: "Clinique privée avec services d'urgence",
      premium: true,
      price: "100 FCFA",
      location: { lat: 6.3628, lng: 2.4250 },
      address: "Akpakpa, Cotonou"
    },
    {
      id: 8,
      name: "Taxi Compteur",
      phone: "+229 95 55 55 55",
      category: "transport",
      city: "Porto-Novo",
      rating: 4.1,
      description: "Service de taxi avec compteur officiel",
      premium: false,
      price: "150 FCFA",
      location: { lat: 6.4923, lng: 2.6036 },
      address: "Place Toffa, Porto-Novo"
    }
  ];

  // États
  const [filters, setFilters] = useState({
    search: '',
    city: 'all',
    category: 'all',
    price: 'all'
  });
  
  const [showMap, setShowMap] = useState(false);
  const [activeContacts, setActiveContacts] = useState(contactsData);
  const [selectedContact, setSelectedContact] = useState(null);
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);
  const [showRatingModal, setShowRatingModal] = useState(false);
  const [currentRating, setCurrentRating] = useState(0);
  const [ratedContact, setRatedContact] = useState(null);

  // Charger les favoris depuis le localStorage
  useEffect(() => {
    const savedFavorites = localStorage.getItem('favorites');
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  // Sauvegarder les favoris dans le localStorage
  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Normaliser le texte pour la recherche (enlever accents et mettre en minuscule)
  const normalizeText = (text) => {
    return text
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "");
  };

  // Appliquer les filtres
  useEffect(() => {
    let filtered = showFavorites ? [...favorites] : [...contactsData];
    
    if (filters.search) {
      const searchTerm = normalizeText(filters.search);
      filtered = filtered.filter(c => 
        normalizeText(c.name).includes(searchTerm) || 
        normalizeText(c.description).includes(searchTerm) ||
        normalizeText(c.city).includes(searchTerm) ||
        normalizeText(c.phone).includes(searchTerm)
      );
    }
    
    if (filters.city !== 'all') {
      filtered = filtered.filter(c => c.city === filters.city);
    }
    
    if (filters.category !== 'all') {
      filtered = filtered.filter(c => c.category === filters.category);
    }
    
    if (filters.price !== 'all') {
      filtered = filtered.filter(c => 
        filters.price === 'free' ? c.price === "Gratuit" : c.price !== "Gratuit"
      );
    }
    
    setActiveContacts(filtered);
  }, [filters, showFavorites, favorites]);

  // Gestion des changements de filtre
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  // Réinitialiser les filtres
  const resetFilters = () => {
    setFilters({
      search: '',
      city: 'all',
      category: 'all',
      price: 'all'
    });
    setShowFavorites(false);
  };

  // Gestion des favoris
  const toggleFavorite = (contact) => {
    if (favorites.some(f => f.id === contact.id)) {
      setFavorites(favorites.filter(f => f.id !== contact.id));
    } else {
      setFavorites([...favorites, contact]);
    }
  };

  // Gestion de l'appel et notation
  const handleCall = (contact) => {
    setRatedContact(contact);
    // Simuler un appel avec un délai avant d'afficher la notation
    setTimeout(() => setShowRatingModal(true), 3000);
  };

  // Ouvrir l'itinéraire dans Google Maps
  const openMaps = (lat, lng) => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      {/* Header Hero */}
      <header className="bg-gradient-to-r from-green-600 to-green-800 text-white py-16 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Annuaire des <span className="text-yellow-300">Numéros Utiles</span> Bénin
        </h1>
        <p className="text-xl max-w-2xl mx-auto">
          Trouvez instantanément les contacts essentiels partout au Bénin
        </p>
        <div className="flex justify-center gap-4 mt-6">
          <button 
            onClick={() => setShowFavorites(false)}
            className={`px-4 py-2 rounded-full ${!showFavorites ? 'bg-white text-green-700 font-medium' : 'bg-green-700 text-white'}`}
          >
            Tous les contacts
          </button>
          <button 
            onClick={() => setShowFavorites(true)}
            className={`px-4 py-2 rounded-full flex items-center ${showFavorites ? 'bg-white text-green-700 font-medium' : 'bg-green-700 text-white'}`}
          >
            <FiHeart className="mr-2" /> Favoris ({favorites.length})
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8 max-w-7xl">
        {/* Barre de recherche */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <FiSearch className="text-gray-400 text-xl" />
          </div>
          <input
            type="text"
            name="search"
            value={filters.search}
            onChange={handleFilterChange}
            placeholder="Rechercher un contact, une ville (ex: Cotonou), un numéro..."
            className="w-full pl-12 pr-10 py-4 border-0 rounded-xl shadow-lg focus:ring-2 focus:ring-green-500 focus:outline-none text-lg"
          />
          {filters.search && (
            <button 
              onClick={() => setFilters({...filters, search: ''})}
              className="absolute inset-y-0 right-0 pr-3 flex items-center"
            >
              <FiX className="text-gray-500 hover:text-gray-700 text-xl" />
            </button>
          )}
        </div>

        {/* Filtres */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          {/* Filtre Ville */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">Ville</label>
            <select
              name="city"
              value={filters.city}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">Toutes les villes</option>
              <option value="Cotonou">Cotonou</option>
              <option value="Porto-Novo">Porto-Novo</option>
              <option value="Abomey-Calavi">Abomey-Calavi</option>
            </select>
          </div>

          {/* Filtre Catégorie */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">Catégorie</label>
            <select
              name="category"
              value={filters.category}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">Toutes catégories</option>
              <option value="urgence">Urgence</option>
              <option value="sante">Santé</option>
              <option value="artisan">Artisans</option>
              <option value="transport">Transport</option>
            </select>
          </div>

          {/* Filtre Prix */}
          <div className="bg-white p-4 rounded-xl shadow-md">
            <label className="block text-sm font-medium text-gray-700 mb-1">Tarif</label>
            <select
              name="price"
              value={filters.price}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-200 rounded-lg focus:ring-green-500 focus:border-green-500"
            >
              <option value="all">Tous les tarifs</option>
              <option value="free">Gratuit</option>
              <option value="paid">Payant</option>
            </select>
          </div>

          {/* Bouton Reset */}
          <div className="flex items-end">
            <button
              onClick={resetFilters}
              className="w-full bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition flex items-center justify-center"
            >
              <FiX className="mr-2" />
              Réinitialiser
            </button>
          </div>
        </div>

        {/* Bouton Géolocalisation */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setShowMap(!showMap)}
            className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold py-3 px-6 rounded-full flex items-center shadow-lg transition-all"
          >
            <FiMapPin className="mr-2" />
            {showMap ? "Cacher la carte" : "Afficher sur la carte"}
          </button>
        </div>

        {/* Carte (conditionnelle) */}
        {showMap && (
          <div className="mb-8 overflow-hidden">
            <div className="bg-gray-100 rounded-2xl h-64 flex items-center justify-center shadow-inner">
              <p className="text-gray-500">
                Carte interactive avec les contacts ({activeContacts.length} résultats)
              </p>
            </div>
          </div>
        )}

        {/* Résultats */}
        <div className="mb-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-gray-800">
            {showFavorites ? 'Mes Favoris' : 'Tous les contacts'} ({activeContacts.length})
          </h2>
          {activeContacts.length === 0 && (
            <button 
              onClick={resetFilters}
              className="text-green-600 hover:text-green-800 font-medium"
            >
              Réinitialiser les filtres
            </button>
          )}
        </div>

        {/* Liste des contacts */}
        {activeContacts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeContacts.map(contact => (
              <div
                key={contact.id}
                onClick={() => setSelectedContact(contact)}
                className={`bg-white rounded-2xl overflow-hidden shadow-lg cursor-pointer transition-all hover:shadow-xl ${contact.premium ? 'border-2 border-yellow-400' : 'border border-gray-100'}`}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-xl font-bold text-gray-800">{contact.name}</h3>
                      <p className="text-green-600 font-medium">{contact.city}</p>
                    </div>
                    <div className="flex items-center">
                      {contact.premium && (
                        <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2.5 py-0.5 rounded-full mr-2">
                          PREMIUM
                        </span>
                      )}
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleFavorite(contact);
                        }}
                        className={`text-xl ${favorites.some(f => f.id === contact.id) ? 'text-red-500 fill-red-500' : 'text-gray-300 hover:text-red-500'}`}
                      >
                        <FiHeart />
                      </button>
                    </div>
                  </div>

                  <div className="mt-3 flex justify-between items-center">
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <FiStar
                          key={i}
                          className={`w-4 h-4 ${i < Math.floor(contact.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                        />
                      ))}
                      <span className="ml-1 text-gray-600 text-sm">{contact.rating}</span>
                    </div>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      contact.price === "Gratuit" ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                    }`}>
                      {contact.price}
                    </span>
                  </div>

                  <p className="mt-3 text-gray-600">{contact.description}</p>

                  <div className="mt-6 flex justify-between items-center">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCall(contact);
                      }}
                      className="text-green-600 hover:text-green-800 flex items-center font-medium"
                    >
                      <FiPhone className="mr-2" />
                      <span className="font-mono">{contact.phone}</span>
                    </button>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        openMaps(contact.location.lat, contact.location.lng);
                      }}
                      className="text-blue-600 hover:text-blue-800 flex items-center text-sm"
                    >
                      <FiMapPin className="mr-1" /> Itinéraire
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl shadow-md">
            <div className="text-6xl mb-4">😕</div>
            <h3 className="text-xl font-medium text-gray-700">
              {showFavorites ? "Aucun favori enregistré" : "Aucun résultat trouvé"}
            </h3>
            <p className="text-gray-500 mt-2 mb-6">
              {showFavorites ? "Ajoutez des contacts à vos favoris pour les retrouver facilement" : "Essayez d'élargir vos critères de recherche"}
            </p>
            <button
              onClick={resetFilters}
              className="bg-green-600 hover:bg-green-700 text-white font-medium py-2 px-6 rounded-full transition"
            >
              {showFavorites ? "Voir tous les contacts" : "Réinitialiser les filtres"}
            </button>
          </div>
        )}

        {/* Section Premium simplifiée */}
<section className="mt-16 bg-gradient-to-br from-green-700 to-green-900 text-white rounded-2xl p-8 text-center shadow-2xl relative overflow-hidden">
  {/* Éléments décoratifs */}
  <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-400 rounded-full opacity-20"></div>
  <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-white rounded-full opacity-10"></div>

  <div className="relative z-10">
    <div className="inline-flex items-center bg-yellow-400 text-green-900 text-xs font-bold px-3 py-1 rounded-full mb-4">
      <FiStar className="mr-1" /> POPULAIRE
    </div>
    
    <h2 className="text-2xl md:text-3xl font-bold mb-4">
      Passez à la version <span className="text-yellow-300">Premium+</span>
    </h2>
    
    <p className="text-lg mb-6 max-w-2xl mx-auto">
      Découvrez l'expérience complète avec des fonctionnalités exclusives :
    </p>

    {/* Liste des fonctionnalités Premium */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8 text-left max-w-3xl mx-auto">
      <div className="flex items-start">
        <div className="bg-green-600 p-1 rounded-full mr-3 mt-1">
          <FiCheck className="text-white text-sm" />
        </div>
        <div>
          <h4 className="font-semibold">Contacts illimités</h4>
          <p className="text-green-100 text-sm">Accès à tous les services au Bénin</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-green-600 p-1 rounded-full mr-3 mt-1">
          <FiCheck className="text-white text-sm" />
        </div>
        <div>
          <h4 className="font-semibold">Favoris illimités</h4>
          <p className="text-green-100 text-sm">Sauvegarde de tous vos contacts essentiels</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-green-600 p-1 rounded-full mr-3 mt-1">
          <FiCheck className="text-white text-sm" />
        </div>
        <div>
          <h4 className="font-semibold">Support prioritaire</h4>
          <p className="text-green-100 text-sm">Réponse garantie en moins de 2h</p>
        </div>
      </div>
      
      <div className="flex items-start">
        <div className="bg-green-600 p-1 rounded-full mr-3 mt-1">
          <FiCheck className="text-white text-sm" />
        </div>
        <div>
          <h4 className="font-semibold">Alertes en temps réel</h4>
          <p className="text-green-100 text-sm">Notifications des nouveaux services</p>
        </div>
      </div>
    </div>

    {/* Prix et CTA */}
    <div className="flex flex-col md:flex-row items-center justify-center gap-6">
      <div className="text-center">
        <p className="text-green-200 mb-1">À partir de seulement</p>
        <div className="flex items-start justify-center">
          <span className="text-4xl font-bold">2,500</span>
          <span className="text-lg mt-1">FCFA/mois</span>
        </div>
      </div>
      
      <button
        className="bg-white text-green-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition-all hover:scale-105 flex items-center"
      >
        Essai gratuit 7 jours
        <FiChevronRight className="ml-1" />
      </button>
    </div>
  </div>
</section>
      </main>

      {/* Modal Contact */}
      {selectedContact && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          onClick={() => setSelectedContact(null)}
        >
          <div className="bg-white rounded-2xl w-full max-w-md overflow-hidden shadow-2xl"
            onClick={e => e.stopPropagation()}
          >
            <div className="p-6">
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">{selectedContact.name}</h3>
                  <p className="text-green-600 font-medium">{selectedContact.city}</p>
                </div>
                <button 
                  onClick={() => setSelectedContact(null)}
                  className="text-gray-400 hover:text-gray-600"
                >
                  <FiX className="w-6 h-6" />
                </button>
              </div>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={`w-6 h-6 ${i < Math.floor(selectedContact.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                  <span className="ml-2 text-gray-600 text-lg">{selectedContact.rating}</span>
                </div>
                <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                  selectedContact.price === "Gratuit" ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'
                }`}>
                  {selectedContact.price}
                </span>
              </div>

              <p className="mt-4 text-gray-600 text-lg">{selectedContact.description}</p>
              <p className="mt-2 text-gray-500">{selectedContact.address}</p>

              <div className="mt-6 bg-gray-50 p-4 rounded-lg">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-gray-500">Numéro de téléphone</p>
                    <a 
                      href={`tel:${selectedContact.phone}`}
                      className="text-xl font-bold text-green-600 hover:text-green-800"
                      onClick={(e) => {
                        e.stopPropagation();
                        handleCall(selectedContact);
                      }}
                    >
                      {selectedContact.phone}
                    </a>
                  </div>
                  <a
                    href={`tel:${selectedContact.phone}`}
                    className="bg-green-600 hover:bg-green-700 text-white p-3 rounded-full"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleCall(selectedContact);
                    }}
                  >
                    <FiPhone className="w-6 h-6" />
                  </a>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-4">
                <button 
                  className="bg-gray-100 hover:bg-gray-200 text-gray-800 py-2 px-4 rounded-lg transition flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFavorite(selectedContact);
                  }}
                >
                  <FiHeart className={`mr-2 ${favorites.some(f => f.id === selectedContact.id) ? 'text-red-500 fill-red-500' : 'text-gray-400'}`} />
                  {favorites.some(f => f.id === selectedContact.id) ? 'Retirer des favoris' : 'Ajouter aux favoris'}
                </button>
                <button 
                  className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition flex items-center justify-center"
                  onClick={(e) => {
                    e.stopPropagation();
                    openMaps(selectedContact.location.lat, selectedContact.location.lng);
                  }}
                >
                  <FiMapPin className="mr-2" />
                  Itinéraire
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Modal de notation */}
      {showRatingModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl p-6 max-w-sm w-full">
            <h3 className="font-bold text-lg mb-2">Noter {ratedContact?.name}</h3>
            <p className="text-gray-600 mb-4">Comment était votre expérience avec ce service ?</p>
            
            <div className="flex justify-center my-4">
              {[1, 2, 3, 4, 5].map(star => (
                <button 
                  key={star} 
                  onClick={() => setCurrentRating(star)}
                  className="mx-1 text-3xl"
                >
                  <FiStar className={star <= currentRating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"} />
                </button>
              ))}
            </div>
            
            <div className="flex justify-end gap-2 mt-6">
              <button
                onClick={() => setShowRatingModal(false)}
                className="px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg"
              >
                Annuler
              </button>
              <button
                onClick={() => {
                  // Ici vous pourriez envoyer la notation à votre backend
                  console.log(`Note ${currentRating} pour ${ratedContact.name}`);
                  setShowRatingModal(false);
                  setCurrentRating(0);
                }}
                className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg disabled:bg-gray-300"
                disabled={!currentRating}
              >
                Envoyer
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AnnuaireBenin;