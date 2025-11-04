# 🎅 Santa AR - Realidad Aumentada

<p align="center">
  <img src="https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=white&style=for-the-badge" alt="React">
  <img src="https://img.shields.io/badge/Vite-646CFF?logo=vite&logoColor=white&style=for-the-badge" alt="Vite">
  <img src="https://img.shields.io/badge/A--Frame-EF2D5E?logo=a-frame&logoColor=white&style=for-the-badge" alt="A-Frame">
  <img src="https://img.shields.io/badge/AR.js-FF0000?logo=javascript&logoColor=white&style=for-the-badge" alt="AR.js">
</p>

## 📱 Descripción

Santa AR es un MVP (Minimum Viable Product) que permite visualizar una imagen de Santa Claus en Realidad Aumentada a través de la cámara de tu dispositivo móvil. Este proyecto es una base para futuras funcionalidades como geolocalización, notificaciones push y animaciones interactivas.

## 🚀 Características

- **Experiencia AR** inmersiva en el navegador
- **Fácil de usar** - Solo necesitas un dispositivo móvil con cámara
- **Ligero** - Menos de 5MB de peso total
- **Responsive** - Se adapta a diferentes tamaños de pantalla
- **Marcador basado en AR** - Utiliza el marcador Hiro para la detección

## 🛠️ Tecnologías

- **React** - Biblioteca de JavaScript para construir interfaces de usuario
- **Vite** - Herramienta de construcción y desarrollo
- **A-Frame** - Marco web para experiencias de realidad virtual
- **AR.js** - Biblioteca ligera para realidad aumentada en la web
- **Three.js** - Motor 3D que potencia A-Frame

## 📦 Instalación

1. **Clonar el repositorio**
   ```bash
   git clone https://github.com/tuusuario/santa-ar-react.git
   cd santa-ar-react
   ```

2. **Instalar dependencias**
   ```bash
   npm install
   ```

3. **Iniciar el servidor de desarrollo**
   ```bash
   npm run dev
   ```

4. **Abrir en el navegador**
   - Abre tu navegador móvil y ve a: `http://<tu-ip-local>:5173`
   - O escanea el código QR que aparece en la terminal (si tu editor lo soporta)

## 🎨 Personalización

### Cambiar la imagen de Santa

1. Reemplaza el archivo `public/santa.png` con tu propia imagen (preferiblemente con fondo transparente)
2. Asegúrate de que el archivo tenga un tamaño razonable (máx. 1MB recomendado)

### Ajustar la posición y escala

Puedes modificar la posición y escala de la imagen en `src/components/SantaARScene.jsx`:

```jsx
<a-image 
  src="/santa.png" 
  position="0 0 0"  // x, y, z
  scale="1 1 1"     // ancho, alto, profundidad
  rotation="-90 0 0"
  transparent="true"
  alpha-test="0.5"
></a-image>
```

## 📱 Uso

1. Abre la aplicación en un dispositivo móvil (Chrome para Android o Safari para iOS)
2. Permite el acceso a la cámara cuando se te solicite
3. Apunta la cámara a un marcador (como el marcador Hiro)
4. ¡Disfruta de Santa en Realidad Aumentada!

## 🚀 Despliegue

### Construir para producción

```bash
npm run build
```

Esto creará una carpeta `dist` con los archivos optimizados para producción.

### Desplegar en Vercel (recomendado)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Ftuusuario%2Fsanta-ar-react)

### Desplegar en GitHub Pages

1. Instala `gh-pages`:
   ```bash
   npm install --save-dev gh-pages
   ```

2. Añade estos scripts a tu `package.json`:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. Ejecuta el despliegue:
   ```bash
   npm run deploy
   ```

## 📝 Notas de compatibilidad

- **Navegadores soportados**: Chrome para Android, Safari para iOS
- **Se requiere HTTPS** para acceder a la cámara en producción
- Para desarrollo local, usa `http://localhost:5173` o `https://localhost:5173`

## 🔄 Plan de desarrollo

| Fase | Funcionalidad | Estado |
|------|---------------|--------|
| 1 | Mostrar imagen en RA (MVP actual) | ✅ Completado |
| 2 | Integrar geolocalización simulada ("Ruta de Santa") | ⏳ Pendiente |
| 3 | Push notifications / PWA | ⏳ Pendiente |
| 4 | Modelo 3D animado de Santa | ⏳ Pendiente |
| 5 | Gamificación y capturas para redes sociales | ⏳ Pendiente |

## 🤝 Contribuir

Las contribuciones son bienvenidas. Por favor, lee las [pautas de contribución](CONTRIBUTING.md) antes de enviar un pull request.

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo [LICENSE](LICENSE) para más información.

## 👏 Créditos

- Desarrollado por [Tu Nombre](https://github.com/tuusuario)
- Basado en [A-Frame](https://aframe.io/) y [AR.js](https://ar-js-org.github.io/AR.js-Docs/)
- Imagen de Santa por [Freepik](https://www.freepik.com) (reemplazar con los créditos reales)

---

<div align="center">
  Hecho con ❤️ por <a href="https://aplicacionesweb.cl">AplicacionesWeb.cl</a>
</div>
