import React, { useEffect, useRef } from 'react';
import 'aframe';

const SantaARScene = () => {
  const sceneRef = useRef(null);
  const arSystemInitialized = useRef(false);

  useEffect(() => {
    // Verificar si ya se inicializó el sistema AR
    if (arSystemInitialized.current) return;
    
    const scene = sceneRef.current;
    if (!scene) return;

    // Función para manejar la carga exitosa de la escena
    const onSceneLoaded = () => {
      console.log('Escena AR cargada correctamente');
      // Ocultar el loader cuando la escena esté lista
      const loader = document.querySelector('.arjs-loader');
      if (loader) {
        loader.style.display = 'none';
      }
      
      // Configuración adicional de la escena AR
      if (scene.hasLoaded) {
        scene.setAttribute('vr-mode-ui', 'enabled: false');
        scene.setAttribute('renderer', 'colorManagement: true; antialias: true;');
      }
    };

    // Función para manejar errores
    const onError = (error) => {
      console.error('Error en la escena AR:', error);
      // Mostrar mensaje de error al usuario
      const errorDiv = document.createElement('div');
      errorDiv.style.position = 'fixed';
      errorDiv.style.top = '0';
      errorDiv.style.left = '0';
      errorDiv.style.width = '100%';
      errorDiv.style.padding = '15px';
      errorDiv.style.backgroundColor = '#ffebee';
      errorDiv.style.color = '#c62828';
      errorDiv.style.zIndex = '10000';
      errorDiv.textContent = 'Error al cargar la experiencia AR. Por favor, recarga la página.';
      document.body.prepend(errorDiv);
    };

    // Agregar event listeners
    scene.addEventListener('loaded', onSceneLoaded);
    scene.addEventListener('error', onError);

    // Marcar como inicializado
    arSystemInitialized.current = true;

    // Limpieza al desmontar el componente
    return () => {
      scene.removeEventListener('loaded', onSceneLoaded);
      scene.removeEventListener('error', onError);
      
      // Limpiar la escena
      if (scene.hasLoaded) {
        const camera = scene.camera;
        const renderer = scene.renderer;
        
        if (renderer) {
          renderer.dispose();
        }
        
        if (camera) {
          camera.dispose();
        }
        
        // Limpiar todos los objetos de la escena
        while (scene.children.length > 0) {
          scene.remove(scene.children[0]);
        }
      }
    };
  }, []);

  return (
    <div className="ar-scene-container">
      <a-scene 
        ref={sceneRef}
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
