const lista=[
    1,
    2,
    3,
    4,
    1,
    2,
    3,
    1,
    2,
    3,
    2,
    3,
    2,
    2,
    2,
];



function calcularMediaAritmetica(lista){
    // let sumaLista=0;
    // for(let i=0; i<lista.length; i++){
    //     sumaLista=sumaLista+lista[i];
    // }

    const sumaLista=lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );

    const promedioLista=sumaLista/lista.length;
    return promedioLista

}

const mitadLista = parseInt(lista.length/2);

function esPar(numerito){
    if (numerito%2===0){
        return true
    }else{
        return false
    }
}

let mediana;

if (esPar(lista.length)){
    const elemento1 = lista[mitadLista];
    const elemento2 = lista[mitadLista-1];

    const promedioElemento1y2 = calcularMediaAritmetica([elemento1, elemento2]);

    mediana = promedioElemento1y2;

} else {
    mediana = lista[mitadLista]
}


const listaCount = {};

lista.map(
    function(elemento){
        if (listaCount[elemento]){
            listaCount[elemento] +=1;
        } else {
            listaCount[elemento] = 1;
        }
    }
);

const listaArray = Object.entries(listaCount).sort(
    function (elementoA, elementoB) {
        return elementoA[1] - elementoB [1];
    }
);

const moda = listaArray[listaArray.length-1];