/**
 * ARTE & DETALLES - Navegación Universal
 * Barra tornasol + Menú lateral directo (sin burbujas).
 */

const miTelefono = "56927439347";

document.addEventListener("DOMContentLoaded", function() {
    
    // --- INSERTAR NAVBAR Y MENÚ LATERAL ---
    const menuContainer = document.getElementById('navbar-universal');
    if (menuContainer) {
        menuContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="menu-toggle" id="btn-abrir-fechas" style="cursor:pointer; display:flex; flex-direction:column; gap:5px; z-index:3000; position:absolute; left:20px;">
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
                <h3>Fechas Especiales</h3>
                <button id="btn-cerrar-fechas">&times;</button>
            </div>
            <div class="side-menu-content">
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

        // Funcionalidad de apertura y cierre
        const sideMenu = document.getElementById('side-menu-fechas');
        const btnAbrir = document.getElementById('btn-abrir-fechas');
        const btnCerrar = document.getElementById('btn-cerrar-fechas');

        btnAbrir.onclick = () => sideMenu.classList.add('active');
        btnCerrar.onclick = () => sideMenu.classList.remove('active');
    }

    // --- INSERTAR BOTÓN DE WHATSAPP ---
    const waContainer = document.getElementById('whatsapp-universal');
    if (waContainer) {
        const msj = waContainer.getAttribute('data-msj') || "¡Hola! Quiero información.";
        const link = `https://wa.me/${miTelefono}?text=${encodeURIComponent(msj)}`;
        
        waContainer.innerHTML = `
        <a href="${link}" target="_blank" style="position:fixed; bottom:20px; right:20px; background:#25d366; width:55px; height:55px; border-radius:50%; display:flex; align-items:center; justify-content:center; z-index:4000; box-shadow:0 4px 10px rgba(0,0,0,0.3);">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="30" alt="WhatsApp">
        </a>`;
    }
});