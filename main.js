

let tablaIngreso = parseInt(prompt("Ingrese el numero de tabla que desea ver"));
for (let i = 0; i <= 10; i++) {
    console.log(tablaIngreso + " x " + i + "=" + tablaIngreso*i);
    
}
let palabraClaveIngresada = prompt("Ingrese la contraseña")

let intentos = 1;
const contraseña = "admin1234"
while (palabraClaveIngresada != contraseña)  {
    palabraClaveIngresada = prompt(" ERROR: Ingrese la contraseña");
    intentos++;
   
}
alert("Bienvenido, intentos realizados: " + intentos);