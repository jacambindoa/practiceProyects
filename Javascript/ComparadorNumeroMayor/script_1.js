function numeroMayor(){
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
    var mostrar = document.getElementById("mostrarRespuesta")

    if(num1 && num2){
        if (num1>=num2){
            if (num1==num2){
                // alert("Los numeros son iguales")
                mostrar.innerHTML += ("Los numeros son iguales")
            }else{
                // alert("El primer numero es mayor")
                mostrar.innerHTML += ("El primer numero es mayor")
            }
        }else{
            // alert("El segundo numero es mayor")
            mostrar.innerHTML += ("El segundo numero es mayor")
        }
    }else{
        alert("Ingresa informacion en todos los campos")
    }
}

