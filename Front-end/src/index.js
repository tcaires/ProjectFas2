import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import Home from './rotas/Home';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './componetes/Header/header';
import Login from './rotas/Login';
import Favoritos from './rotas/Favoritos';
import Notebooks from './rotas/Notebooks';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/favoritos" element={<Favoritos />} />
        <Route path="/notebooks" element={<Notebooks />} />
        <Route path="/login" element={<Login />}/>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
