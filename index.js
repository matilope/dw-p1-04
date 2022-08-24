let indexEdadG = 0;
let indexEdadM = 0;
let indexEdadH = 0;
let acumuladorEdad = null;
let acumuladorEdadMujeres = null;
let acumuladorEdadHombres = null;


let indexEdadMenorM = 0;
let indexEdadMenorH = 0;

let max=Number.NEGATIVE_INFINITY;
let min=Number.POSITIVE_INFINITY;

do {

    // Se pide al pe** asi que no hace falta guardarla en variable la ciudad?

    prompt("Ingresa tu ciudad");

    let sexo;
    let edad;
    
    do{
       sexo = prompt("Ingresa tu sexo (Mujer o Hombre)").toLowerCase();
    }while(!(sexo=="mujer"||sexo=="hombre"));

    do{
        edad = parseInt(prompt("Ingresa tu edad"));
    }while(!(edad>0&&edad<110));

    indexEdadG++;
    acumuladorEdad += edad;

    if(sexo==="mujer"){
        indexEdadM++;
        acumuladorEdadMujeres+=edad;
        if(edad<21){
            indexEdadMenorM++;
        }
        if(edad>max){
            max=edad;
        }
    }
    
    if(sexo==="hombre"){
        indexEdadH++;
        acumuladorEdadHombres+=edad;
        if(edad>21){
            indexEdadMenorH++;
        }
        if(edad<min){
            min=edad;
        }
    }

  } while (confirm("¿Queres ingresar mas datos?"));



/* Promedio edades */

console.log("El promedio general de la edad  es: " + acumuladorEdad/indexEdadG);

console.log("El promedio de la edad de Mujeres es: " + acumuladorEdadMujeres/indexEdadM);

console.log("El promedio de la edad de Hombres es: " + acumuladorEdadHombres/indexEdadH);


/* Porcentaje mujeres y hombres */

console.log("El porcentaje de mujeres menores de 21 es: " + (indexEdadMenorM/indexEdadM)*100 + "%");

console.log("El porcentaje de hombres mayores de 21 es: " + (indexEdadMenorH/indexEdadH)*100 + "%");


/* La mayor edad ingresada de las mujeres y la menor edad ingresada de los hombres */

console.log("La mayor edad ingresada de las mujeres es: " + max);

console.log("La menor edad ingresada de los hombres es: " + min);
