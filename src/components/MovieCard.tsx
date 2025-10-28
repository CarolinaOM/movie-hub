// src/components/MovieCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';

//  Interfaz: Asegúrate que esta estructura sea EXACTA
interface MovieCardProps {
    id: number;
    title: string;
    release_date: string;
    image: string; 
}

//  Desestructuración de props: title, release_date, image
const MovieCard: React.FC<MovieCardProps> = ({ id, title, release_date, image }) => {
    return (
        <Link to={`/movie/${id}`} className="group block">
            <div className="bg-gray-800 rounded-xl shadow-xl overflow-hidden transform 
                        transition duration-300 hover:scale-[1.02] hover:shadow-2xl">
                
                {/* 1. Área del Póster */}
                <div className="w-full h-80 bg-gray-700 flex items-center justify-center overflow-hidden">
                    {/* Asegúrate de que la variable 'title' se use aquí */}
                    <img 
                        src={`/images/${image}`} 
                        alt={`Póster de ${title}`} // <--- 'title' debe estar definido aquí
                        className="w-full h-full object-cover"
                    />
                </div>
                
                {/* 2. Área del Texto */}
                <div className="p-4 text-center">
                    {/* <--- 'title' debe estar definido aquí */}
                    <h3 className="text-lg font-bold text-amber-400 mb-1 
                                   group-hover:text-amber-500 transition duration-300 truncate">
                        {title} 
                    </h3>
                    {/* <--- 'release_date' debe estar definido aquí */}
                    <p className="text-gray-400 text-sm">
                        {release_date} 
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default MovieCard;
