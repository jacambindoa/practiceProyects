//Codigo cuadrado
console.group("Cuadrados");
/* const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+" cm"); */

function perimetroCuadrado (lado){
    return lado*4;
} 

function areaCuadrado (lado) {
    return lado*lado;
}

//console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cm");
//console.log("El área del cuadrado mide "+AreaCuadrado+" cm^2");
console.groupEnd();
//Codigo triangulo
console.group("Triangulos");
/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triangulo miden: "
    +ladoTriangulo1+" cm, "
    +ladoTriangulo2+" cm, "
    +baseTriangulo+" cm."
    +" La altura del triangulo es: "+alturaTriangulo+" cm."
    ); */
function perimetroTriangulo (lado1, lado2, base){
    return lado1+lado2+base;
} 

//ladoTriangulo1+ladoTriangulo2+baseTriangulo;
//console.log("El perimetro del triangulo es: "+perimetroTriangulo+" cm");

function areaTriangulo (baseTriangulo, alturaTriangulo){
    return(baseTriangulo*alturaTriangulo)/2;
} 

//console.log("El area del triangulo es: "+areaTriangulo+" cm^2.");
console.groupEnd(); 
//Codigo circulo
console.group("Circulo");
const pi=Math.PI;
//const radioCirculo = 4;
function diametroCirculo (radio){
    return radio*2;
}
function perimetroCirculo(radio){
    const diametro=diametroCirculo(radio);
    return diametro*pi; 
}

function areaCirculo(radio){
    retur (radio*radio)*PI;
}

console.log("El numero pi equivale a: "+pi);
console.log("El perimetro del circulo es: "+perimetroCirculo+" cm.");
console.log("El area del circulo es: "+areaCirculo+" cm^2.");
console.groupEnd(); 

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);
    alert (perimetro+" cm")
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);
    alert (area+" cm2");

}
function calcularAreaTriangulo(){
    const input1 = document.getElementById("inputAlturaTriangulo");
    const input2 = document.getElementById("inputBaseTriangulo");
    const value1 = input1.value;
    const value2 = input2.value;
    const area1 = areaTriangulo(value1,value2);
    alert (area1+" cm2");

}