import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js";
import { moveBall } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js"
import darkTheme from "./tema_oscuro.js";

const d = document;

d.addEventListener("DOMContentLoaded", e => {
  hamburgerMenu(".panel-btn",".panel",".menu a");
  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/Alarma.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jul 17, 2022 09:06:00", "Feliz Cumpleaños programador");
  scrollTopButton(".scroll-top-btn");
})

d.addEventListener("keydown", e => {
  moveBall(e, ".ball", ".stage");
})

darkTheme(".dark-theme-btn", "dark-mode");
