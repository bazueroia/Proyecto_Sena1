# Proyecto de Inducción de Instructores SENA con Machine Learning

## Descripción General

Este proyecto presenta una solución innovadora basada en **Machine Learning** para optimizar el proceso de inducción y entrenamiento inicial de nuevos instructores en el Servicio Nacional de Aprendizaje (SENA).

**Pregunta Problema:** ¿Cómo diseñar e implementar un proceso de inducción y entrenamiento inicial para los nuevos instructores que ingresan al SENA, con el fin de garantizar su adecuada integración y desempeño desde el inicio de su vinculación a la entidad?

## Autor

**Belisario Azuero Portacio**  
Instructor SENA  
Centro de Comercio, Medellín  
Año: 2025

## Características del Proyecto

- **Diseño Responsivo:** Compatible con dispositivos móviles, tablets y computadoras de escritorio.
- **Interfaz Intuitiva:** Navegación por pestañas clara y fácil de usar.
- **Paleta de Colores Institucional:** Utiliza los colores del SENA (verde) combinados con tonos modernos de tecnología (azul y cian).
- **Contenido Completo:** Incluye secciones sobre el problema, fundamentos de ML, modelo propuesto, implementación y conclusiones.
- **Imágenes Relevantes:** Imágenes de alta calidad relacionadas con SENA e inducción de instructores.

## Estructura del Proyecto

```
sena_ml_project/
├── index.html                 # Archivo HTML principal
├── css/
│   └── styles.css            # Estilos CSS y paleta de colores
├── js/
│   └── script.js             # Funcionalidad JavaScript
├── images/
│   ├── sena_logo.png         # Logo del SENA
│   ├── sena_building.jpg     # Imagen de instalaciones SENA
│   └── sena_general.jpg      # Imagen general SENA
├── README.md                 # Este archivo
└── content_structure_and_colors.md  # Documentación de estructura y colores
```

## Pestañas Disponibles

1. **Inicio:** Bienvenida y resumen del proyecto.
2. **El Problema:** Descripción del desafío de la inducción en el SENA.
3. **Fundamentos ML:** Conceptos básicos de Machine Learning.
4. **Modelo Propuesto:** Descripción del modelo ML propuesto.
5. **Implementación:** Fases de implementación y resultados esperados.
6. **Conclusiones:** Hallazgos principales y futuras líneas de investigación.
7. **Acerca de:** Información sobre el autor y el proyecto.

## Paleta de Colores

| Color | Código Hex | Uso |
|-------|-----------|-----|
| Verde SENA | `#39A900` | Color primario, encabezados |
| Gris Oscuro | `#333333` | Texto principal |
| Blanco | `#FFFFFF` | Fondo principal |
| Gris Claro | `#F0F0F0` | Fondos secundarios |
| Azul Eléctrico | `#007bff` | Acentos, botones |
| Cian | `#00bcd4` | Acentos, detalles |

## Instalación y Despliegue

### Opción 1: Despliegue en Netlify

1. **Descarga el proyecto:** Extrae el archivo ZIP descargado.
2. **Conecta con Netlify:**
   - Ve a [netlify.com](https://www.netlify.com)
   - Inicia sesión o crea una cuenta
   - Haz clic en "New site from Git" o arrastra la carpeta del proyecto
3. **Configura el despliegue:**
   - Selecciona la rama principal
   - Deja los valores por defecto
   - Haz clic en "Deploy site"

### Opción 2: Despliegue en GitHub Pages

1. **Crea un repositorio en GitHub:**
   - Ve a [github.com](https://www.github.com)
   - Crea un nuevo repositorio llamado `username.github.io`

2. **Sube los archivos:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: SENA ML Induction Project"
   git branch -M main
   git remote add origin https://github.com/username/username.github.io.git
   git push -u origin main
   ```

3. **Accede a tu sitio:**
   - Tu sitio estará disponible en `https://username.github.io`

### Opción 3: Despliegue Local

1. **Abre el archivo `index.html` en tu navegador:**
   - Haz doble clic en `index.html`
   - O usa un servidor local:
     ```bash
     python -m http.server 8000
     ```
   - Luego accede a `http://localhost:8000`

## Requisitos

- **Navegador moderno:** Chrome, Firefox, Safari, Edge (versiones recientes)
- **Conexión a Internet:** Para cargar imágenes y recursos externos (opcional)
- **Servidor web:** Para despliegue en producción (Netlify, GitHub Pages, etc.)

## Funcionalidades

- **Navegación por Pestañas:** Haz clic en cualquier pestaña para navegar entre secciones.
- **Desplazamiento Suave:** Los enlaces internos desplazan suavemente hacia el contenido.
- **Animaciones:** Elementos se animan al desplazarse en la página.
- **Responsive:** El diseño se adapta automáticamente a diferentes tamaños de pantalla.

## Personalización

### Cambiar Colores

Edita el archivo `css/styles.css` y modifica las variables de color en la sección `:root`:

```css
:root {
    --color-sena-green: #39A900;
    --color-dark-gray: #333333;
    --color-light-gray: #F0F0F0;
    --color-white: #FFFFFF;
    --color-accent-blue: #007bff;
    --color-accent-cyan: #00bcd4;
}
```

### Agregar Nuevas Imágenes

1. Coloca las imágenes en la carpeta `images/`
2. Actualiza las rutas en `index.html`:
   ```html
   <img src="images/nombre_imagen.jpg" alt="Descripción">
   ```

### Modificar Contenido

Edita directamente el archivo `index.html` para cambiar textos, títulos y descripciones.

## Navegadores Soportados

- Chrome (versión 90+)
- Firefox (versión 88+)
- Safari (versión 14+)
- Edge (versión 90+)

## Licencia

Este proyecto fue desarrollado como parte de un trabajo académico/profesional en el SENA. Todos los derechos reservados.

## Contacto

Para más información sobre este proyecto, contacta a:

**Belisario Azuero Portacio**  
Instructor SENA  
Centro de Comercio  
Medellín, Colombia

## Notas Importantes

- Asegúrate de que todas las imágenes estén en la carpeta `images/` antes de desplegar.
- Verifica que los enlaces internos funcionen correctamente después de desplegar.
- Prueba el sitio en diferentes navegadores y dispositivos antes de publicarlo.
- Mantén una copia de seguridad de todos los archivos.

## Historial de Cambios

### Versión 1.0 (2025)
- Lanzamiento inicial del proyecto
- Implementación de estructura de pestañas
- Integración de paleta de colores SENA
- Desarrollo de contenido completo
- Optimización responsiva

---

**Proyecto realizado en 2025 por Belisario Azuero Portacio, Instructor SENA Centro de Comercio, Medellín**

