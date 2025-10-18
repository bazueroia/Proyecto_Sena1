// ========================================
// FUNCIONALIDAD DE PESTAÑAS
// ========================================

document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los enlaces de pestaña
    const tabLinks = document.querySelectorAll('.tab-link');
    const tabContents = document.querySelectorAll('.tab-content');

    // Agregar evento click a cada enlace de pestaña
    tabLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Obtener el ID de la pestaña a mostrar
            const tabId = this.getAttribute('data-tab');
            
            // Remover clase 'active' de todas las pestañas y enlaces
            tabContents.forEach(content => {
                content.classList.remove('active');
            });
            
            tabLinks.forEach(l => {
                l.classList.remove('active');
            });
            
            // Agregar clase 'active' a la pestaña seleccionada y su enlace
            const selectedTab = document.getElementById(tabId);
            if (selectedTab) {
                selectedTab.classList.add('active');
            }
            this.classList.add('active');
            
            // Desplazar hacia la parte superior del contenido
            window.scrollTo({
                top: document.querySelector('.navbar').offsetTop,
                behavior: 'smooth'
            });
        });
    });

    // Manejar navegación por URL hash
    const hash = window.location.hash.substring(1);
    if (hash) {
        const tabLink = document.querySelector(`[data-tab="${hash}"]`);
        if (tabLink) {
            tabLink.click();
        }
    }
});

// ========================================
// FUNCIÓN PARA DESPLAZAR A UNA PESTAÑA
// ========================================

function scrollToTab(tabName) {
    const tabLink = document.querySelector(`[data-tab="${tabName}"]`);
    if (tabLink) {
        tabLink.click();
    }
}

// ========================================
// EFECTOS DE DESPLAZAMIENTO SUAVE
// ========================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && !href.startsWith('#inicio')) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        }
    });
});

// ========================================
// ANIMACIÓN DE ELEMENTOS AL DESPLAZARSE
// ========================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observar elementos de tarjetas y componentes
document.querySelectorAll('.concept-card, .component, .phase, .result-item, .future-item').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(el);
});

// ========================================
// FUNCIONALIDAD ADICIONAL
// ========================================

// Agregar clase 'active' a la primera pestaña al cargar
window.addEventListener('load', function() {
    const firstTab = document.querySelector('.tab-link');
    if (firstTab && !firstTab.classList.contains('active')) {
        firstTab.click();
    }
});

// Manejar cambios de tamaño de ventana
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        // Aquí se pueden agregar ajustes responsivos si es necesario
    }, 250);
});

// ========================================
// CONSOLE LOG PARA VERIFICACIÓN
// ========================================

console.log('Script de pestañas cargado correctamente');
console.log('Número de pestañas: ' + document.querySelectorAll('.tab-link').length);

