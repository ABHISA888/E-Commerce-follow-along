import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from './pages/LoginPage';  // Import directly
import  SignupPage  from './pages/SignupPage';  
import "./App.css";
import Home from './pages/Home';
import CreateProduct from './pages/CreateProduct';
import MyProducts from './pages/myProducts';
// import MyProduct from './components/MyProducts/myproduct';



const App = () => {
  return (
    <BrowserRouter>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/createproduct" element={<CreateProduct />} />
        <Route path="/createproduct/:id" element={<CreateProduct />} />
        <Route path="/myproducts" element={<MyProducts />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
