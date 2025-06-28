import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Registrer from './pages/Registrer';
import Footer from './components/Footer';
import Faq from './pages/Faq';
import Services from './pages/Services';
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
      </Routes>
      <Footer />
    </>
  );
}
