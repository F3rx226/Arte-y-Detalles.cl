document.addEventListener("DOMContentLoaded", function() {
    // 1. Buscamos el contenedor en el HTML
    const menuContainer = document.getElementById('navbar-universal');
    
    if (menuContainer) {
        // 2. Insertamos el HTML de la Navbar y el Menú Lateral
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
                    <a href="index.html"><img src="img/regalo.jpeg" alt="Arte & Detalles"></a>
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
                <button id="btn-cerrar-fechas" style="background:none; border:none; color:white; font-size:2rem; cursor:pointer;">&times;</button>
            </div>
            <div class="side-menu-content" style="padding: 20px; display: flex; flex-direction: column; gap: 15px;">
                
                <a href="especial-mujer.html" style="text-decoration:none; color:#3c096c; display:flex; align-items:center; gap:10px; padding:10px; border-radius:8px; background:#f8f4ff;">
                    <span style="font-size:1.5rem;">💜</span>
                    <strong>Día de la Mujer</strong>
                </a>

                <a href="especial-flores-amarillas.html" style="text-decoration:none; color:#7a6000; display:flex; align-items:center; gap:10px; padding:10px; border-radius:8px; background:#fffdf0; border: 1px solid #f9d423;">
                    <span style="font-size:1.5rem;">🌻</span>
                    <strong>Flores Amarillas</strong>
                </a>

            </div>
        </div>`;

        // 3. Lógica de apertura y cierre
        const sideMenu = document.getElementById('side-menu-fechas');
        const btnAbrir = document.getElementById('btn-abrir-fechas');
        const btnCerrar = document.getElementById('btn-cerrar-fechas');

        if (btnAbrir && sideMenu) {
            btnAbrir.onclick = () => sideMenu.classList.add('active');
        }

        if (btnCerrar && sideMenu) {
            btnCerrar.onclick = () => sideMenu.classList.remove('active');
        }

        // Cerrar si se hace clic fuera del menú
        window.addEventListener('click', (e) => {
            if (e.target === sideMenu) {
                sideMenu.classList.remove('active');
            }
        });
    }
});