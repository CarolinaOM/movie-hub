import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import MovieDetail from './pages/MovieDetail'; // Esto resuelve el error anterior.

const App = () => {
  return (
    <Router>
      <div className="min-h-screen bg-gray-900 text-white">
        <Header />
        <main className="container mx-auto p-4 pt-24">
          
          {/* 🌟 'Routes' ahora es reconocido */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
            {/* ... otras rutas */}
          </Routes>

        </main>
      </div>
    </Router>
  );
};
export default App;