// src/components/Header.tsx
const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-800 shadow-xl z-10">
      <nav className="container mx-auto p-4 flex justify-between items-center">
        
        {/* Logo/Título - Usa Tailwind Typography si lo instalaste */}
        <h1 className="text-2xl font-bold text-red-500 tracking-wider">
          MovieHub
        </h1>
        
        {/* Navegación - Usa `Link` de react-router-dom */}
        <div className="space-x-4">
          <a href="/" className="text-gray-300 hover:text-red-500 transition duration-300">
            Inicio
          </a>
          <a href="/favorites" className="text-gray-300 hover:text-red-500 transition duration-300">
            Favoritos
          </a>
        </div>
        
        {/* Botón de Modo Oscuro (placeholder) */}
        <button className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition">
          {/* Icono de sol/luna, puedes usar una librería como react-icons */}
          ☀️
        </button>
      </nav>
    </header>
  );
};
export default Header;