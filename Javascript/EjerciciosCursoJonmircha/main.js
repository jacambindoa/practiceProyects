/* 1) Programa una funcion que cuente el numero de caracteres 
de una cadena de texto*/

/* function contarCadena (cadena = ""){
    if(!cadena){
      console.warn("No ingresaste ninguna cadena");
    }else{
      console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);
    }
} */

// Para hacerlo con funcion expresada, arrow function y operador ternario

const contarCaracteres = (cadena = "") =>
  (!cadena)
  ?console.warn("No ingresaste ninguna cadena")
  :console.info(`La cadena ${cadena} tiene ${cadena.length} caracteres`);

// contarCaracteres ("Mi nombre es Jonathan alexander cambindo arango");

/* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFuncion("Hola Mundo", 4) devolverá "Hola".
*/ 

const recortarTexto = (cadena = "", longitud = undefined) =>
  (!cadena)
    ?console.warn("No ingresaste ninguna cadena")
    :(longitud === undefined)
      ?console.warn("No ingresaste la longitud para recortar el texto")
      :console.info(cadena.slice(0, longitud))
    

// recortarTexto("hola mundo");

/* Bonus) Programar un validador de mayor de edad (18) con operadores ternarios y arrow functions */

const mayorDeEdad = (edad) => (edad<18)?console.log("Eres menor de edad"):console.log("Eres mayor de edad");

// mayorDeEdad(17)

/* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe. miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'].*/

const cadena = (cadena = "", separador = undefined) =>
  (!cadena)
    ?console.warn("No ingresaste ninguna cadena")
    :(separador === undefined)
      ?console.warn("No ingresaste un separador de texto")
      :console.info(cadena.split(separador));

/* cadena ("Enero Febrero Marzo Abril Mayo Junio Julio Agosto Septiembre Octubre Noviembre Diciembre", " ")

cadena () */

/*4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo. */

const repetirTexto = (texto = "", repeticiones = undefined) => {
  if (!texto) return console.warn("No ingresaste ningun texto");
  if (repeticiones === undefined) return console.warn ("No ingresaste un numero de repeticiones");
  if (repeticiones === 0) return console.error("El numero de repeticiones no puede ser 0");
  if (Math.sign(repeticiones)===-1) return console.error("El numero de repeticiones no puede ser negativo");
  for (let i=1; i<=repeticiones; i++) console.info(`${texto}, ${i}`);
}

// repetirTexto("Hola miniosn, que tal", 6);

/* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH". */

const invertirCadena = (cadena="") =>
  (!cadena)
    ? console.warn("No ingresaste ninguna cadena")
    : console.info(cadena.split("").reverse().join(""))

// invertirCadena ("Hola Mundo")
// invertirCadena ("Javascrip es un lenguaje de programacion increible")

/* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2. */

const text = (texto = "", palabra = "") =>{
  if (!texto) return console.warn("No ingresaste ningun texto");
  if (!palabra) return console.warn("No ingresaste ninguna palabra a evaluar");

  let i = 0, contador = 0;

  while (i !== -1){
    i = texto.indexOf(palabra, i);
    if (i!==-1){
      i++;
      contador++
    }
  } 
  return console.info(`La palabra ${palabra} se repite ${contador} veces`)
}

/* text("Hola mundo, adios mundo, estamos en nuestro mundo, y quiero a todo el mundo", "mundo") */


/* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true. */

const palindromo = (palabra = "") => {
  if (!palabra) return console.warn("No ingresaste una palabra o frase");
  palabra = palabra.toLowerCase();
  let palabraInvertida = palabra.split("").reverse().join("");
  return (palabra===palabraInvertida)
    ?console.info("Si es palindromo")
    :console.info("No es palindromo");
} 

// palindromo("luzazul");

/* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5. */

const eliminarCaracteres = (texto = "", patron = "") => 
  (!texto)
    ?console.warn("No ingresaste un texto")
    :(!patron)
      ?console.warn("No ingresaste un patron")
      :console.info(texto.replace(new RegExp(patron, "ig"),""))

// eliminarCaracteres("")
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "")
// eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz")

/* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600. */

const numeroAleatorio = () => console.info(Math.round(Math.random()*100)+500)

// numeroAleatorio();

/* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true. */

const capicua = (numero = 0) =>{
  if (!numero) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number") return console.error(`El valor ${numero}, no es un numero`);
  numero=numero.toString();
  let numeroInvertido = numero.split("").reverse().join("");
  return (numero === numeroInvertido)
    ?console.info("Si es capicúa")
    :console.info("No es capicúa")
}

// capicua()
// capicua(2002);
// capicua(2000);
// capicua("dos mil trece");

/* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120. */

const factorial = (numero = undefined) =>{
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number") return console.error(`El valor ${numero}, no es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (Math.sign(numero)===-1) return console.error ("El numero no puede ser negativo")
  let factorial = 1;
  for (i=numero; i>1; i--){
    factorial *= i;
  }
  return console.info(`El factorial de ${numero} es ${factorial}`)
}

// factorial();
// factorial(5);
// factorial(0);
// factorial(-7);
// factorial(8)

/* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true. */

const numeroPrimo = (numero = undefined) =>{
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number") return console.error(`El valor ${numero}, no es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");
  if (numero === 1) return console.error("El numero no puede ser 1");
  if (Math.sign(numero)===-1) return console.error ("El numero no puede ser negativo")
  
  let divisible = false;

  for (let i=2;i<numero; i++){
    if ((numero%i)===0){
      divisible = true;
      break;
    }
  }
  return (divisible)
    ?console.info(`El numero ${numero}, NO es primo`)
    :console.info(`El numero ${numero}, SI es primo`)
}

// numeroPrimo(6);
// numeroPrimo(7);
// numeroPrimo();
// numeroPrimo(-18);
// numeroPrimo(1);
// numeroPrimo(0);
// numeroPrimo(527);
// numeroPrimo("treinta y tres");

/* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar. */

const numeroParImpar = (numero = undefined) => {
  if (numero === undefined) return console.warn("No ingresaste un numero");
  if (typeof numero !== "number") return console.error(`El valor ${numero}, no es un numero`);
  if (numero === 0) return console.error("El numero no puede ser 0");


  return ((numero%2)===0)
    ?console.info(`El numero ${numero}, es PAR`)
    :console.info(`El numero ${numero}, es IMPAR`)
}

// numeroParImpar(0);
// numeroParImpar(12);
// numeroParImpar(15);

/* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F. */

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */


/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */


/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */