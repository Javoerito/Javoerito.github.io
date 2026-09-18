// Todas las variables, constantes y funciones usan el prefijo "ja" en camelCase.

document.addEventListener("DOMContentLoaded", function jaAlIniciar() {
  const jaBotonMenu = document.getElementById("jaBotonMenu");
  const jaMenuNavegacion = document.getElementById("jaMenuNavegacion");
  const jaEnlacesNavegacion = jaMenuNavegacion.querySelectorAll("a");
  const jaSecciones = document.querySelectorAll(".seccion");
  const jaSpanAnio = document.getElementById("jaAnioActual");

  // Año actual en el pie de página
  jaSpanAnio.textContent = new Date().getFullYear();

  // Menú hamburguesa (solo visible en móvil)
  function jaAlternarMenu() {
    const jaMenuEstaAbierto = jaMenuNavegacion.classList.toggle("jaMenuAbierto");
    jaBotonMenu.setAttribute("aria-expanded", jaMenuEstaAbierto ? "true" : "false");
    jaBotonMenu.textContent = jaMenuEstaAbierto ? "Cerrar" : "Menú";
  }
  jaBotonMenu.addEventListener("click", jaAlternarMenu);

  // Cierra el menú al elegir una sección (en móvil)
  jaEnlacesNavegacion.forEach(function jaEscucharClicEnlace(jaEnlace) {
    jaEnlace.addEventListener("click", function jaCerrarMenuAlNavegar() {
      jaMenuNavegacion.classList.remove("jaMenuAbierto");
      jaBotonMenu.setAttribute("aria-expanded", "false");
      jaBotonMenu.textContent = "Menú";
    });
  });

  // Resalta en el menú la sección visible en pantalla
  const jaOpcionesObservador = { rootMargin: "-40% 0px -55% 0px" };

  function jaAlCambiarInterseccion(jaEntradas) {
    jaEntradas.forEach(function jaRevisarEntrada(jaEntrada) {
      if (!jaEntrada.isIntersecting) return;

      const jaIdSeccionVisible = jaEntrada.target.getAttribute("id");

      jaEnlacesNavegacion.forEach(function jaActualizarEnlace(jaEnlace) {
        const jaCoincide = jaEnlace.getAttribute("href") === "#" + jaIdSeccionVisible;
        jaEnlace.classList.toggle("jaEnlaceActivo", jaCoincide);
      });
    });
  }

  const jaObservadorSecciones = new IntersectionObserver(jaAlCambiarInterseccion, jaOpcionesObservador);
  jaSecciones.forEach(function jaObservarSeccion(jaSeccion) {
    jaObservadorSecciones.observe(jaSeccion);
  });
});
