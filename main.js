const fernet = 800;
const coca = 200;
const hielo = 200;
const vodka = 700;
const speed = 300;
const gin = 1500;
const sprite = 200;
const envio = 80;


let respuestaClave = prompt("Quiere fernet , vodka o gin?") 

function sumarFernet(fernet,coca,hielo) {
    const resultado = (fernet + coca + hielo)
    
    return resultado
   
}


function sumarVodkas(vodka,speed,hielo){
 const resultadoUno = (vodka + speed + hielo)
  return resultadoUno
   
}

function sumarGin(gin,sprite,hielo){
    const resultadoGin = (gin + sprite + hielo)
    return resultadoGin
}

function sumarEnvio(envio){
    const sumaEnvio =(envio)
    return sumaEnvio
}



if(respuestaClave == "fernet" ){
    alert("El total es $"+sumarFernet(fernet,coca,hielo));
    let respuestaEnvio =prompt("¿Le gustaria añadir envio?")
    if(respuestaEnvio == "si"){
        alert("Le quedaria $"+ parseInt(sumarFernet(fernet,coca,hielo)+ sumarEnvio(envio)));
    }else{alert("Bueno, entonces serian: $" + sumarFernet(fernet,coca,hielo));}

}


   

if(respuestaClave == "vodka"){
    alert("El total es $"+sumarVodkas(vodka,speed,hielo));
    let respuestaEnvio =prompt("¿Le gustaria añadir envio?")
    if(respuestaEnvio == "si"){
        alert("Le quedaria $"+ parseInt(sumarVodkas(vodka,speed,hielo)+ sumarEnvio(envio)));
    }else{alert("Bueno, entonces serian: $" + sumarVodkas(vodka,speed,hielo));}

}

    



if(respuestaClave == "gin"){
    alert("El total es $"+sumarGin(gin,sprite,hielo));
    let respuestaEnvio =prompt("¿Le gustaria añadir envio?")
    if(respuestaEnvio == "si"){
        alert("Le quedaria $"+ parseInt(sumarGin(gin,sprite,hielo)+ sumarEnvio(envio)));
    }else{alert("Bueno, entonces serian: $" + sumarGin(gin,sprite,hielo));}

}