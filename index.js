let nombreIngresado   = prompt("Bienvenido! Cual es tu nombre?");
let apellidoIngresado = prompt("Y tu apellido?");

if((nombreIngresado !="") && (apellidoIngresado !="")){
    alert("Bienvenido! "+ nombreIngresado + apellidoIngresado); 
}else{
    alert("Error no ingresaste correctamente identificacion, continua incognito pa :)");
}

let entrada = prompt("Muy bien! Ahora que se tu nombre, te gustaria conocer mas de nosotros?").toUpperCase();

while(entrada != "SI"){
    alert("Uhhh seleccionaste:  " + entrada + " Prueba de nuevo hasta que tu respiesta sea si");

    entrada = prompt("Intenta de nuevo!").toUpperCase();
} 
class viajes {

  constructor(destino, numeroDeViajes) {
    this.destino = destino.toUpperCase();
    this.numeroDeViajes = parseFloat(numeroDeViajes);
    this.vendido = false;
  }
}

let misViajes = [];
let respuesta = "SI";

do {
  let destino = prompt("Cuentame tu lugar favorito en el mundo que ya hayas visitado");
  let numeroDeViajes = prompt("Cuantas veces has ido?");
  const unViaje = new viajes(destino, numeroDeViajes);
  misViajes.push(unViaje);
  console.log(
    "--> La cantidad de viajes en mí lista, es de ",
    misViajes.length
  );

  respuesta = prompt("¿Quieres seguir añadiendo más lugares? SI/NO");

} while (respuesta.toUpperCase() !== "NO");

console.log("--> Esta es la lista de todos los viajes que hice", misViajes);

let suma = 0;

for (const unViaje of misViajes) {
  console.log("--> Los destinos de mis viajes han sido", unViaje);
  suma = suma + unViaje.numeroDeViajes;
}

console.log("--> La suma total de todos mis viajes han sido de", suma);

alert("Gracias por contarnos mas sobre ti. Bienvenido!")

function gracias(){
  alert("Gracias por ponerte en contacto con nosotros!")
}

const btnEnviar = document.getElementById("btnEnviar");
console.log("----> btnEnviar" , btnEnviar);
btnEnviar.addEventListener("click", gracias);

const formulario = document.getElementById("formulario");

function validarFormulario(data){
  console.log("----> Validando formulario", data);
  const hijos = data.childen;
  console.log("--> Que hay dentro de hijos", hijos);

  for (let index = 0; index < 4; index++) {
    const unHijo = hijos[index];
    const valor = unHijo.childen[1].value
    console.log("---> El valor almacenado en el imput" + unHijo.childen[0].innerText + "es" ,{valor});
  }
}
console.log("Los datos son", validarFormulario);
 formulario.addEventListener("submit", (event) => {
  event.preventDefault();
  validarFormulario(event.target);
 });