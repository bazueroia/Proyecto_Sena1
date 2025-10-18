# Guía de Instalación y Despliegue

## Proyecto de Inducción de Instructores SENA con Machine Learning

Realizado por: **Belisario Azuero Portacio**  
Instructor SENA Centro de Comercio, Medellín  
Año: 2025

---

## Contenido del Proyecto

El archivo ZIP contiene la siguiente estructura:

```
sena_ml_project/
├── index.html                          # Página principal
├── css/
│   └── styles.css                     # Estilos y diseño
├── js/
│   └── script.js                      # Funcionalidad interactiva
├── images/
│   ├── sena_logo.png                  # Logo SENA
│   ├── sena_building.jpg              # Imagen de edificio SENA
│   └── sena_general.jpg               # Imagen general
├── README.md                           # Documentación en inglés
├── INSTALACION.md                      # Esta guía
├── netlify.toml                        # Configuración para Netlify
├── .gitignore                          # Archivos a ignorar en Git
└── content_structure_and_colors.md    # Documentación de estructura
```

## Requisitos Previos

- Navegador web moderno (Chrome, Firefox, Safari, Edge)
- Conexión a Internet (opcional, solo para recursos externos)
- Cuenta en Netlify o GitHub (si deseas desplegar en línea)

## Opción 1: Despliegue en Netlify (Recomendado)

Netlify es la opción más fácil y rápida para desplegar tu sitio web.

### Pasos:

1. **Extrae el archivo ZIP**
   - Descarga el archivo ZIP
   - Extrae todos los archivos en una carpeta

2. **Ve a Netlify**
   - Abre [netlify.com](https://www.netlify.com) en tu navegador
   - Si no tienes cuenta, crea una (puedes usar GitHub, Google o correo)

3. **Sube tu proyecto**
   - Haz clic en "Add new site"
   - Selecciona "Deploy manually"
   - Arrastra la carpeta `sena_ml_project` a la zona de carga
   - O haz clic para seleccionar la carpeta

4. **Espera a que se complete**
   - Netlify procesará los archivos
   - Te asignará una URL automáticamente
   - Tu sitio estará en línea en segundos

5. **Personaliza tu dominio (opcional)**
   - En la configuración de Netlify, puedes cambiar el nombre del sitio
   - O conectar tu propio dominio

## Opción 2: Despliegue en GitHub Pages

GitHub Pages es gratuito y perfecto si ya usas GitHub.

### Pasos:

1. **Crea una cuenta en GitHub** (si no tienes)
   - Ve a [github.com](https://www.github.com)
   - Crea una cuenta gratuita

2. **Crea un nuevo repositorio**
   - Haz clic en el "+" en la esquina superior derecha
   - Selecciona "New repository"
   - Nombre: `username.github.io` (reemplaza "username" con tu usuario)
   - Marca "Public"
   - Haz clic en "Create repository"

3. **Sube los archivos**
   - Descarga e instala [Git](https://git-scm.com/)
   - Abre una terminal/CMD en la carpeta del proyecto
   - Ejecuta estos comandos:

   ```bash
   git init
   git add .
   git commit -m "Proyecto de Inducción SENA - Machine Learning"
   git branch -M main
   git remote add origin https://github.com/tu_usuario/tu_usuario.github.io.git
   git push -u origin main
   ```

4. **Accede a tu sitio**
   - Tu sitio estará disponible en: `https://tu_usuario.github.io`
   - Espera 1-2 minutos para que se publique

## Opción 3: Ejecutar Localmente en tu Computadora

Si solo quieres ver el sitio en tu computadora sin publicarlo en línea:

### En Windows:

1. **Extrae el ZIP**
   - Haz clic derecho en el archivo ZIP
   - Selecciona "Extraer todo"

2. **Abre el sitio**
   - Navega a la carpeta extraída
   - Haz doble clic en `index.html`
   - Se abrirá en tu navegador predeterminado

### En Mac:

1. **Extrae el ZIP**
   - Haz doble clic en el archivo ZIP
   - Se extraerá automáticamente

2. **Abre el sitio**
   - Navega a la carpeta extraída
   - Haz doble clic en `index.html`

### En Linux:

1. **Extrae el ZIP**
   ```bash
   unzip sena_ml_project.zip
   cd sena_ml_project
   ```

2. **Abre el sitio**
   - Opción A: Haz doble clic en `index.html`
   - Opción B: Usa un servidor local:
     ```bash
     python3 -m http.server 8000
     ```
     Luego abre `http://localhost:8000` en tu navegador

## Verificación del Sitio

Una vez desplegado, verifica que:

- ✓ Todas las pestañas se cargan correctamente
- ✓ Las imágenes se muestran sin problemas
- ✓ Los botones funcionan
- ✓ El diseño se ve bien en móvil (redimensiona tu navegador)
- ✓ Los colores coinciden con la paleta SENA (verde, azul, cian)

## Personalización

### Cambiar el Título

Edita `index.html` y busca:
```html
<title>Inducción de Instructores SENA - Machine Learning</title>
```

Cambia el texto entre las etiquetas `<title>`.

### Cambiar Colores

Edita `css/styles.css` y busca la sección `:root` al inicio:
```css
:root {
    --color-sena-green: #39A900;
    --color-accent-blue: #007bff;
    ...
}
```

Reemplaza los códigos hexadecimales con los colores que desees.

### Agregar Imágenes

1. Coloca tus imágenes en la carpeta `images/`
2. En `index.html`, actualiza las rutas:
   ```html
   <img src="images/tu_imagen.jpg" alt="Descripción">
   ```

### Modificar Contenido

Abre `index.html` con un editor de texto (Notepad, VSCode, etc.) y edita el contenido directamente.

## Solución de Problemas

### Las imágenes no se cargan

- Verifica que las imágenes estén en la carpeta `images/`
- Asegúrate de que los nombres de archivo sean exactos (mayúsculas/minúsculas importan)
- Recarga la página (Ctrl+F5 o Cmd+Shift+R)

### El sitio se ve mal en móvil

- El diseño es responsivo y debe verse bien
- Prueba en diferentes navegadores
- Limpia el caché del navegador

### Las pestañas no funcionan

- Abre la consola del navegador (F12)
- Verifica si hay errores en JavaScript
- Asegúrate de que `js/script.js` esté en la carpeta correcta

### Problemas al subir a Netlify

- Asegúrate de que todos los archivos estén en la carpeta raíz
- No incluyas carpetas adicionales innecesarias
- Verifica que el archivo `index.html` esté en la raíz

## Soporte y Ayuda

Si encuentras problemas:

1. Verifica que todos los archivos estén presentes
2. Comprueba que las rutas de archivos sean correctas
3. Prueba en un navegador diferente
4. Limpia el caché del navegador

## Próximos Pasos

Una vez desplegado, puedes:

- Compartir el enlace con colegas y estudiantes
- Integrar el sitio en tu plataforma de aprendizaje
- Agregar más contenido y secciones
- Conectar un dominio personalizado
- Implementar analytics para rastrear visitantes

## Información Importante

- **Autor:** Belisario Azuero Portacio
- **Institución:** SENA Centro de Comercio, Medellín
- **Año:** 2025
- **Tema:** Inducción de Instructores SENA con Machine Learning

---

¡Tu sitio web está listo para desplegar! Elige la opción que mejor se adapte a tus necesidades y sigue los pasos. Si tienes dudas, consulta la documentación de Netlify o GitHub Pages.

**¡Éxito con tu proyecto!**

