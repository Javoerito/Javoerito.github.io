(function(){
  var secciones = document.querySelectorAll('main section[id]');
  var enlacesNav = document.querySelectorAll('.navlink');
  var prefiereMenosMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  function jaMostrarSeccion(entradas){
    entradas.forEach(function(entrada){
      if (entrada.isIntersecting) {
        entrada.target.classList.add('in-view');
      }
    });
  }

  function jaResaltarEnlaceActivo(entradas){
    entradas.forEach(function(entrada){
      var id = entrada.target.getAttribute('id');
      var enlace = document.querySelector('.navlink[href="#' + id + '"]');
      if (!enlace) return;
      if (entrada.isIntersecting) {
        enlacesNav.forEach(function(item){ item.removeAttribute('aria-current'); });
        enlace.setAttribute('aria-current', 'true');
      }
    });
  }

  function jaInicializarObservadores(){
    if (!('IntersectionObserver' in window)) {
      secciones.forEach(function(seccion){ seccion.classList.add('in-view'); });
      return;
    }

    var observadorAparicion = new IntersectionObserver(jaMostrarSeccion, { threshold: 0.12 });
    secciones.forEach(function(seccion){ observadorAparicion.observe(seccion); });

    var observadorNavegacion = new IntersectionObserver(jaResaltarEnlaceActivo, { rootMargin: '-40% 0px -50% 0px', threshold: 0 });
    secciones.forEach(function(seccion){ observadorNavegacion.observe(seccion); });
  }

  function jaRevelarGustos(seccionGustos){
    if (!seccionGustos || !seccionGustos.hasAttribute('hidden')) return;
    seccionGustos.removeAttribute('hidden');
    void seccionGustos.offsetWidth;
    seccionGustos.classList.add('reveal');
    seccionGustos.scrollIntoView({ behavior: prefiereMenosMovimiento ? 'auto' : 'smooth', block: 'center' });
  }

  function jaReproducirSonidoSecreto(audio){
    if (!audio) return;
    audio.currentTime = 0;
    audio.play().catch(function(){});
  }

  function jaEscucharCodigoSecreto(){
    var codigo = 'teto';
    var acumulado = '';
    var seccionGustos = document.getElementById('gustos');
    var audioSecreto = document.getElementById('easter-egg-audio');

    window.addEventListener('keydown', function(evento){
      if (evento.key.length !== 1) return;
      acumulado = (acumulado + evento.key.toLowerCase()).slice(-codigo.length);
      if (acumulado !== codigo) return;
      jaRevelarGustos(seccionGustos);
      jaReproducirSonidoSecreto(audioSecreto);
    });
  }

  jaInicializarObservadores();
  jaEscucharCodigoSecreto();
})();
