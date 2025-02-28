import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Shop from "./Pages/Shop";
import Cart from "./Pages/Cart";
import Product from "./Pages/Product";
import ShopCategory from "./Pages/ShopCategory";
import LoginSignup from "./Pages/LoginSignup";
import Contact from "./Pages/Contact";

// Load your Stripe publishable key
const stripePromise = loadStripe("pk_test_51OvSq1HjQsfCN3ihPmxsbkss0yEvWXDK0JSx6w9okn38UmB5l0OdRUWopK2KhigoBqGWy7w94HXiybMj6ywC3GI300Cl3WNXk7");

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop gender="all" />} />
          <Route path="/mens" element={<ShopCategory category="men" />} />
          <Route path="/womens" element={<ShopCategory category="women" />} />
          <Route path="/kids" element={<ShopCategory category="kid" />} />
          <Route path="/product/:productId" element={<Product />} />
          {/* Integrate Stripe in your Cart component */}
          <Route
            path="/cart"
            element={
              <Elements stripe={stripePromise}>
                <Cart />
              </Elements>
            }
          />
          <Route path="/login" element={<LoginSignup />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
