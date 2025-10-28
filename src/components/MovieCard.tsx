// src/components/MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

// 🔑 Interfaz ACTUALIZADA: Incluye 'showtimes' como opcional
interface MovieCardProps {
    id: number;
    title: string;
    release_date: string;
    image: string; 
    showtimes?: string[]; // Propiedad OPCIONAL: solo se enviará desde Cartelera General
}

// Desestructuración de props: incluye 'showtimes'
const MovieCard: React.FC<MovieCardProps> = ({ id, title, release_date, image, showtimes }) => {
    return (
        // El Link envuelve toda la tarjeta
        <Link to={`/movie/${id}`} className="group block">
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform 
                        transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                
                {/* 1. Área del Póster */}
                <div className="w-full h-80 bg-gray-700 flex items-center justify-center overflow-hidden">
                    <img 
                        src={`/images/${image}`} 
                        alt={`Póster de ${title}`} 
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* 2. Área del Texto */}
                <div className="p-4 text-center">
                    
                    {/* Título */}
                    <h3 className="text-lg font-bold text-amber-400 mb-1 
                                   group-hover:text-amber-500 transition duration-300 truncate">
                        {title}
                    </h3>
                    
                    {/* 🔑 LÓGICA CLAVE: Mostrar horarios si existen, sino mostrar el año */}
                    {showtimes && showtimes.length > 0 ? (
                        <div className="flex justify-center flex-wrap gap-2 mt-2">
                            {showtimes.map((time) => (
                                // Botón de Horario
                                <button
                                  key={time}
                                  className="bg-amber-600 hover:bg-amber-700 text-white text-xs font-bold py-1 px-3 rounded transition duration-300"
                                  onClick={(e) => {
                                      // Evita que el clic en el botón active el Link de la tarjeta completa
                                      e.preventDefault(); 
                                      e.stopPropagation();
                                      
                                      // 🔑 MODIFICACIÓN AQUÍ: Hacemos el mensaje más directo.
                                      alert(`¡Comprar boletos! Película: ${title} - Hora: ${time}. (Simulación)`);
                                  }}
                              >
                                  {time}
                              </button>
                            ))}
                        </div>
                    ) : (
                        // Fallback: Muestra el año de lanzamiento (usado en Home.tsx)
                        <p className="text-gray-400 text-sm mt-1">
                            {release_date}
                        </p>
                    )}
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;