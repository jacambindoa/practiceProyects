//Codigo cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: "+ladoCuadrado+" cm");
const perimetroCuadrado = ladoCuadrado*4;
console.log("El perimetro del cuadrado es: "+perimetroCuadrado+" cm");
const AreaCuadrado = ladoCuadrado*ladoCuadrado;
console.log("El área del cuadrado mide "+AreaCuadrado+" cm^2");
console.groupEnd();
//Codigo triangulo
console.group("Triangulos");
const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;
console.log(
    "Los lados del triangulo miden: "
    +ladoTriangulo1+" cm, "
    +ladoTriangulo2+" cm, "
    +baseTriangulo+" cm."
    +" La altura del triangulo es: "+alturaTriangulo+" cm."
    );
const perimetroTriangulo = ladoTriangulo1+ladoTriangulo2+baseTriangulo;
console.log("El perimetro del triangulo es: "+perimetroTriangulo+" cm");
const areaTriangulo =(baseTriangulo*alturaTriangulo)/2;
console.log("El area del triangulo es: "+areaTriangulo+" cm^2.");
console.groupEnd(); 
//Codigo circulo
console.group("Circulo");
const radioCirculo = 4;
const diametroCirculo = radioCirculo*2;
const pi=Math.PI;
const perimetroCirculo= diametroCirculo*pi;
const areaCirculo=(radioCirculo*radioCirculo)*pi;
console.log("El numero pi equivale a: "+pi);
console.log("El perimetro del circulo es: "+perimetroCirculo+" cm.");
console.log("El area del circulo es: "+areaCirculo+" cm^2.");
console.groupEnd(); 

    