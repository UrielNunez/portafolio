//-------------------TYPING EFECT----------------
var typingEffect = new Typed(".TypedText",{
    // ERA STRINGS PORQUE SON VARIOS TEXTOS Y NO STRING DE UN SOLO TEXTO
    strings: ["Ilustrador", "Modelador", "Desarrollador"],
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
});

//descargar pdf
document.getElementById("Descargar").addEventListener("click", function() {
    var  enlace = document.createElement('a');

    enlace.href = './Examen.pdf';

    enlace.download = 'jose docuemnto.pdf';

    document.body.appendChild(enlace);

    enlace.click();

    document.body.removeChild(enlace);
});



//CAMBIAR ACTIVE LINK DE NAVBAR

/* ----- CHANGE ACTIVE LINK ----- */
/* Selecciona todas las secciones que tienen un atributo id */
const sections = document.querySelectorAll('section[id]');

/* Define la función scrollActive */
function scrollActive() {
    /* Obtiene la posición actual del scroll vertical */
    const scrollY = window.scrollY;

    /* Itera sobre cada sección */
    sections.forEach(current => {
        /* Obtiene la altura de la sección actual */
        const sectionHeight = current.offsetHeight,
              /* Obtiene la distancia desde la parte superior de la página hasta la parte superior de la sección */
              sectionTop = current.offsetTop - 50,
              /* Obtiene el id de la sección actual */
              sectionId = current.getAttribute('id');

        /* Comprueba si la posición del scroll está dentro de la sección actual */
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            /* Si está dentro, añade la clase 'active-link' al enlace del menú de navegación que apunta a esta sección */
            document.querySelector('.nav-menu a[href*="' + sectionId + '"]').classList.add('active-link');
        } else {
            /* Si no está dentro, elimina la clase 'active-link' del enlace del menú de navegación */
            document.querySelector('.nav-menu a[href*="' + sectionId + '"]').classList.remove('active-link');
        }
    });
}
/* Añade un event listener al objeto window que ejecuta la función scrollActive cada vez que se hace scroll en la página */
window.addEventListener('scroll', scrollActive);
