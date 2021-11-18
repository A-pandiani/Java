const fernet = 800;
const coca = 200;
const hielo = 200;
const vodka = 700;
const speed = 300;




let respuestaClave = prompt("Quiere fernet o vodka?") 

function sumarFernet(fernet,coca,hielo) {
    const resultado = (fernet + coca + hielo)
    
    return resultado
   
}


function sumarVodkas(vodka,speed,hielo){
 const resultadoUno = (vodka + speed + hielo)
  return resultadoUno
   
}





if(respuestaClave == "fernet" ){
    alert("El total es $"+sumarFernet(fernet,coca,hielo));
}


   

else{ respuestaClave == "vodka"

    alert("El total es $"+sumarVodkas(vodka,coca,hielo));
}