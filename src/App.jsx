import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./contexts/CartContext.jsx"; // ✅
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import SpecialsPage from "./pages/SpecialsPage.jsx";
import RecipesPage from "./pages/RecipesPage.jsx";
import Contact from "./components/Contact.jsx";
import CartPage from "./pages/CartPage.jsx";
import Footer from "./components/Footer.jsx";
import Login from "./pages/Login.jsx";

export default function App() {
  return (
    <CartProvider>   {/* ✅ provides cart everywhere */}
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/specials" element={<SpecialsPage />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
}
