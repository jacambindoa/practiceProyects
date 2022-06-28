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

const convertirGrados = (grados = undefined, unidad = undefined) => {
  if(grados === undefined) return console.warn("No ingresaste un valor");
  if (typeof grados !== "number") return console.error(`El valor ${grados}, no es un numero`);
  if(grados === undefined) return console.warn("No ingresaste un valor en grados")
  if(unidad === undefined) return console.warn("No ingresaste un valor en tipo de conversion");
  if (typeof unidad !== "string") return console.error(`El valor ${unidad}, no es un texto`);
  if(unidad.length !== 1 ||!/(C|F)/.test(unidad) ) return console.warn("valor de unidad no reconocido ingresa C (centigrados) o F (farenheith)");

  if (unidad ==="C"){
    return console.info(`${grados}°C = ${Math.round((grados*9/5)+32)}°F`);
  }else if (unidad ==="F"){
    return console.info(`${grados}°F = ${Math.round((grados-32)*5/9)}°C`);
  }else{
    return console.error("El tipo de grados a convertir no es valido");
  }
}

// convertirGrados();
// convertirGrados("2");
// convertirGrados(2);
// convertirGrados(2, true);
// convertirGrados (2, "HOLA");
// convertirGrados (2, "C");
// convertirGrados (2, "F");
// convertirGrados (100, "C");
// convertirGrados (32, "F");
// convertirGrados (100, "F");
// convertirGrados (52, "F");

/* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10. */

const convertirBinarioDecimal = (numero = undefined, base = undefined) =>{
  if(numero === undefined) return console.warn("No ingresaste un valor");
  if (typeof numero !== "number") return console.error(`El valor ${numero}, no es un numero`);
  if(base === undefined) return console.warn("No ingresaste la base a convertir");
  if (typeof base !== "number") return console.error(`El valor ${base}, no es un numero`);

  if (base === 2){
    return console.info(`El número ${base}, es igual a ${parseInt(numero, base)} en base 10`)
  }else if (base===10) {
    return console.info(`El número ${base}, es igual a ${(numero.toString(base))} en base 2`)
  }else{
    console.error("El tipo de base a convertir no es valido")
  }
}

// convertirBinarioDecimal();
// convertirBinarioDecimal("2");
// convertirBinarioDecimal(100);
// convertirBinarioDecimal(100, "2");
// convertirBinarioDecimal(100, 2);
// convertirBinarioDecimal(4, 10);
// convertirBinarioDecimal(114, 10);
// convertirBinarioDecimal(1110010, 2);

/* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800. */

const descuento = (monto = undefined, descuento = 0) => {
  if(monto === undefined) return console.warn("No ingresaste un valor");
  if (typeof monto !== "number") return console.error(`El valor ${monto}, no es un numero`);
  if (monto === 0) return console.error("El monto no puede ser 0");
  if (Math.sign(monto)===-1) return console.error ("El monto no puede ser negativo")
  if (typeof descuento !== "number") return console.error(`El valor ${descuento}, no es un numero`);
  if (Math.sign(descuento)===-1) return console.error ("El descuento no puede ser negativo")

  return console.info(`$${monto}-${descuento}% = $${monto-(monto*descuento)/100}`)
}

// descuento();
// descuento("200");
// descuento(0);
// descuento(-100);
// descuento(100, "20");
// descuento(100, -20);
// descuento(1000, 25);

/* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020). */

const calcularYears = (fecha = undefined) => {
  if (fecha === undefined) return console.warn("No ingresaste la fecha");
  if (!(fecha instanceof Date)) return console.error("El valor que ingresaste no es una fecha valida");

  let hoymenosfecha = new Date().getTime()-fecha.getTime(),
    yearsenMs=1000*60*60*24*365

  years=Math.floor(hoymenosfecha/yearsenMs);

  return(Math.sign(years)===-1)
    ?console.info(`Faltan ${Math.abs(years)} años para el ${fecha.getFullYear()}.`)
    :(Math.sign(years) === 1)
      ?console.info(`Han pasado ${Math.abs(years)} años, desde ${fecha.getFullYear()}.`)
      :console.info(`Estamos en el año actual ${fecha.getFullYear()}.`)
}

// calcularYears ();
// calcularYears ({});
// calcularYears (true);
// calcularYears (new Date());
// calcularYears (new Date(1992,1,18));
// calcularYears (new Date(2192,1,18));

/* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5. */

const contarLetras = (cadena = "") =>{
  if (!cadena) return console.warn("No ingresaste una cadena de texto");
  if (typeof cadena !== "string") return console.error(`El valor ${cadena}, no es un texto`);

  let vocales = 0, 
    consonantes = 0;

  cadena=cadena.toLocaleLowerCase();

  for (let letra of cadena){
    if(/[aeiouáéíóúü]/.test(letra))vocales++;
    
    if(/[bcdfghjklmnñpqrstvwxyz]/.test(letra))consonantes++;
  }
  return console.info({cadena, vocales, consonantes})
}

// contarLetras();
// contarLetras(3);
// contarLetras("Hola mundo");
// contarLetras("ñoño");
// contarLetras("lorem ipsum dolor sit amet");

/* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero. */

const validarNombre = (nombre="") => {
  if (!nombre) return console.warn("No ingresaste un texto");
  if (typeof nombre !== "string") return console.error(`El valor ${nombre}, no es un texto`);

  let expReg = /^[A-Za-zÑñÁÉÍÓÚáéíóúü\s]+$/g.test(nombre);

  return (expReg)
    ?console.info(`"${nombre}", es un nombre válido`)
    :console.info(`"${nombre}", NO es un nombre válido`)
}

// validarNombre();
// validarNombre(3);
// validarNombre("Jonathan");
// validarNombre("Jonathan Cambindo");

/* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero. */

const validarCorreo = (email="") => {
  if (!email) return console.warn("No ingresaste un email");
  if (typeof email !== "string") return console.error(`El valor ${email}, no es un texto`);

  let expReg = /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/i.test(email);

  return (expReg)
    ?console.info(`"${email}", es un email válido`)
    :console.info(`"${email}", NO es un email válido`)
}

// validarCorreo ();
// validarCorreo (3);
// validarCorreo ("jonathan@gmail.com");

/* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25]. */




/* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60]. */




/* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]}. */