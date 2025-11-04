import React, { useState } from 'react';
import SantaARScene from './components/SantaARScene';
import './App.css';

function App() {
  const [showAR, setShowAR] = useState(false);

  // Manejar el clic para iniciar la experiencia AR
  const handleStartAR = () => {
    setShowAR(true);
  };

  return (
    <div className="app">
      {!showAR ? (
        <>
          <header className="app-header">
            <h1>🎅 Santa AR</h1>
            <p>Una experiencia de Realidad Aumentada por AplicacionesWeb.cl</p>
          </header>

          <main className="app-main">
            <div className="ar-prompt">
              <p>¡Bienvenido a Santa AR!</p>
              <p>Presiona el botón para activar la cámara y ver a Santa en Realidad Aumentada.</p>
              <button onClick={handleStartAR} className="ar-button">
                Activar Realidad Aumentada
              </button>
              <p className="hint">
                💡 Descarga e imprime el marcador Hiro para ver a Santa.
              </p>
              <p className="hint">
                <a href="https://ar-js-org.github.io/AR.js-Docs/data/images/hiro.png" target="_blank" rel="noopener noreferrer">
                  📥 Descargar marcador Hiro
                </a>
              </p>
            </div>
          </main>

          <footer className="app-footer">
            <p>© {new Date().getFullYear()} AplicacionesWeb.cl - Todos los derechos reservados</p>
          </footer>
        </>
      ) : (
        <SantaARScene />
      )}
    </div>
  );
}

export default App;
