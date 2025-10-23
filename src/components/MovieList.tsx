// src/components/MovieList.tsx
import React from 'react';
import type { Movie } from '../types/Movie'; 
import MovieCard from './MovieCard'; 
// Asegúrate de que MovieCard no tiene la extensión aquí: './MovieCard'

interface MovieListProps {
  // Ahora acepta un array de cualquier cosa, ya que no son objetos Movie completos
  movies: any[]; 
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    
  return (
    // Cuadrícula de Tailwind
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-6">
      
      {/* 🔑 CLAVE: Ahora mapeamos el array simulado */}
      {movies.map((movie, index) => (
        <MovieCard key={movie.id || index} movie={movie} /> 
      ))}

    </div>
  );
};

export default MovieList;