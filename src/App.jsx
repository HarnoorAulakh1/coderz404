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
  Features,
  Services,
  News,
} from "./pages";
import ReactGA from "react-ga4";
import Auth from "./auth/page";
import Profile from "./context/profile";
import { Notifications } from "reactjs-notify-toast";
import ProductDetails from "./components1/ProductDetais.jsx";

const measurementID = "G-Y1EV1Q38PH";
ReactGA.initialize(measurementID);
function App() {
  return (
    <BrowserRouter>
      <Notifications>
        <Profile>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetails />} />
            <Route path="/login" element={<Auth />} />
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

            <Route path="/features" element={<Features />} />
            <Route path="/services" element={<Services />} />
            <Route path="/news" element={<News />} />
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </Profile>
      </Notifications>
    </BrowserRouter>
  );
}

export default App;
