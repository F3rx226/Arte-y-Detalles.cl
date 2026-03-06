/**
 * ARTE & DETALLES - Archivo Maestro de Componentes
 * Este código carga el menú, el repositorio de fechas y el WhatsApp.
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
                <h3>Próximas Fechas</h3>
                <button id="btn-cerrar-fechas">&times;</button>
            </div>
            <div class="side-menu-content">
                <div class="fecha-item" onclick="activarBurbuja('Mujer')">
                    <span class="emoji">💜</span>
                    <div class="txt"><strong>Día de la Mujer</strong><br><small>8 de Marzo</small></div>
                </div>
                <div class="fecha-item" onclick="activarBurbuja('Amarillas')">
                    <span class="emoji">🌻</span>
                    <div class="txt"><strong>Flores Amarillas</strong><br><small>21 de Marzo</small></div>
                </div>
                <div class="fecha-item" onclick="activarBurbuja('Mama')">
                    <span class="emoji">🌹</span>
                    <div class="txt"><strong>Día de la Madre</strong><br><small>Mayo 2026</small></div>
                </div>
            </div>
        </div>

        <div id="burbuja-activa" class="burbuja-promo">
            <div id="burbuja-contenido"></div>
        </div>
        `;

        // --- LÓGICA DEL MENÚ LATERAL ---
        const sideMenu = document.getElementById('side-menu-fechas');
        const btnAbrir = document.getElementById('btn-abrir-fechas');
        const btnCerrar = document.getElementById('btn-cerrar-fechas');

        btnAbrir.onclick = () => sideMenu.classList.add('active');
        btnCerrar.onclick = () => sideMenu.classList.remove('active');

        // --- LÓGICA DE LA BURBUJA ---
        window.activarBurbuja = function(tipo) {
            const burbuja = document.getElementById('burbuja-activa');
            const contenido = document.getElementById('burbuja-contenido');
            
            let html = "";
            let url = "";

            if(tipo === 'Mujer') {
                html = `<span>💜</span><small>Especial Mujer</small>`;
                url = "especial-1.html";
                burbuja.style.borderColor = "#9b5de5";
            } else if(tipo === 'Amarillas') {
                html = `<span>🌻</span><small>Flores Amarillas</small>`;
                url = "especial-2.html";
                burbuja.style.borderColor = "#ffd60a";
            } else if(tipo === 'Mama') {
                html = `<span>🌹</span><small>Día Mamá</small>`;
                url = "catalogo.html";
                burbuja.style.borderColor = "#ff85a1";
            }

            contenido.innerHTML = html;
            burbuja.classList.add('visible');
            burbuja.onclick = () => window.location.href = url;
            sideMenu.classList.remove('active');
        };
    }

    // --- 2. INSERTAR EL WHATSAPP INTELIGENTE (TU LÓGICA ORIGINAL) ---
    const waContainer = document.getElementById('whatsapp-universal');
    if (waContainer) {
        const mensajePersonalizado = waContainer.getAttribute('data-msj') || miMensajeDefault;
        const linkFinal = `https://wa.me/${miTelefono}?text=${encodeURIComponent(mensajePersonalizado)}`;
        
        waContainer.innerHTML = `
        <a href="${linkFinal}" class="wa-float" target="_blank" rel="noopener noreferrer">
            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="30" alt="WhatsApp">
        </a>`;
    }
});