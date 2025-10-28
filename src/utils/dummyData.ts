// src/utils/dummyData.ts

// Array que simula nuestra "base de datos" manual con detalles completos
const DUMMY_MOVIE_DETAILS = [
  //  NUEVA PELÍCULA 1: Popular (ID 1)
  {
    id: 1,
    title: 'Avatar: Fuego y ceniza',
    tagline: 'El nuevo camino de Pandora.',
    overview: 'La familia Sully debe enfrentarse a una nueva amenaza en los rincones de Pandora, descubriendo secretos ancestrales y elementos nunca antes vistos.',
    rating: 8.9,
    runtime: '210 min',
    release_date: '2025',
    genres: ['Ciencia Ficción', 'Aventura', 'Fantasía'],
    poster_path: 'avatar.jpeg', 
    trailer_id: 'qK1t7vQv7fI', // ID de YouTube simulado
    country: 'USA',
    director: 'James Cameron',
    writer: 'James Cameron',
    companies: '20th Century Studios',
  },
  // 🔑 NUEVA PELÍCULA 2: Popular (ID 2)
  {
    id: 2,
    title: 'Supergirl: Woman of Tomorrow',
    tagline: 'Una heroína en el universo expansivo.',
    overview: 'Supergirl se embarca en un viaje espacial épico para descubrir su verdadera misión en el cosmos, enfrentándose a enemigos intergalácticos y redefiniendo el significado de Krypton.',
    rating: 8.5,
    runtime: '125 min',
    release_date: '2026',
    genres: ['Acción', 'Superhéroes', 'Ciencia Ficción'],
    poster_path: 'supergirl.jpg', 
    trailer_id: 'atL0F5d-QzU', // ID de YouTube simulado
    country: 'USA',
    director: 'Milly Alcock',
    writer: 'Tom King',
    companies: 'DC Studios',
  },
  // 🔑 NUEVA PELÍCULA 3: Popular (ID 3)
  {
    id: 3,
    title: 'El gato con sombrero',
    tagline: 'Donde la imaginación se vuelve caos.',
    overview: 'Dos niños aburridos en casa descubren que un gato gigante que habla y usa un sombrero raya su día con un caos incontrolable, enseñándoles una lección inolvidable.',
    rating: 7.5,
    runtime: '95 min',
    release_date: '2026',
    genres: ['Animación', 'Familiar', 'Comedia'],
    poster_path: 'gato.jpg', // 
    trailer_id: 'kuM8H01mX6Y', // ID de YouTube simulado
    country: 'USA',
    director: 'Alessandro Carloni',
    writer: 'Dr. Seuss',
    companies: 'Warner Bros. Pictures Animation',
  },
  // Película 99 (Película del Hero Section: Tom y Jerry: Forbidden Compass)
  {
    id: 99,
    title: 'Tom y Jerry: Forbidden Compass', 
    tagline: '¡La persecución más grande a través de la historia! (Título original: Tom & Jerry: Forbidden Compass)',
    overview: 'Tom y Jerry viajan en el tiempo. Tras una loca persecución en el Museo Metropolitan de Nueva York, un portal del tiempo los transporta a una ciudad dorada inspirada en la Antigua China, llena de magia, guerreros y criaturas sorprendentes. Para regresar a casa, viven una increíble aventura repleta de acción y humor, donde deben enfrentarse a nuevos enemigos… ¡y quizás aprender a trabajar juntos!',
    rating: 8.5,
    runtime: '104 min', 
    release_date: '2025', 
    genres: ['Animación', 'Comedia', 'Fantástico', 'Viajes en el tiempo', 'Gatos', 'Roedores'], 
    poster_path: 'tomyjerry_time_adventure.jpg', 
    trailer_id: 'p7Hru3v9NSw', 
    country: 'China',
    director: 'Zhang Gang',
    writer: 'Zhang Gang',
    companies: 'China Film Co. Ltd., Warner Bros. Discovery, Origin Animation.',
  },
];

// Función para buscar una película por su ID
export const getMovieById = (id: string) => {
  const numericId = parseInt(id);
  return DUMMY_MOVIE_DETAILS.find(movie => movie.id === numericId);
};

// Función para usar en Home.tsx (devuelve solo las 3 películas más populares)
export const getPopularMovies = () => {
    // 🔑 Usamos los IDs 1, 2, y 3 que ahora contienen las nuevas películas
    return DUMMY_MOVIE_DETAILS.filter(movie => [1, 2, 3].includes(movie.id)).map(movie => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        image: movie.poster_path,
    }));
};

// Devuelve TODAS las películas para la página /cartelera
export const getAllMovies = () => {
    return DUMMY_MOVIE_DETAILS.map(movie => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        image: movie.poster_path, 
    }));
};