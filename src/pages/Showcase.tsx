// src/pages/Showcase.tsx
import React from 'react';
import MovieList from '../components/MovieList';
import { getAllMovies } from '../utils/dummyData';

const Showcase: React.FC = () => {
    // Obtener todas las películas simuladas
    const allMovies = getAllMovies();

    return (
        // Añadimos padding superior para evitar que el contenido quede bajo el Header fijo
        <div className="pt-20 pb-8 container mx-auto p-4 text-white">
            {/* Usamos el color ámbar para el título */}
            <h1 className="text-4xl font-extrabold text-amber-400 mb-8">Cartelera Completa</h1>
            
            {allMovies.length > 0 ? (
                // Reutilizamos el componente MovieList para mostrar la cuadrícula de todas las películas
                <MovieList movies={allMovies} />
            ) : (
                <div className="text-center py-10 text-gray-400">
                    No hay películas disponibles en la cartelera.
                </div>
            )}
        </div>
    );
};

export default Showcase;