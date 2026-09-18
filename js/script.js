document.addEventListener("DOMContentLoaded", function jaAlIniciar() {
  const jaBotonMenu = document.getElementById("jaBotonMenu");
  const jaMenuNavegacion = document.getElementById("jaMenuNavegacion");
  const jaEnlacesNavegacion = jaMenuNavegacion.querySelectorAll("a");
  const jaSecciones = document.querySelectorAll(".seccion");
  const jaSpanAnio = document.getElementById("jaAnioActual");

  jaSpanAnio.textContent = new Date().getFullYear();

  function jaAlternarMenu() {
    const jaMenuEstaAbierto = jaMenuNavegacion.classList.toggle("jaMenuAbierto");
    jaBotonMenu.setAttribute("aria-expanded", jaMenuEstaAbierto ? "true" : "false");
    jaBotonMenu.textContent = jaMenuEstaAbierto ? "Cerrar" : "Menú";
  }
  jaBotonMenu.addEventListener("click", jaAlternarMenu);

  jaEnlacesNavegacion.forEach(function jaEscucharClicEnlace(jaEnlace) {
    jaEnlace.addEventListener("click", function jaCerrarMenuAlNavegar() {
      jaMenuNavegacion.classList.remove("jaMenuAbierto");
      jaBotonMenu.setAttribute("aria-expanded", "false");
      jaBotonMenu.textContent = "Menú";
    });
  });

  const jaOpcionesObservador = { rootMargin: "-40% 0px -55% 0px" };

  function jaAlCambiarInterseccion(jaEntradas) {
    jaEntradas.forEach(function jaRevisarEntrada(jaEntrada) {
      if (!jaEntrada.isIntersecting) return;

      const jaIdSeccionVisible = jaEntrada.target.getAttribute("id");

      jaEnlacesNavegacion.forEach(function jaActualizarEnlace(jaEnlace) {
        const jaCoincide = jaEnlace.getAttribute("href") === "#" + jaIdSeccionVisible;
        jaEnlace.classList.toggle("jaEnlaceActivo", jaCoincide);
        if (jaCoincide) {
          jaEnlace.setAttribute("aria-current", "location");
        } else {
          jaEnlace.removeAttribute("aria-current");
        }
      });
    });
  }

  const jaObservadorSecciones = new IntersectionObserver(jaAlCambiarInterseccion, jaOpcionesObservador);
  jaSecciones.forEach(function jaObservarSeccion(jaSeccion) {
    jaObservadorSecciones.observe(jaSeccion);
  });
});
