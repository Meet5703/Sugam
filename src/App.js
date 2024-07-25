import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import './style.css';
import Products from './Pages/Products/Products';
import SingleProduct from './Pages/Products/singleProduct';
import AdminDashboard from './Pages/adminDashboard/Admin';
import AboutUs from './Pages/About';
import Contact from './Pages/Contact';
function App() {
  return (
    <ChakraProvider theme={theme}>
      <Router>
        <Navbar />
        <div style={{ marginTop: '90px' }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/products/:id" element={<SingleProduct />} />
            <Route path="/admin" element={<AdminDashboard />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </ChakraProvider>
  );
}

export default App;
