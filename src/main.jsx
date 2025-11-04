import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

// Asegurarse de que el DOM esté completamente cargado
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Manejar errores de carga
root.catch((error) => {
  console.error('Error al renderizar la aplicación:', error);
  const errorElement = document.createElement('div');
  errorElement.style.position = 'fixed';
  errorElement.style.top = '0';
  errorElement.style.left = '0';
  errorElement.style.width = '100%';
  errorElement.style.padding = '20px';
  errorElement.style.backgroundColor = '#ffebee';
  errorElement.style.color = '#c62828';
  errorElement.style.zIndex = '1000';
  errorElement.textContent = 'Error al cargar la aplicación. Por favor, recarga la página.';
  document.body.prepend(errorElement);
});
