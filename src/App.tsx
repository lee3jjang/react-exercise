import "./App.css";
import { Routes, Route, useLocation } from "react-router-dom";
import { About, Contact, Home, Products } from "./pages";

import { AnimatePresence } from "framer-motion";
import { Sidebar } from "./components";

function App() {
  const location = useLocation();
  return (
    <div className="flex">
      <Sidebar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
