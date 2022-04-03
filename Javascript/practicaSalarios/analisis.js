const salariosCol = colombia.map(
    function(personita){
        return personita.salary;
    }
);

const salariosColSorted = salariosCol.sort(
    function(salaryA, salaryB){
        return salaryA-salaryB
    }
);

function esPar(numeroaVerificar){
    return (numeroaVerificar%2===0);
}

function calcularMediaAritmetica(lista){
   
    const sumaLista=lista.reduce(
        function(valorAcumulado=0, nuevoElemento){
            return valorAcumulado+nuevoElemento;
        }
    );
    const promedioLista=sumaLista/lista.length;
    return promedioLista
}

function medianaSalariosCol(lista){
    const mitad = parseInt(lista.length/2);
    if(esPar(lista.length)){
        const pesonaMitad1 = lista[mitad-1];
        const pesonaMitad2 = lista[mitad];
        const mediana=calcularMediaAritmetica([pesonaMitad1, pesonaMitad2]);
        return mediana 
    }else{
        const pesonaMitad = lista [mitad];
        return pesonaMitad;
    }

}

console.log(
    medianaSalariosCol(salariosColSorted)
)

