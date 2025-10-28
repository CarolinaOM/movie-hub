// src/components/MovieList.tsx
import React from 'react';
import MovieCard from './MovieCard';

// 💡 Definición de la interfaz para las props que MovieList espera
// Cada objeto 'movie' en el array 'movies' debe tener estas propiedades.
interface Movie {
    id: number;
    title: string;
    release_date: string;
    image: string; // Nombre del archivo del póster
}

interface MovieListProps {
    movies: Movie[]; // movies es un array de objetos tipo Movie
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {/* Iteramos sobre el array de películas para crear una MovieCard por cada una */}
            {movies.map(movie => (
                //  CLAVE: Pasamos cada propiedad de 'movie' individualmente como prop a MovieCard
                <MovieCard
                    key={movie.id} // Siempre usa una 'key' única cuando iteras
                    id={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    image={movie.image} // Pasamos el nombre del archivo de imagen
                />
            ))}
        </div>
    );
};

export default MovieList;