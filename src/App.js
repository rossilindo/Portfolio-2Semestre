import React, { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import { FaGithub, FaLinkedin, FaEnvelope, FaBars } from 'react-icons/fa'; // Importando os ícones

import Home from './components/Home';
import Projetos from './components/Projetos';
import SobreMim from './components/SobreMim';

function App() {
  const [menuOpen, setMenuOpen] = useState(false); // Estado para controlar a exibição do menu

  const toggleMenu = () => setMenuOpen(!menuOpen); // Função para alternar o menu

  return (
    <Router>
      <div className="App bg-[#343A40] text-gray-800 min-h-screen">
        <nav className="flex justify-between items-center p-5 bg-[#212529] text-white">
          {/* Ícone de hambúrguer alinhado à esquerda em telas pequenas com animação */}
          <button
            className={`sm:hidden flex flex-col items-center justify-center w-6 h-6 space-y-2 transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`}
            onClick={toggleMenu}
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? 'rotate-90 translate-y-2' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-white transition-transform duration-300 ${menuOpen ? '-rotate-120 -translate-y-3' : ''}`}
            ></span>
          </button>

          {/* Nome "João Rossi" */}
          <Link to="/" className="text-xl font-bold">João Rossi</Link>

          {/* Menu de navegação (visível apenas em telas grandes) */}
          <div className="hidden sm:flex space-x-4 mx-auto">
            <Link to="/" className="hover:text-gray-400">Home</Link>
            <Link to="/projetos" className="hover:text-gray-400">Projetos</Link>
            <Link to="/sobre-mim" className="hover:text-gray-400">Sobre Mim</Link>
          </div>

          {/* Ícones de redes sociais */}
          <div className="flex space-x-4 ml-4">
            <a href="https://github.com" className="hover:text-gray-400">
              <FaGithub size={24} />
            </a>
            <a href="https://www.linkedin.com" className="hover:text-gray-400">
              <FaLinkedin size={24} />
            </a>
            <a href="mailto:joaovitor@exemplo.com" className="hover:text-gray-400">
              <FaEnvelope size={24} />
            </a>
          </div>
        </nav>

        {/* Menu hambúrguer (aparece apenas em telas pequenas) com animação de deslizamento */}
        {menuOpen && (
          <div className="sm:hidden bg-[#212529] text-white p-4 space-y-4 transition-transform duration-300 transform translate-y-0">
            <Link to="/" className="block hover:text-gray-400">Home</Link>
            <Link to="/projetos" className="block hover:text-gray-400">Projetos</Link>
            <Link to="/sobre-mim" className="block hover:text-gray-400">Sobre Mim</Link>
          </div>
        )}

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre-mim" element={<SobreMim />} />
        </Routes>

        <footer className="bg-[#212529] text-center py-4 mt-10">
          <p className="text-white">Todos os direitos reservados © João Vitor Rossi</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
