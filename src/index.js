import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Contents from './pages/Contents';
import NotFound from './pages/NotFound';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="contents/:phase" element={<Contents />} />
        <Route path="/*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>,
);


reportWebVitals();
