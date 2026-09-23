# Portafolio — Javier Andrés Angulo Albornoz

Portafolio web personal, estático y autocontenido (HTML/CSS/JS), pensado para publicarse en GitHub Pages.

## Estructura

```
portafolio-web/
├── index.html          # Contenido y estructura (cards en cada sección)
├── css/
│   └── style.css       # Escala de verdes, layout de cards, tipografía, animaciones
├── js/
│   └── script.js       # Fade-in al hacer scroll y resaltado del ítem activo en el menú
├── assets/
│   └── images/         # Imágenes placeholder (SVG) — reemplázalas por las tuyas
└── README.md
```

## Imágenes (placeholder, listas para reemplazar)

Cada card tiene una imagen de relleno en `assets/images/` con el mismo nombre y proporción (16:9) que necesita el diseño. Para poner tu propia foto:

1. Reemplaza el archivo (puedes usar `.jpg`/`.png`, no tiene que ser `.svg`).
2. Si cambias la extensión, actualiza el `src` correspondiente en `index.html`.

| Card | Archivo |
|---|---|
| Foto de perfil (sidebar + hero) | `assets/images/avatar.jpg` (ya es tu foto real) |
| Educación — EPN | `assets/images/educacion-epn.jpeg` (foto real) |
| Experiencia — Smartlab | `assets/images/experiencia-smartlab.svg` |
| Experiencia — Ferretería | `assets/images/experiencia-ferreteria.svg` |
| Proyecto — Traductor Braille | `assets/images/proyecto-braille.png` (captura real) |
| Proyecto — Mapa Interactivo | `assets/images/proyecto-mapa.svg` |
| Proyecto — Reproductor MP3 | `assets/images/proyecto-mp3.svg` |
| Proyecto — CANINU | `assets/images/proyecto-caninu.png` (captura real) |
| Proyecto — Conversor de Bases Numéricas | `assets/images/proyecto-conversor.png` (captura real) |
| Certificaciones (vacío) | `assets/images/certificaciones.svg` |
| Hobby — Coro EPN | `assets/images/hobby-coro.png` (foto real) |

## Easter egg: sección "Gustos"

Escribe `teto` en el teclado (en cualquier parte de la página, sin necesidad de un input) y aparece una sección oculta llamada **Gustos**, con animación de entrada y reproduciendo `assets/audio/easter-egg.mp3`.

- Lógica: `js/script.js`, al final del archivo.
- Contenido de la sección: `index.html`, bloque `<section id="gustos" ...>` — edita las tres cards con tus gustos reales.
- Audio: reemplaza `assets/audio/easter-egg.mp3` por el que quieras (mismo nombre, o actualiza el `src` del `<audio>` en `index.html`).
- Algunos navegadores bloquean el autoplay de audio sin gesto previo del usuario; como esto se dispara con una tecla presionada, cuenta como gesto válido en la mayoría de navegadores modernos.

## Links pendientes

Los proyectos **Mapa Interactivo**, **Reproductor de MP3** y la card del **Coro de la EPN** siguen con `href="#"` — reemplázalos por la URL real cuando la tengas. Braille, CANINU y Conversor de Bases Numéricas ya apuntan a sus repos de GitHub.

## Cómo verlo localmente

Solo abre `index.html` en el navegador, o corre un servidor simple:

```bash
python3 -m http.server 8000
```

y entra a `http://localhost:8000`.

## Cómo publicarlo en GitHub Pages

1. Sube esta carpeta a un repositorio de GitHub (el contenido de `portafolio-web/`, no la carpeta contenedora).
2. En el repo: **Settings → Pages → Source**, selecciona la rama (`main`) y la carpeta raíz (`/`).
3. GitHub publicará el sitio en `https://<tu-usuario>.github.io/<nombre-repo>/`.

## Accesibilidad (WCAG 2.1 AA)

- Landmarks semánticos (`header`, `nav`, `main`, `section`, `footer`) y jerarquía de encabezados correcta.
- Enlace "Saltar al contenido principal" para navegación por teclado.
- Contraste de color verificado (verde oscuro sobre blanco, ≥ 7:1 en texto principal).
- Foco visible personalizado en todos los elementos interactivos (`:focus-visible`).
- Animaciones (fade-in y hover) respetan `prefers-reduced-motion: reduce`.
- Navegación 100% funcional con teclado; nada depende solo de `:hover`.

## Personalizar

- **Contenido:** edita directamente el texto en `index.html`.
- **Colores:** cambia las variables `--green-900`, `--green-700`, etc. al inicio de `css/style.css`.
- **Certificaciones:** cuando tengas certificaciones, reemplaza el bloque `.empty-note` en la sección `#certificaciones` por entradas `.entry` (mismo formato que Proyectos).
