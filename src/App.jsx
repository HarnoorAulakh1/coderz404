import { Navbar, Footer } from "./components";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import {
  Home,
  Cart,
  Products,
  SingleProduct,
  Error,
  Checkout,
  ProtectedRoute,
  Completion,
  Services,
} from "./pages";
import ReactGA from "react-ga4";
import Auth from "./auth/page";
import Profile from "./context/profile";
import { Notifications } from "reactjs-notify-toast";
import ProductDetails from "./components1/ProductDetais.jsx";
import CartProvider from "./context/cartContext.jsx";
import Dashboard from "./components1/dashboard.jsx";
import { useEffect } from "react";
import Contact from "./pages/Contact.jsx";

const measurementID = "G-Y1EV1Q38PH";
ReactGA.initialize(measurementID);
function App() {
  useEffect(() => {
    document.title = 'HerCraft-Hub';
  }, []);
  return (
    <BrowserRouter>
      <Notifications>
        <CartProvider>
          <Profile>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="cart" element={<Cart />} />
              <Route path="shop" element={<Products />} />
              <Route path="shop/:id" element={<SingleProduct />} />
              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Checkout />{" "}
                  </ProtectedRoute>
                }
              />
              <Route
                path="/completion"
                element={
                  <ProtectedRoute>
                    {" "}
                    <Completion />{" "}
                  </ProtectedRoute>
                }
              />

              <Route path="/contact" element={<Contact />} />
              <Route path="/services" element={<Services />} />
              <Route path="*" element={<Error />} />
            </Routes>
            <Footer />
          </Profile>
        </CartProvider>
      </Notifications>
    </BrowserRouter>
  );
}

export default App;
