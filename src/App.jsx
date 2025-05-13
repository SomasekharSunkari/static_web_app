import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import { CartProvider } from './pages/CartContext';
import './App.css';

export default function App() {
  return (
    <CartProvider>
      <Router>
        <div className="min-h-screen w-full bg-gradient-to-r from-purple-100 to-blue-100">
          <nav className="bg-white shadow-lg p-4 flex justify-between items-center sticky top-0 z-50">
            <h1 className="text-2xl font-extrabold text-purple-700">🛒 MyShop</h1>
            <div className="space-x-6">
              <Link to="/" className="text-blue-600 font-medium hover:underline">Home</Link>
              <Link to="/products" className="text-blue-600 font-medium hover:underline">Products</Link>
              <Link to="/orders" className="text-blue-600 font-medium hover:underline">Orders</Link>
              <Link to="/checkout" className="text-blue-600 font-medium hover:underline">Checkout</Link>
            </div>
          </nav>
          <main className="w-full max-w-screen-xl mx-auto">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/products" element={<Products />} />
              <Route path="/orders" element={<Orders />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </main>
        </div>
      </Router>
    </CartProvider>
  );
}