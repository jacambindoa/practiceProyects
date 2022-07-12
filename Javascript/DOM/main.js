// console.log(document.getElementsByTagName("li"));
// console.log(document.getElementsByClassName("card"));
// console.log(document.getElementsByName("nombre"));

// console.log(document.getElementById("menu"));

//querySelector (CONSULTA DE SELECTOR): consulta cuantos elementos del selector seleccionado hay

// console.log(document.querySelector("#menu"));
// console.log(document.querySelectorAll("a"));

// document.querySelectorAll("a").forEach((el) => console.log(el));

// console.log(document.querySelectorAll(".card")[2])

// console.log(document.querySelector(".link-dom").href);

const $linkDOM = document.querySelector(".link-dom")

$linkDOM.setAttribute("target", "_blank");

// console.log($linkDOM.getAttribute("data-description"))
// console.log($linkDOM.dataset);


//Obtener-acceder estilos
// console.log($linkDOM.style);
// console.log($linkDOM.getAttribute("Style"));
// console.log(window.getComputedStyle($linkDOM));

//Establecer valores de stilos
$linkDOM.style.setProperty("text-decoration", "none");
$linkDOM.style.setProperty("display", "block");
$linkDOM.style.width = "50%";
$linkDOM.style.textAlign = "center";
$linkDOM.style.marginLeft = "auto";
$linkDOM.style.marginRight = "auto";
$linkDOM.style.padding = "1rem";
$linkDOM.style.borderRadius = ".5rem";

//Variables CSS - CUSTOM PROPERTIES CSS
const $html = document.documentElement; // representacion de html en js
  $body= document.body;

let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),
  varYellowColor = getComputedStyle($html).getPropertyValue("--yellow-color");

console.log(varDarkColor, varYellowColor);

$body.style.backgroundColor = varDarkColor;
$body.style.color = varYellowColor;





// TEXTO Y HTML //

const $whatisDOM = document.getElementById("que-es");

let text = `
  <p>
    El modelo de Objetos de Documento (<b><i>DOM - Documento Object Model</i></b>) es una API para documentos HTML y XML
  </P>
  <p>
    Este proveé una representación estructrural del documento, premitiendo modificar su contenido y presentación visual mediante código JS.
  </p>
  <p>
    <mark>El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
  <p>
`;

//$whatisDOM.innerText = text;//Creado para internetExplorer NO es el standard
$whatisDOM.textContent = text;//Se utiliza cuando solo se va a agregar texto
$whatisDOM.innerHTML = text;//Se utiliza para agregar html al document
$whatisDOM.outerHTML = text;//Corrige la sintaxis html

//DOM TRAVERSING: RECORRIENDO EL DOM 

// const $cards = document.querySelector(".cards");

// console.log($cards )
/* 
const $figure = document.createElement("figure"),
  $img = document.createElement("img"),
  $figcaption = document.createElement("figcaption"),
  $figcaptionText = document.createTextNode("Animals jaja"),
  $cards = document.querySelector(".cards");


$img.setAttribute("src", "http://placeimg.com/200/200/animals");
$img.setAttribute("alt", "Animals");

$figcaption.appendChild($figcaptionText)
$figure.appendChild($img);
$figure.appendChild($figcaption);
$cards.appendChild($figure);

//AGREGAR TEXTO AL DOCUMENTO CON TEXT CONTENT

const estaciones = ["Primavera", "Verano", "Otoño", "Invierno"],
  $ul = document.createElement("ul");

document.write("<h3>Estaciones del año<h3>");
document.body.appendChild($ul);

estaciones.forEach(el => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $ul.appendChild($li)
})

//AGREGAR TEXTO AL DOCUMENT CON TEXT INNERHTML

const continentes = ["Africa", "America", "Asia", "Europa", "Oceania"],
  $ul2 = document.createElement("ul2");

document.write("<h3>Continentes del Mundo</h3>");
document.body.appendChild($ul2);
$ul2.innerHTML = "";
continentes.forEach((el) => ($ul2.innerHTML +=  `<li>${el}</li>`));

const mesesDelAño = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre"
],

$ul3=document.createElement("ul"),
$fragment = document.createDocumentFragment();

mesesDelAño.forEach((el) => {
  const $li = document.createElement("li");
  $li.textContent = el;
  $fragment.appendChild($li);
});

document.write("<h3>Meses del Año</h3>");
$ul3.appendChild($fragment);
document.body.appendChild($ul3) */


/* const $cards = document.querySelector(".cards"),
  $template = document.getElementById("template-card").content,
  $fragment = document.createDocumentFragment();
  cardContent = [
  {
    title: "Tecnologia",
    img: "https://placeimg.com/200/200/tech",
  },  
  {
    title: "Animales",
    img: "https://placeimg.com/200/200/animals",
  },  
  {
    title: "Arquitectura",
    img: "https://placeimg.com/200/200/arch",
  },  
  {
    title: "Gente",
    img: "https://placeimg.com/200/200/people",
  },  
  {
    title: "Naturaleza",
    img: "https://placeimg.com/200/200/nature",
  },  
  ];

  cardContent.forEach(el => {
    $template.querySelector("img").setAttribute("src",el.img);
    $template.querySelector("img").setAttribute("alt",el.title);
    $template.querySelector("figcaption").textcontent = el.title;

    let $clone = document.importNode($template, true);
    $fragment.appendChild($clone);
  });

  $cards.appendChild($fragment); */


const $cards = document.querySelector(".cards")

/* 
.insertAdjacent
  .insertAdjacentElement(Position, el)
  .insertAdjacentHTML(Position, html)
  .insertAdjacentText(position, text)

Posiciones:
beforebegin(hermano anterior)
afterbegin(primerhijo)
beforeend(ultimo Hijo)
afterend(hermano siguiente)

*/

function saludar (nombre="Desconocid@"){
  alert(`Hola ${nombre}`)
}

const $divsEventos = document.querySelectorAll(".eventos-flujo div"), $linkEventos = document.querySelectorAll(".eventos-flujo a");

function flujoEventos(e){
  console.log(`Hola te saluda ${this}, el click lo origino ${e.target.className}`)
  e.stopPropagation();
}

console.log ($divsEventos);

document.addEventListener("click", (e)=>{
  console.log("Click en",e.target);

  if(e.target.matches(".eventos-flujo div")){
    flujoEventos(e);
  }

  if(e.target.matches(".eventos-flujo a")){
    alert("Hola soy tu amigo");
    e.preventDefault();
  }
})

/* $divsEventos.forEach((div) => {
  div.addEventListener("click", flujoEventos);
})

$linkEventos.addEventListener("click",(e) => {
  alert("Hola soy tu amigo");
  e.preventDefault();
}); */