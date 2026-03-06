/**
 * ARTE & DETALLES - Archivo Maestro de Componentes
 * Menú de navegación directa. SIN BURBUJA.
 */

const miTelefono = "56927439347";
const miMensajeDefault = "¡Hola! Vengo desde la página web y quiero más información.";

document.addEventListener("DOMContentLoaded", function() {
    
    // --- 1. INSERTAR EL NAVBAR CON MENÚ HAMBURGUESA ---
    const menuContainer = document.getElementById('navbar-universal');
    if (menuContainer) {
        menuContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="menu-toggle" id="btn-abrir-fechas" style="cursor:pointer; display:flex; flex-direction:column; gap:5px; z-index:3000;">
                    <span style="width:25px; height:3px; background:white; border-radius:2px;"></span>
                    <span style="width:25px; height:3px; background:white; border-radius:2px;"></span>
                    <span style="width:25px; height:3px; background:white; border-radius:2px;"></span>
                </div>

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
        </nav>

        <div id="side-menu-fechas" class="side-menu">
            <div class="side-menu-header">
                <h3 style="color:#5a189a; font-family:'Poppins';">Fechas Especiales</h3>
                <button id="btn-cerrar-fechas" style="background:none; border:none; font-size:30px; cursor:pointer; color:#5a189a;">&times;</button>
            </div>
            <div class="side-menu-content" style="display:flex; flex-direction:column; gap:10px; margin-top:20px;">
                
                <a href="especial-mujer.html" class="fecha-link-directo">
                    <span class="emoji">💜</span>
                    <div class="txt"><strong>Día de la Mujer</strong><small>8 de Marzo</small></div>
                </a>

                <a href="flores-amarillas.html" class="fecha-link-directo">
                    <span class="emoji">🌻</span>
                    <div class="txt"><strong>Flores Amarillas</strong><small>21 de Marzo</small></div>
                </a>

                <a href="catalogo.html" class="fecha-link-directo">
                    <span class="emoji">🌹</span>
                    <div class="txt"><strong>Día de la Madre</strong><small>Mayo 2026</small></div>
                </a>

            </div>
        </div>
        `;

        // Lógica para abrir/cerrar el menú
        const sideMenu = document.getElementById('side-menu-fechas');
        const btnAbrir = document.getElementById('btn-abrir-fechas');
        const btnCerrar = document.getElementById('btn-cerrar-fechas');

        btnAbrir.onclick = () => sideMenu.classList.add('active');
        btnCerrar.onclick = () => sideMenu.classList.remove('active');
    }

    // --- 2. INSERTAR EL WHATSAPP (TU LÓGICA ORIGINAL) ---
    const waContainer = document.getElementById('whatsapp-universal');
    if (waContainer) {
        const mensajePersonalizado = waContainer.getAttribute('data-msj') || miMensajeDefault;
        const linkFinal = `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensajePersonalizado)}`;
        
        waContainer.innerHTML = `
        <a href="${linkFinal}" class="wa-float" target="_blank" rel="noopener noreferrer" style="position:fixed; bottom:20px; right:20px; z-index:4000;">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="30" alt="WhatsApp">
        </a>`;
    }
});