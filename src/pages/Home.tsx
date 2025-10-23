// src/pages/Home.tsx
import React from 'react';
import MovieList from '../components/MovieList.tsx'; // Importación obligatoria
// ⚠️ No importamos useFetchMovies

const Home = () => {
  // 🔑 Datos simulados: Desactiva la carga/error
  const popularMovies = [
    { id: 1, title: 'Dummy 1' }, 
    { id: 2, title: 'Dummy 2' }, 
    { id: 3, title: 'Dummy 3' }
  ]; 
  
  // ⚠️ Ya no hay condicionales de isLoading o error

  return (
    <div className="pt-24 pb-8"> {/* Añadimos padding para no superponer con el Header fijo */}
      <h2 className="text-3xl font-bold mb-6 text-red-500">Películas Populares (Modo Manual)</h2>
      
      {/* Muestra el componente, incluso si las películas no tienen todos los campos de 'Movie' */}
      <MovieList movies={popularMovies} /> 
    </div>
  );
};

export default Home;