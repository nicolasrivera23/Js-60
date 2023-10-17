
function preguntarNombre() {

  //declaro una variable que almacena el nombre que el usuario escribe en el prompt
  let nombre = prompt('Ingrese su nombre:');

  //en el método alert ponemos por parámetro la variable nombre
  alert(nombre);

  //por último mostramos por consola el valor de la variable nombre
  console.log(nombre);
}

function noHaceNada() {
  var hola = 'Bienvenido a Js';
  let numero = 10000;
  const PI = 3.1416;
  alert(nombre2);
  alert(PI);
  PI = 3.11;
  alert(PI);
}

function tipoDatos() {
  let cadena = 'Texto de Ejemplo';
  let numero = 3.1541;
  let esMayor = false;
  let persona = {
    nombre: 'James',
    apellido: 'Gosling',
    edad: 33
  }

  console.log(persona);

}

function may() {

  //crear variable que aloje el texto del párrafo dónde se extraen los datos
  let texto = document.getElementById("struno").innerHTML;
  console.log(texto.toLowerCase());

}

function contar() {
  let contar = document.getElementById("struno").innerHTML;
  console.log(contar.length);
}

function repetir() {
  let texto = document.getElementById("struno").innerHTML;
  console.log(texto.repeat(3));
}

function reemplazar() {
  let texto = document.getElementById("struno").innerHTML;
  console.log(texto.replace("blablabla","Lorem"));
}

function parint() {

  let texto = "15a";
  console.log( parseInt(texto) + 15 );

}

function parFloat() {
  let numero = "3.1416";
  console.log( parseFloat(numero) + 15 );
}

function numb() {
  let bool = false;
  let nro = "10";
  console.log(Number(bool));
}

function oper() {
  let nro1 = 20;
  let nro2 = 8;

  let total = nro1 + nro2;
  console.log("La suma de los dos nros es : " + total);

  total = nro1 - nro2;
  console.log("La resta de los dos nros es : " + total);

  total = nro1 * nro2;
  console.log("La multiplicación de los dos nros es : " + total);

  total = nro1 / nro2;
  console.log("La división de los dos nros es : " + total);

  total = nro1 % nro2;
  console.log("El resto/módulo de la división de los dos nros es : " + total);
}

function opesig() {
  let numero = 18;
  numero += 10;
  console.log(numero);
}

function compar() {
  let mayor = 12 < 10;
  console.log(mayor);

  let mayorigual = 125 >= 124;
  console.log(mayorigual);

  let iguales = '10' == 10;
  console.log("Son iguales 10 string que 10 numerico? : " + iguales);

  let distintos = '10' != 10;
  console.log("son distintos: " + distintos);

  let variable = 10 === 10;
  console.log("Hay igualdad estricta? " + variable);

  let variable2 = '10' === 10;
  console.log("Hay igualdad estricta? " + variable2);

  let variable3 = 10 !== 'sarasa';
  console.log("Hay inigualdad estricta? " + variable);

}

function incdec() {
  let numero = 10;
  console.log("numero++ de 10 : " + numero++);
  let numero2 = 20;
  console.log("++numero de 20 : " + ++numero2);
}

function logic() {
  let nro1 = 12;
  let nro2 = 15;
  let nro3 = 22;

  let resultado = (nro1 < 12) && (nro3 >= 20);
  console.log("Conjunción && : " + resultado);

  resultado = (nro1 < 12) || (nro1 >= 20);
  console.log("Operador || : " + resultado);

  console.log("Operador NOT ! : " + !resultado)

}

function cond() {
  if(5 > 6) {
    alert('Verdadero entro al bloque if');
  } else {
    alert('La condición no se cumplió');
  }
}

function cond2() {
  if(10 > 11) {
    console.log("entro en el if");
  } else if(3 < 2) {
    console.log("entro en el else if");
  } else {
    console.log("entro en el bloque else");
  }
}

