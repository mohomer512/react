import React from 'react';
import ReactDOM from 'react-dom/client';
import { Footer, Navbar } from './components/layout';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import ProductList from './pages/admin/products/productList';
import CreateProduct from './pages/admin/products/CreateProduct';
import EditProduct from './pages/admin/products/EditProduct';
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginRegister from './components/LoginRegister/LoginRegister';

function App(){
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path='/' element = {<Home />} />
      <Route path='/Contact' element = {<Contact />} />
      <Route path='/admin/products' element = {<ProductList/>} />
      <Route path='/admin/products/create' element = {<CreateProduct/>} />
      <Route path='/admin/products/edit/:id' element = {<EditProduct/>} />
      <Route path='/Contact' element = {<Contact />} />
      <Route path='/components/LoginRegister' element = {<LoginRegister/>} />


    </Routes>
    <Footer />
    </BrowserRouter>
    
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

