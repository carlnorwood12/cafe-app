import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navigation';
import Footer from './components/footer';
import Home from './pages/home';
import Products from './pages/products';
import Team from './pages/team';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/team" element={<Team />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}
