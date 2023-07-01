import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { render } from 'react-dom';
import  PhoneBook  from "../src/components/PhoneBook";
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PhoneBook/>
  </React.StrictMode>
);
reportWebVitals();
