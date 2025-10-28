// src/pages/Favorites.tsx
import React from 'react';
import MovieList from '../components/MovieList';
// Importamos la función que trae los datos de la cartelera, para simular favoritos
import { getPopularMovies } from '../utils/dummyData'; 

const Favorites = () => {
    // 💡 Simulación: Usamos las mismas películas populares como si fueran las favoritas
    const favoriteMovies = getPopularMovies();
    const isListEmpty = favoriteMovies.length === 0;

    return (
        // Añadimos padding superior para evitar que el contenido quede bajo el Header fijo
        <div className="pt-20 pb-8 container mx-auto p-4 text-white">
            {/* Usamos el color ámbar para el título */}
            <h1 className="text-4xl font-extrabold text-amber-400 mb-8">Mis Películas Favoritas</h1>
            
            {isListEmpty ? (
                // 1. Mensaje si la lista de favoritos está vacía
                <div className="text-center py-20 bg-gray-800 rounded-lg shadow-xl">
                    <p className="text-xl mb-4">Aún no has añadido ninguna película a favoritos.</p>
                    <p className="text-gray-400">Explora la cartelera y haz clic en el botón 'Añadir a Favoritos' para empezar.</p>
                    {/* Botón para volver al inicio, usando el color ámbar */}
                    <a href="/" className="mt-6 inline-block bg-amber-600 hover:bg-amber-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
                        Ir a la Cartelera
                    </a>
                </div>
            ) : (
                // 2. Si hay favoritos, mostramos la lista (usando el mismo componente MovieList)
                <div className="mt-8">
                    {/* El componente MovieList se encargará de mostrar las tarjetas */}
                    <MovieList movies={favoriteMovies} />
                </div>
            )}
        </div>
    );
};

export default Favorites;