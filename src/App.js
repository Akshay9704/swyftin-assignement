import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PropertyContextProvider from "./context/PropertyContextProvider";
import Explore from "./pages/explore.js";
import Checkout from "./pages/checkout.js";

function App() {
  return (
    <Router>
      <PropertyContextProvider>
        <Routes>
          <Route path="/" element={<Explore />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </PropertyContextProvider>
    </Router>
  );
}

export default App;
