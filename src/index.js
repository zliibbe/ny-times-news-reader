import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './components/App/App';
import { BrowserRouter } from "react-router-dom";
import { DataContextProvider } from '../src/contexts/DataContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <DataContextProvider>
        <App />
      </DataContextProvider>
    </React.StrictMode>
  </BrowserRouter>
);
