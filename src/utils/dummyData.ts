// src/utils/dummyData.ts

// Array que simula nuestra "base de datos" manual con detalles completos
const DUMMY_MOVIE_DETAILS = [
  // PELÍCULA 1 (Avatar: Fuego y ceniza) - Popular
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
    trailer_id: 'bf38f_JINyw', 
    country: 'USA',
    director: 'James Cameron',
    writer: 'James Cameron',
    companies: '20th Century Studios',
    showtimes: ['16:00', '18:30', '21:00'], // 🔑 Horarios
  },
  // PELÍCULA 2 (Supergirl: Woman of Tomorrow) - Popular
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
    trailer_id: 'O1Do0ZaIZGI',
    country: 'USA',
    director: 'Milly Alcock',
    writer: 'Tom King',
    companies: 'DC Studios',
    showtimes: ['17:00', '19:30', '22:00'], // 🔑 Horarios
  },
  // PELÍCULA 3 (El gato con sombrero) - Popular
  {
    id: 3,
    title: 'El gato con sombrero',
    tagline: 'Donde la imaginación se vuelve caos.',
    overview: 'Dos niños aburridos en casa descubren que un gato gigante que habla y usa un sombrero raya su día con un caos incontrolable, enseñándoles una lección inolvidable.',
    rating: 7.5,
    runtime: '95 min',
    release_date: '2026',
    genres: ['Animación', 'Familiar', 'Comedia'],
    poster_path: 'gato.jpg',
    trailer_id: 'bA7SxrJx42k',
    country: 'USA',
    director: 'Alessandro Carloni',
    writer: 'Dr. Seuss',
    companies: 'Warner Bros. Pictures Animation',
    showtimes: ['14:00', '16:30', '19:00'], // 🔑 Horarios
  },
  // 🔑 NUEVA PELÍCULA 4 (Zootrópolis 2)
  {
    id: 4,
    title: 'Zootrópolis 2',
    tagline: 'Una alianza puesta a prueba.',
    overview: 'Tras resolver el caso más grande en la historia de Zootrópolis, los policías novatos Judy Hopps (voz de Ginnifer Goodwin en la versión original) y Nick Wilde (voz de Jason Bateman en la versión original) descubren que su sociedad no es tan sólida como pensaban cuando el Jefe Bogo (voz de Idris Elba en la versión original) les ordena unirse al programa “Compañeros en Crisis”. Pero no pasa mucho tiempo antes de que su alianza se ponga a prueba cuando se ven envueltos en una misteriosa investigación relacionada con la llegada de una serpiente venenosa a la metrópolis animal.',
    rating: 8.0,
    runtime: '109 min',
    release_date: '2024',
    genres: ['Animación', 'Aventura', 'Comedia'],
    poster_path: 'zootropolis.jpg',
    trailer_id: 'io6VfjLpgaU', 
    country: 'USA',
    director: 'Byron Howard, Jared Bush',
    writer: 'Jared Bush',
    companies: 'Walt Disney Pictures',
    showtimes: ['14:30', '17:00', '19:30', '22:00'], // 🔑 Horarios
  },
  // 🔑 NUEVA PELÍCULA 5 (Bob Esponja: Una aventura pirata)
  {
    id: 5,
    title: 'Bob Esponja: Una aventura pirata',
    tagline: '¡Al abordaje en Fondo de Bikini!',
    overview: 'Sigue a Bob Esponja en su viaje a las profundidades del océano para enfrentarse al fantasma del Holandés Errante.',
    rating: 7.2,
    runtime: '90 min',
    release_date: '2025',
    genres: ['Animación', 'Familiar', 'Comedia'],
    poster_path: 'bob.jpg',
    trailer_id: 'kmzhU-zKBpA',
    country: 'USA',
    director: 'David Duhan',
    writer: 'Kyle McCulloch',
    companies: 'Paramount Animation',
    showtimes: ['15:00', '17:30', '20:00'], // 🔑 Horarios
  },
  // 🔑 NUEVA PELÍCULA 6 (Tron: Ares)
  {
    id: 6,
    title: 'Tron: Ares',
    tagline: 'El mundo digital ha llegado.',
    overview: 'Tercera entrega de la saga "TRON". Cuenta la historia de Ares, un programa muy sofisticado que se envía desde el mundo digital al mundo real en una misión peligrosa y que va a representar el primer encuentro de la humanidad con seres creados por la IA.',
    rating: 7.8,
    runtime: '130 min',
    release_date: '2025',
    genres: ['Ciencia Ficción', 'Acción', 'Aventura'],
    poster_path: 'tron.jpg',
    trailer_id: 'ywx1geivccs',
    country: 'USA',
    director: 'Joachim Rønning',
    writer: 'Jesse Wigutow',
    companies: 'Walt Disney Pictures',
    showtimes: ['18:30', '21:00', '23:30'], // 🔑 Horarios
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
    showtimes: ['12:00', '15:00', '18:00', '21:00'], // 🔑 Horarios
  },
];

// Función para buscar una película por su ID
export const getMovieById = (id: string) => {
  const numericId = parseInt(id);
  return DUMMY_MOVIE_DETAILS.find(movie => movie.id === numericId);
};

// Función para usar en Home.tsx (devuelve solo las 3 películas más populares)
export const getPopularMovies = () => {
    // Retorna solo la información básica (sin showtimes) para mantener la Home limpia.
    return DUMMY_MOVIE_DETAILS.filter(movie => [1, 2, 3].includes(movie.id)).map(movie => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        image: movie.poster_path,
    }));
};

// Devuelve TODAS las películas para la página /cartelera (incluye showtimes)
export const getAllMovies = () => {
    // Retorna showtimes para usar en la Cartelera Completa
    return DUMMY_MOVIE_DETAILS.map(movie => ({
        id: movie.id,
        title: movie.title,
        release_date: movie.release_date,
        image: movie.poster_path, 
        showtimes: movie.showtimes // 🔑 AÑADIDO
    }));
};