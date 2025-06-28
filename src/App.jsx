import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registrer from './pages/Registrer'; // Orthographe corrigée
import Faq from './pages/Faq';
import Services from './pages/Services';
import AllBNin from './pages/AllBNin'; // Nouveau composant
import NotFound from './pages/NotFound'; // Pour les 404
import Header from './components/Header'; // Import manquant
import Footer from './components/Footer'; // Import manquant
import './App.css';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registrer" element={<Registrer />} />
        <Route path="/services" element={<Services />} />
        <Route path="/all-b-nin" element={<AllBNin />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </>
  );
}