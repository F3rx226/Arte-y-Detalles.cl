document.addEventListener("DOMContentLoaded", function() {
    const menuContainer = document.getElementById('navbar-universal');
    if (menuContainer) {
        menuContainer.innerHTML = `
        <nav class="navbar">
            <div class="nav-container">
                <div class="menu-toggle" id="btn-abrir-fechas" style="cursor:pointer; display:flex; flex-direction:column; gap:5px; z-index:3000;">
                    <span style="width:25px; height:3px; background:#81c784; border-radius:2px;"></span>
                    <span style="width:25px; height:3px; background:#81c784; border-radius:2px;"></span>
                    <span style="width:25px; height:3px; background:#81c784; border-radius:2px;"></span>
                </div>
                <div class="nav-side nav-left"><a href="index.html">Inicio</a><a href="catalogo.html">Catálogo</a></div>
                <div class="nav-logo"><a href="index.html"><img src="img/regalo.jpeg"></a></div>
                <div class="nav-side nav-right"><a href="contacto.html">Contacto</a><a href="nosotros.html">Nosotros</a></div>
            </div>
        </nav>
        <div id="side-menu-fechas" class="side-menu" style="position:fixed; top:0; left:-350px; width:300px; height:100%; background:white; z-index:5000; transition:0.4s; box-shadow:10px 0 30px rgba(0,0,0,0.05); overflow-y: auto;">
            <div class="side-menu-header" style="padding:25px; background:#f1f8e9; color:#2e7d32; display:flex; justify-content:space-between; align-items:center;">
                <h3 style="font-size:1.1rem; font-family:'Poppins', sans-serif;">Nuestras Ediciones</h3>
                <button id="btn-cerrar-fechas" style="background:none; border:none; color:#2e7d32; font-size:30px; cursor:pointer;">&times;</button>
            </div>
            <div class="side-menu-content" style="padding:30px 20px; display:flex; flex-direction:column; gap:20px; font-family:'Poppins', sans-serif;">
                <a href="especial-mujer.html" style="text-decoration:none; color:#555; font-size:0.9rem;">💜 Día de la Mujer</a>
                <a href="flores-amarillas.html" style="text-decoration:none; color:#555; font-size:0.9rem;">🌻 Especial Primavera</a>
                <a href="dia-de-las-madres.html" style="text-decoration:none; color:#ad1457; font-size:0.9rem; font-weight:700;">💖 Día de las Madres</a>
            </div>
        </div>`;

        const sideMenu = document.getElementById('side-menu-fechas');
        document.getElementById('btn-abrir-fechas').onclick = () => sideMenu.style.left = '0';
        document.getElementById('btn-cerrar-fechas').onclick = () => sideMenu.style.left = '-350px';
    }
});