let choice = prompt ("Ingrese 1 = Celsius -> fahrenheit \nIngrese 2 = fahrenheit -> Celsius")


while (choice != 1 && choice != 2) {
    choice = parseInt(prompt ("Por favor elija una de las 2 opciones:\n1 = Celsius -> fahrenheit \n2 = fahrenheit -> Celsius"), 10);
    
}

let temperature = parseInt(prompt ("Ingrese Temperatura"), 10);


while (isNaN(temperature)) {
    temperature = parseInt(prompt ("Valor invalido, por favor ingrese una temperatura."), 10);
    
}

if (choice = 1){
    celToFar()
}
else {
    farToCel()
}


function celToFar (){
    result = temperature * 1.8 + 32; 
    console.log ("La temperatura " + temperature + "C " + "en Fahrenheit es de " + result + "F");
}


function farToCel(){
    result = temperature / 1.8 - 32;
    console.log ("La temperatura " + temperature + "F " + "en Celsius es de " + result + "C");
}

alert("Apreta F12 para ver el Resultado")

