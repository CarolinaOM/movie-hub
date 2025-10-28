// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer'; 
import Home from './pages/Home';
import Cartelera from './pages/Cartelera';
import MovieDetail from './pages/MovieDetail'; 

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gray-900">
        
        <Header />
        
        {/* El 'flex-grow' asegura que el contenido ocupe el espacio antes del Footer */}
        <main className="flex-grow"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cartelera" element={<Cartelera />} />
            <Route path="/movie/:id" element={<MovieDetail />} />
          </Routes>
        </main>
        
        <Footer />
        
      </div>
    </Router>
  );
}

export default App;