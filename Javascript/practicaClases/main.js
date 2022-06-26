/*Codigo para practicar Clases Herencia, Setters y Getters*/

//Clase Padre
class Player{
//Los atributos que van a quedar en los objetos creados llevan la palabra constructor 
    constructor(nombre, colorSombrero){
        this._nombre = nombre; //Se crean uno por uno los atributos o propiedades que va a tener la clase
        this._colorSombrero = colorSombrero;
    }

    saltar(){}
    correr(){}
    saludar(){  //Para crear un metodo simplemente se coloca el nombre seguido de parentesis llaves con su bloque de codigo
        return `Hola soy ${this._nombre} y mi sombrero es ${this._colorSombrero}`;
    }

    get nombre(){ // Para acceder a algun atributo se utiliza el metodo get como se muestra
        return this._nombre;
    }
    set cambiarNombre(nuevoNombre){ // Para acceder a algun atributo se utiliza el metodo set como se muestra
        this._nombre = nuevoNombre;
    }
}

let player1 = new Player('MARIO', 'ROJO');
let player2 = new Player('LUIGI', 'VERDE');

console.log(player1); 
console.log(player2); 

console.log(player1.saludar());
console.log(player2.saludar());

console.log(player1.nombre)


player1.cambiarNombre='JOAQUIN';
console.log(player1.nombre)

class Pet extends Player {
    constructor(nombre, colorSombrero, colorPiel){
        super (nombre, colorSombrero);
        this._colorPiel = colorPiel;
    }
    comer(){
        return 'Yo como manzanas';
    }
    saludar(){
        return super.saludar() + ' y ademas soy una mascota';
    }


    get colorPiel(){
        return this._colorPiel;
    }
    set colorPiel(nuevoColorPiel){
        this._colorPiel = nuevoColorPiel;
    }
}

let pet1 = new Pet("Yoshi", "Invisible", "Verde");
console.log (pet1)

console.log(pet1.nombre)

pet1.cambiarNombre='BROUSER'
console.log(pet1.nombre)

console.log(pet1.comer())
console.log(pet1.saludar())