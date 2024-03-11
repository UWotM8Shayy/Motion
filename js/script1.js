document.addEventListener("DOMContentLoaded", function() {
   
    const loaderContainer = document.querySelector('.loading-wave-container');

    
    setTimeout(function() {
        loaderContainer.style.opacity = 0;
        setTimeout(function() {
            loaderContainer.style.display = 'none';
        }, 500);
    }, 500); 
});

let menuOpen = false;

function toggleMenu() {
    var sideMenu = document.getElementById('side-menu');
    var logoMenu = document.getElementById('LogoMenu');

    if (!menuOpen) {
        sideMenu.style.left = '0';
        logoMenu.style.transform = 'scale(1.5)';
        document.body.addEventListener('click', closeMenuOutside);
    } else {
        sideMenu.style.left = '-250px';
        logoMenu.style.transform = 'scale(1)';
        document.body.removeEventListener('click', closeMenuOutside);
    }

    menuOpen = !menuOpen;
}

function closeMenuOutside(event) {
    var sideMenu = document.getElementById('side-menu');
    var logoMenu = document.getElementById('LogoMenu');

    if (!sideMenu.contains(event.target) && !logoMenu.contains(event.target)) {
        sideMenu.style.left = '-250px';
        logoMenu.style.transform = 'scale(1)';
        document.body.removeEventListener('click', closeMenuOutside);
        menuOpen = false;
    }
}




