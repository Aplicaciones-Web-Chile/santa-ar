import React, { useEffect, useState } from 'react';
import SantaARScene from './components/SantaARScene';
import './App.css';

function App() {
  const [isARSupported, setIsARSupported] = useState(false);
  const [error, setError] = useState(null);

  // Verificar compatibilidad con WebXR y AR
  useEffect(() => {
    const checkARSupport = async () => {
      try {
        // Verificar si el navegador soporta WebXR
        if (navigator.xr) {
          const isSupported = await navigator.xr.isSessionSupported('immersive-ar');
          setIsARSupported(isSupported);
          
          if (!isSupported) {
            setError('Tu navegador no soporta Realidad Aumentada. Prueba con Chrome en Android o Safari en iOS.');
          }
        } else {
          setError('Tu navegador no soporta WebXR. Prueba con un navegador más reciente.');
          setIsARSupported(false);
        }
      } catch (err) {
        console.error('Error al verificar soporte AR:', err);
        setError('Error al verificar la compatibilidad con Realidad Aumentada.');
        setIsARSupported(false);
      }
    };

    checkARSupport();
  }, []);

  // Manejar el clic para iniciar la experiencia AR
  const handleStartAR = () => {
    // Esto activará el modo AR en el componente SantaARScene
    setIsARSupported(true);
  };

  return (
    <div className="app">
      <header className="app-header">
        <h1>🎅 Santa AR</h1>
        <p>Una experiencia de Realidad Aumentada por AplicacionesWeb.cl</p>
      </header>

      <main className="app-main">
        {error ? (
          <div className="error-message">
            <p>{error}</p>
            <p>Puedes probar con un dispositivo móvil y un navegador compatible.</p>
          </div>
        ) : isARSupported ? (
          <SantaARScene />
        ) : (
          <div className="ar-prompt">
            <p>¡Bienvenido a Santa AR!</p>
            <p>Presiona el botón para activar la cámara y ver a Santa en Realidad Aumentada.</p>
            <button onClick={handleStartAR} className="ar-button">
              Activar Realidad Aumentada
            </button>
            <p className="hint">
              💡 Usa un marcador o apunta a una superficie plana para colocar a Santa.
            </p>
          </div>
        )}
      </main>

      <footer className="app-footer">
        <p>© {new Date().getFullYear()} AplicacionesWeb.cl - Todos los derechos reservados</p>
      </footer>
    </div>
  );
}

export default App;
