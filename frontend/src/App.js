import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ThreatExplained from './pages/ThreatExplained';
import HealthImpacts from './pages/HealthImpacts';
import EnvironmentalToll from './pages/EnvironmentalToll';
import EthicsSolutions from './pages/EthicsSolutions';
import Resources from './pages/Resources';
import About from './pages/About';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/threat" element={<ThreatExplained />} />
          <Route path="/health" element={<HealthImpacts />} />
          <Route path="/environment" element={<EnvironmentalToll />} />
          <Route path="/solutions" element={<EthicsSolutions />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
