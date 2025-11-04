import React, { useEffect } from 'react';
import 'aframe';

const SantaARScene = () => {
  useEffect(() => {
    // Ocultar el loader cuando la escena esté lista
    const timer = setTimeout(() => {
      const loader = document.querySelector('.arjs-loader');
      if (loader) {
        loader.style.display = 'none';
      }
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="ar-scene-container">
      <a-scene 
        embedded 
        arjs="trackingMethod: best; sourceType: webcam; debugUIEnabled: false;"
        renderer="antialias: true; alpha: true;"
        vr-mode-ui="enabled: false"
        device-orientation-permission-ui="enabled: false"
      >
        {/* Fuente de la cámara AR */}
        <a-entity camera></a-entity>
        
        {/* Marcador AR */}
        <a-marker-camera preset="hiro">
          {/* Modelo de Santa (imagen 2D) */}
          <a-image 
            src="/santa.png" 
            position="0 0 0" 
            scale="1 1 1"
            rotation="-90 0 0"
            transparent="true"
            alpha-test="0.5"
          >
          </a-image>
          
          {/* Texto flotante */}
          <a-text 
            value="¡Feliz Navidad!" 
            position="0 1.5 0" 
            color="#e53935"
            align="center"
            width="5"
          ></a-text>
        </a-marker-camera>
        
        {/* Luz ambiental */}
        <a-light type="ambient" color="#fff" intensity="0.7"></a-light>
        <a-light 
          type="directional" 
          color="#fff" 
          intensity="0.8" 
          position="1 1 1"
        ></a-light>
        
        {/* Fondo transparente */}
        <a-sky color="#00000000"></a-sky>
      </a-scene>
      
      <style jsx global>{`n        /* Estilos para la escena AR */
        .a-enter-vr {
          display: none !important;
        }
        
        .a-enter-vr-button {
          display: none !important;
        }
        
        .a-enter-vr.embedded {
          display: none !important;
        }
        
        .a-canvas {
          position: fixed !important;
          top: 0;
          left: 0;
          z-index: 1;
        }
        
        .ar-scene-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
        }
      `}</style>
    </div>
  );
};

export default SantaARScene;
