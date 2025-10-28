// src/components/MovieList.tsx
import React from 'react';
import MovieCard from './MovieCard';

// 🔑 1. Interfaz: Debe incluir showtimes (como opcional para Home, o como parte del contrato)
interface Movie {
    id: number;
    title: string;
    release_date: string;
    image: string;
    showtimes?: string[]; // La propiedad crucial para los horarios
}

interface MovieListProps {
    movies: Movie[];
}

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {movies.map(movie => (
                <MovieCard
                    key={movie.id}
                    id={movie.id}
                    title={movie.title}
                    release_date={movie.release_date}
                    image={movie.image}
                    
                    // 🔑 2. CLAVE: Asegúrate de que 'showtimes' se pase como prop.
                    // Si movie.showtimes existe (como en la Cartelera), se pasará.
                    // Si no existe (como en el Inicio), se pasará 'undefined' (lo que es correcto).
                    showtimes={movie.showtimes} 
                />
            ))}
        </div>
    );
};

export default MovieList;