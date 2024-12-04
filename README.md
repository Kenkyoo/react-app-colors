# React App: Change Background Color 🎨

Este es un proyecto simple hecho con React que cambia el color de fondo de la página a medida que escribes un color en el campo de entrada. También puedes generar un color aleatorio.

## 🚀 Características

- Cambia el color de fondo ingresando el nombre de un color, un código hexadecimal o un valor RGB.
- Genera un color aleatorio con un botón.
- Copia el color actual al portapapeles con un clic.

## 📦 Instalación

1. Clona este repositorio:
   ```bash
   git clone https://github.com/Kenkyoo/react-app-colors.git
   cd react-app-colors

    Instala las dependencias:

npm install

Inicia el servidor de desarrollo:

    npm run dev

    Abre la aplicación en tu navegador en http://localhost:3000.

🛠 Tecnologías utilizadas

    React: Para la construcción de la interfaz de usuario.
    Vite: Como herramienta de desarrollo y empaquetado.
    TailwindCSS y DaisyUI: Para estilos rápidos y componentes listos para usar.
    randomcolor: Para generar colores aleatorios.
    validate-color: Para validar los valores de colores ingresados.

📜 Scripts disponibles

    npm run dev: Inicia el servidor de desarrollo.
    npm run build: Genera una versión optimizada para producción.
    npm run preview: Previsualiza la app de producción.
    npm run lint: Ejecuta ESLint para verificar el código.
    npm run build:sass: Compila los estilos SCSS a CSS.
    npm run watch:sass: Observa cambios en SCSS y recompila automáticamente.

🎯 Uso

    Escribe un color en el campo de entrada (por ejemplo: red, #ff0000 o rgb(255,0,0)).
    Presiona el botón para generar un color aleatorio si prefieres no ingresar uno.
    Copia el valor del color actual al portapapeles usando el botón correspondiente.

📂 Estructura del proyecto

src/
├── components/
│   ├── validateColor.js  // Valida si el color ingresado es válido
│   ├── randomColor.js    // Genera un color aleatorio
│   ├── clipboard.js      // Permite copiar el color al portapapeles
├── input.scss            // Estilos personalizados
├── styles.css            // Estilos compilados
├── main.jsx              // Punto de entrada principal
└── App.jsx               // Componente raíz

📄 Licencia

Este proyecto está bajo la licencia MIT. ¡Siéntete libre de usarlo, modificarlo y compartirlo!
