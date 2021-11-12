let primerNum = parseInt(prompt("primer numero: "));
let segundoNum = parseInt(prompt("segundo numero: "));
let operacion = prompt("que operacion deseas hacer?");
function calculadora(primerNum, segundoNum, operacion) {
    switch (operacion) {
        case "suma":
            return primerNum + segundoNum;
            break;
        case "resta":
            return primerNum - segundoNum;
            break;
        case "multiplicacion":
            return primerNum * segundoNum;
            break;
        case "division":
            return primerNum / segundoNum;
            break;
        
    }
}



alert(calculadora( primerNum, segundoNum,operacion));
