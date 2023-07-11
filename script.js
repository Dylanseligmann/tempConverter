let choice = prompt("Ingrese 1 = Celsius -> Fahrenheit \nIngrese 2 = Fahrenheit -> Celsius")


while (choice != 1 && choice != 2){
    choice = prompt ("Por favor seleccione una de las 2 opciones:\n1 = Celsius -> Fahrenheit \n2 = Fahrenheit -> Celsius");
    
}

let temperature = prompt ("Ingrese Temperatura");


while (isNaN(temperature)) {
    temperature = prompt ("Valor invalido, por favor ingrese una temperatura.");
    
}

function celToFar (){
    const result = (temperature * 1.8) + 32; 
    alert ("La temperatura " + temperature + "°C " + "en Fahrenheit es de " + result + "°F");
}


function farToCel(){
    const result = (temperature - 32) / 1.8;
    alert ("La temperatura " + temperature + "°F " + "en Celsius es de " + result + "°C");
}


if (choice == 1){
    celToFar()
}
else {
    farToCel()
}