function switc() {
  let condicion = 'blue';

  switch(condicion) {
    case 'red':
      console.log("El saco es rojo");
      break;
    case 'blue':
      console.log("El saco es azul");
      break;
    case 'yellow':
      console.log("El saco es amarillo");
      break;
    default:
      console.log("No tengo ese color");
      break;
  }
}

function tern() {
  let numero = 13;

  let resultado = numero >= 13 ? 'Es mayor que 13' : 'Es menor que 13';

  console.log(resultado);
}

function fo() {

  for(let i = 0; i < 15; i++) {
    console.log("El valor de i es : " + i);
  }

}

function wh() {
  let condition = Number(prompt('1. Ver Saldo\n 0. Salir'));

  while(condition != 0) {
    switch(condition){
      case 1:
        alert('Su saldo es de 0.00$');
        condition = 0;
        break;
      default: 
        alert('La opción es incorrecta. Vuelva a elegir');
        break;
    }
    condition = Number(prompt('1. Ver Saldo\n 0. Salir'));
  }
}

function dwh() {

  do {
    var condition = Number(prompt('1. Ver Saldo\n 0. Salir'));

    while(condition != 0) {
      switch(condition) {
        case 1:
          alert('Su saldo es de 0.00$');
          condition = 0;
          break;
        default: 
          alert('La opción es incorrecta. Vuelva a elegir');
          break;
      }
      condition = Number(prompt('1. Ver Saldo\n 0. Salir'));
    }
  } while(condition != 0);



  let age = 35, nombre = "Sarasa", apellido = "sarasa2"; 

}

function fnc() {
  let resultado = 33 + 18;
  //muestro el resultado por consola
  console.log(resultado);
  // el return me devuelve un valor al llamar o invocar a esta función
  return resultado;
}

//declaro una variable suma y le asigno el valor que retorna la función fnc()
let suma = fnc();
console.log("Let suma = " + suma);


function fnc2(a, b) {
  let resultado = a + b;
  return resultado;
}

let suma2 = fnc2(11 , 12);
console.log("Let suma2 = " + suma2);

let suma3 = fnc2(11 , 22);
console.log("Let suma3 = " + suma3);

//definimos una constante y le asignamos el valor de una función flecha
const sumar = (a, b) => a + b;

//llamamos a la constante y le agregamos los parámetros dentro de los paréntesis
console.log("Función Flecha => : " + sumar(11, 22));

function arra() {

  //declaramos array con 5 frutas. Comienza el indice en el elemento 0 = Manzana
  const frutas = ['Manzana', 'Pera', 'Frutilla', 'Kiwi', 'Sandía'];

  console.log("Fruta con indice 2 : " + frutas[2]);
  console.log("funcion at(4) sandía? = " + frutas.at(4))

  console.log("Length de frutas: " + frutas.length);

  frutas.push('Ananá');
  console.log("Length de frutas: " + frutas.length);
  console.log(frutas.at(5));

  frutas.unshift('Melón');
  console.log("Length de frutas: " + frutas.length);
  console.log(frutas.at(0));

  //Tarea utilizar el método pop() y shift()  para eliminar elementos

}


function conc() {
  const precioRemeras = [200 , 300, 100];
  const precioMedias = [100, 175, 600];

  console.log(precioMedias);

  const precio = precioRemeras.concat(precioMedias);

  console.log(precio);

  console.log(precio.join('-'));

}

function spl() {
  const nombres = "Estela, Mija, Elena, Braulio, Víctor";

  let nombresArray = nombres.split(',');

  console.log(nombresArray.length);
  console.log(nombresArray.at(0));
}

function slc() {
  const animales = ["Pato", "Perro", "Gato", "Loro", "Puma"];

  console.log(animales.slice(2, 4));

}

function sor() {
  const animales = ["Pato", "Perro", "Gato", "Loro", "Puma"];

  console.log(animales.sort());

  const numeros = [10, 100, 33, 28, 1000];
  console.log(numeros.sort((a,b) => a - b));

}