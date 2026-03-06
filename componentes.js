document.addEventListener("DOMContentLoaded", function() {
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
                <div class="nav-side nav-left"><a href="index.html">Inicio</a><a href="catalogo.html">Catálogo</a></div>
                <div class="nav-logo"><a href="index.html"><img src="img/regalo.jpeg"></a></div>
                <div class="nav-side nav-right"><a href="contacto.html">Contacto</a><a href="nosotros.html">Nosotros</a></div>
            </div>
        </nav>
        <div id="side-menu-fechas" class="side-menu">
            <div class="side-menu-header"><h3>Fechas Especiales</h3><button id="btn-cerrar-fechas">&times;</button></div>
            <div class="side-menu-content">
                <a href="especial-mujer.html" class="fecha-link-directo"><span>💜</span><strong>Día de la Mujer</strong></a>
                <a href="flores-amarillas.html" class="fecha-link-directo"><span>🌻</span><strong>Flores Amarillas</strong></a>
            </div>
        </div>`;

        const sideMenu = document.getElementById('side-menu-fechas');
        document.getElementById('btn-abrir-fechas').onclick = () => sideMenu.classList.add('active');
        document.getElementById('btn-cerrar-fechas').onclick = () => sideMenu.classList.remove('active');
    }
});