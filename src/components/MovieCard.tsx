// src/components/MovieCard.tsx
import React from 'react';
import type { Movie } from '../types/Movie'; 
import { Link } from 'react-router-dom';

interface MovieCardProps {
  movie: Movie;
}

// Usamos React.FC para tipar la función componente
const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {

  return (
    <div className="bg-gray-700 rounded-lg shadow-xl overflow-hidden p-4">
      <div className="bg-gray-600 h-48 w-full mb-3 rounded-md"></div> 
      <h3 className="text-lg font-semibold text-red-400">Título Placeholder</h3>
      <p className="text-sm text-gray-400">2024</p>
    </div>
  );
};

export default MovieCard;
