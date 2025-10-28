// src/pages/Home.tsx
import React from 'react';
import Hero from '../components/Hero'; 
import MovieList from '../components/MovieList'; 
import { getPopularMovies } from '../utils/dummyData'; 

const Home: React.FC = () => {
  // 🔑 1. Llamada a la función para obtener las 3 películas nuevas
  const popularMovies = getPopularMovies();
  
  return (
    <div className="bg-gray-900 min-h-screen">
      
      {/* SECCIÓN HERO (Película Destacada) */}
      {/* No le ponemos pt- porque el Hero se encarga de la altura */}
      <Hero /> 

      {/* SECCIÓN DE CARTELERA ACTUAL (Películas Populares) */}
      <div className="container mx-auto p-4 py-12">
        
        <h2 className="text-4xl font-extrabold text-amber-400 mb-8">
          Cartelera Actual
        </h2>
        
        {/* 3. Renderizado de la lista usando MovieList */}
        {popularMovies.length > 0 ? (
          <MovieList movies={popularMovies} />
        ) : (
          <p className="text-white">No hay películas populares disponibles en este momento.</p>
        )}
      </div>

    </div>
  );
};

export default Home;