// src/components/Footer.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    // Contenedor principal del footer con color de fondo oscuro y padding
    <footer className="bg-gray-950 text-white mt-12 pt-8 pb-4 border-t border-gray-800">
      <div className="container mx-auto px-4">
        
        {/* 1. SECCIÓN DE ENLACES (Grid y Centrado) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 border-b border-gray-800 pb-8 mb-8">
          
          {/* Columna 1: Logo y Copyright */}
          {/* 🔑 CLAVE: text-center para centrar el contenido de esta columna */}
          <div className="text-center md:text-left col-span-1 sm:col-span-2 md:col-span-1">
            <h3 className="text-3xl font-extrabold text-amber-400 mb-2">MovieHub</h3>
            <p className="text-gray-400 text-sm mt-4">
              &copy; {new Date().getFullYear()} MovieHub. Todos los derechos reservados.
            </p>
          </div>

          {/* Columna 2: Navegación */}
          {/* 🔑 CLAVE: text-center para centrar el texto de esta columna */}
          <div className="text-center">
            <h4 className="text-lg font-bold text-amber-400 mb-4">Navegación</h4>
            {/* 🔑 CLAVE: ul y li deben tener clases para centrar sus elementos, o alineación de texto */}
            <ul className="inline-block md:block">
              <li className="mb-2"><Link to="/" className="text-gray-300 hover:text-amber-500 transition duration-200">Inicio</Link></li>
              <li className="mb-2"><Link to="/cartelera" className="text-gray-300 hover:text-amber-500 transition duration-200">Cartelera</Link></li>
            </ul>
          </div>

          {/* Columna 3: Información y Soporte */}
          {/* La quitamos para simplificar, pero si la tuvieras, también necesitaría 'text-center' */}

           {/* Columna 4: Créditos y Contacto (Movida de la parte inferior para centrar) */}
           {/* 🔑 CLAVE: text-center */}
           <div className="text-center col-span-1 sm:col-span-2 md:col-span-1">
             <h4 className="text-lg font-bold text-amber-400 mb-4">Créditos</h4>
             <p className="text-gray-400 text-sm">
                 Diseño y desarrollo web por Carolina.
             </p>
           </div>

           {/* Dejamos una columna vacía en el grid para el centrado en pantallas grandes */}
           <div className="hidden md:block"></div> 
           
        </div>
        
        {/* 2. SECCIÓN INFERIOR (Pequeños créditos legales o extra) */}
        <div className="text-center text-gray-500 text-xs">
           Hecho con React, TypeScript y Tailwind CSS.
        </div>
      </div>
    </footer>
  );
};

export default Footer;