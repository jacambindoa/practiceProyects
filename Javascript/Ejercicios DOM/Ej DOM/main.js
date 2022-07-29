import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";
import responsiveTester from "./prueba_responsive.js";
import userDeviceInfo from "./deteccion_dispositivos.js";
import networkStatus from "./deteccion_red.js";
import webcam from "./deteccion_webcam.js";
import getGeolocation from "./geolocalizacion.js";
import searchFilters from "./filtro_busquedas.js";
import draw from "./sorteo.js";
import slider from "./carrusel.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/Alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown(
    "countdown",
    "Jul 17, 2022 09:06:00",
    "Feliz Cumpleaños programador"
  );
  scrollTopButton(".scroll-top-btn");
  responsiveMedia(
    "youtube",
    "(min-width; 1024px)",
    "Contenido Móvil",
    "contenido Escritorio"
  );
  responsiveMedia(
    "gmaps",
    "(min-width; 1024px)",
    "Contenido Móvil",
    "contenido Escritorio"
  );
  responsiveTester("responsive-tester");
  userDeviceInfo("user-device");
  webcam("webcam");
  getGeolocation("geolocation");
  searchFilters(".card-filter", ".card");
  draw("#winner-btn", ".player");
  slider();
});

d.addEventListener("keydown", (e) => {
  moveBall(e, ".ball", ".stage");
});

darkTheme(".dark-theme-btn", "dark-mode");
networkStatus();

