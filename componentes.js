/**
 * ARTE & DETALLES - Archivo Maestro de Componentes
 * Este código carga el menú y el WhatsApp en todas las páginas.
 */

const miTelefono = "56927439347";
const miMensajeDefault = "¡Hola! Vengo desde la página web y quiero más información.";

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. INSERTAR EL NAVBAR ---
    const menuContainer = document.getElementById('navbar-universal');
    if (menuContainer) {
        menuContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="nav-side nav-left">
                    <a href="index.html">Inicio</a>
                    <a href="catalogo.html">Catálogo</a>
                </div>
                <div class="nav-logo">
                    <a href="index.html">
                        <img src="img/regalo.jpeg" alt="Logo">
                    </a>
                </div>
                <div class="nav-side nav-right">
                    <a href="contacto.html">Contacto</a>
                    <a href="nosotros.html">Nosotros</a>
                </div>
            </div>
        </nav>`;
    }

    // --- 2. INSERTAR EL WHATSAPP INTELIGENTE ---
    const waContainer = document.getElementById('whatsapp-universal');
    if (waContainer) {
        // Obtenemos el mensaje personalizado que pusiste en el HTML
        const mensajePersonalizado = waContainer.getAttribute('data-msj') || miMensajeDefault;
        
        // Creamos el enlace seguro para WhatsApp
        const linkFinal = `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensajePersonalizado)}`;
        
        waContainer.innerHTML = `
        <a href="${linkFinal}" class="wa-float" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="30" alt="WhatsApp">
        </a>`;
    }
});