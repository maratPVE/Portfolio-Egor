import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import NavBar from './composants/navigation/NavBar';
import Footer from './composants/navigation/Footer';
import Accueil from './composants/accueil/Accueil';
import Competences from './composants/competences/Competences';
import Experience from './composants/experience/Experience';
import Projets from './composants/projets/Projets';
import Contact from './composants/contact/Contact';

import './styles/global.css';

function App() {
  return (
    <Router basename="/">
      <div className="app">
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Accueil />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Accueil />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
