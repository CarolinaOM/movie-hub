// src/pages/MovieDetail.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import { getMovieById } from '../utils/dummyData'; // Importamos la función de búsqueda

const MovieDetail = () => {
  // Obtiene el ID de la URL (ej: /movie/99)
  const { id } = useParams<{ id: string }>();

  // Busca los datos de la película por ID. Usamos '99' si el ID es nulo.
  const movieDetails = getMovieById(id || '99');

  // Si el ID no existe en nuestros datos simulados
  if (!movieDetails) {
      return (
          // Usamos pt-20 para asegurar el espacio bajo el Header
          <div className="text-center pt-20 py-20 text-white"> 
              <p className="text-2xl font-bold text-amber-500">Película con ID {id} no encontrada.</p>
          </div>
      );
  }

  return (
    // 🔑 CAMBIO CLAVE: Aumentamos el padding superior de pt-8 a pt-24
    <div className="pt-24 pb-12 text-white"> 
      
      {/* 1. SECCIÓN PRINCIPAL: Título y Metadata */}
      <div className="container mx-auto p-4">
        {/* Usamos text-amber-400 */}
        <h1 className="text-5xl font-extrabold text-amber-400 mb-2">{movieDetails.title}</h1>
        <h2 className="text-xl text-gray-400 mb-8 italic">{movieDetails.tagline}</h2>
      </div>

      {/* 2. CONTENIDO PRINCIPAL: Flexbox para el póster y los detalles */}
      <div className="container mx-auto p-4 flex flex-col lg:flex-row space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* COLUMNA IZQUIERDA: Póster */}
        <div className="lg:w-1/3 flex-shrink-0">
          <img
            src={`/images/${movieDetails.poster_path}`}
            alt={`Póster de ${movieDetails.title}`}
            className="w-full h-auto rounded-xl shadow-2xl"
          />
        </div>

        {/* COLUMNA DERECHA: Sinopsis, Datos, Producción y Tráiler */}
        <div className="lg:w-2/3">
          
          {/* Sinopsis */}
          <h3 className="text-3xl font-bold mb-4">Sinopsis</h3>
          <p className="text-gray-300 text-lg leading-relaxed mb-8">{movieDetails.overview}</p>

          {/* Metadata: Rating, Duración, Fecha, País */}
          <div className="flex flex-wrap gap-6 mb-8 text-lg">
            <div>
              <p className="font-bold text-amber-400">Puntuación</p>
              <p className="text-2xl font-bold">⭐ {movieDetails.rating}</p>
            </div>
            <div>
              <p className="font-bold text-amber-400">Duración</p>
              <p className="text-2xl">{movieDetails.runtime}</p>
            </div>
            <div>
              <p className="font-bold text-amber-400">Lanzamiento</p>
              <p className="text-2xl">{movieDetails.release_date}</p>
            </div>
            <div>
              <p className="font-bold text-amber-400">País</p>
              <p className="text-2xl">{movieDetails.country}</p>
            </div>
          </div>
          
          {/* Director y Guionista */}
          <div className="mb-8 text-lg">
            <p className="font-bold text-amber-400">Dirección y Guion</p>
            <p className="text-xl text-gray-300">{movieDetails.director} / {movieDetails.writer}</p>
          </div>
          
          {/* Géneros */}
          <div className="mb-10">
            <p className="font-bold text-amber-400 mb-2">Géneros</p>
            <div className="flex flex-wrap gap-2">
              {movieDetails.genres.map(genre => (
                <span key={genre} className="bg-gray-700 px-3 py-1 rounded-full text-sm">
                  {genre}
                </span>
              ))}
            </div>
          </div>
          
          {/* Área del Tráiler (YouTube Embed) */}
          <h3 className="text-3xl font-bold mb-4">Tráiler</h3>
          {movieDetails.trailer_id ? (
              <div className="relative overflow-hidden w-full aspect-video rounded-lg shadow-xl">
                  <iframe
                      className="absolute top-0 left-0 w-full h-full"
                      src={`https://www.youtube.com/embed/${movieDetails.trailer_id}`}
                      title={`Tráiler de ${movieDetails.title}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                  ></iframe>
              </div>
          ) : (
              <div className="bg-gray-700 p-8 rounded-lg text-center text-gray-400">
                  Tráiler no disponible en este momento.
              </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;