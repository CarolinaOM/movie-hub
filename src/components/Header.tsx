// src/components/Header.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-gray-900 z-50 shadow-xl">
      <div className="container mx-auto p-4 flex justify-between items-center">
        
        {/* Logo/Título (MovieHub) */}
        <Link 
          to="/" 
          className="text-3xl font-bold text-amber-400"
        >
          MovieHub
        </Link>

        {/* Navegación */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link 
                to="/" 
                className="text-white hover:text-amber-400 transition duration-300"
              >
                Inicio
              </Link>
            </li>
            {/* 🔑 NUEVO ENLACE: Cartelera */}
            <li>
              <Link 
                to="/cartelera" 
                className="text-white hover:text-amber-400 transition duration-300"
              >
                Cartelera
              </Link>
            </li>
            <li>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;