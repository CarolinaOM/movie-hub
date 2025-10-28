// src/pages/Cartelera.tsx
import React from 'react';
// Importamos la función getAllMovies, que devuelve TODAS las películas con 'showtimes'
import { getAllMovies } from '../utils/dummyData'; 
import MovieList from '../components/MovieList';

const Cartelera: React.FC = () => {
    
    // Obtenemos TODAS las películas (incluye horarios)
    const allMovies = getAllMovies();

    return (
        // 🔑 NOTA: Ya tiene pt-20. Si el problema persiste, revisa el height en MovieCard.tsx
        <div className="bg-gray-900 min-h-screen pt-20"> 
            <div className="container mx-auto p-4 py-12">
                
                {/* Título de la sección "Cartelera General" */}
                <h1 className="text-4xl font-extrabold text-amber-400 mb-10 text-center md:text-left">
                    Cartelera General
                </h1>
                
                {/* Mostramos la lista completa */}
                {allMovies.length > 0 ? (
                    <MovieList movies={allMovies} />
                ) : (
                    <p className="text-white text-center">No hay películas en cartelera actualmente.</p>
                )}
            </div>
        </div>
    );
};

export default Cartelera;