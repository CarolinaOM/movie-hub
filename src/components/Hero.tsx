// src/components/Hero.tsx
import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  const featuredMovie = {
    id: 99, 
    // NOTA: El título ha sido ajustado en dummyData, pero lo mantenemos aquí para la estructura
    title: 'Tom y Jerry: Forbidden Compass', 
    rating: '8.5', 
    synopsis: 'Tom y Jerry se encuentran en una aventura prehistórica después de un accidente con una máquina del tiempo. Deberán trabajar juntos para encontrar la forma de regresar a casa mientras evitan dinosaurios y cavernícolas.',
    posterImage: 'tomyjerry_time_adventure.jpg', 
    duration: '1h 25m',
    genre: 'Animación, Infantil',
  };

  return (
    // Altura automática en móvil, fija en escritorio
    <div className="relative w-full bg-gray-800 text-white p-6 md:p-12 flex items-center justify-center 
                    min-h-[70vh] md:h-[600px]"> 
      
      <div className="container mx-auto relative flex flex-col md:flex-row items-center justify-center space-y-8 md:space-y-0 md:space-x-12 pb-12">
        
        {/* Sección del Texto (Izquierda) */}
        <div className="max-w-xl text-center md:text-left order-2 md:order-none"> 
          <p className="text-lg text-amber-400 font-bold mb-2">Película de la Semana</p> 
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 leading-tight">
            {featuredMovie.title}
          </h1>
          <div className="flex items-center justify-center md:justify-start space-x-4 mb-6">
            <span className="bg-amber-500 text-sm px-3 py-1 rounded-full font-semibold">
              ⭐ {featuredMovie.rating}
            </span>
            <span className="text-gray-400">Duración: {featuredMovie.duration}</span>
            <span className="text-gray-400">Género: {featuredMovie.genre}</span>
          </div>
          
          <p className="text-gray-300 text-lg mb-8 line-clamp-3">
            {featuredMovie.synopsis}
          </p>
          
          <Link 
            to={`/movie/${featuredMovie.id}`} 
            className="inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-3 px-8 rounded-lg transition duration-300 shadow-lg"
          >
            Ver Detalles Ahora
          </Link>
        </div>

        {/* Sección de la Imagen (Derecha) */}
        <div className="flex-shrink-0 order-1 md:order-none">
          {featuredMovie.posterImage && (
            <img 
              src={`/images/${featuredMovie.posterImage}`} 
              alt={`Poster de ${featuredMovie.title}`} 
              className="rounded-lg shadow-2xl h-auto w-auto 
                         max-h-96 max-w-xs sm:max-w-sm md:max-w-xs lg:max-w-sm xl:max-w-md" 
            />
          )}
        </div>

      </div>
    </div>
  );
};

export default Hero;