//ARRAY DE BEBIDAS ORDENADO POR CCL DE MAYOR A MENOR//

const bebidas =[
    {id: "fernet", value:1400, ccl:1000},{id: "vodka", value:1300, ccl:950}, {id:"gin", value: 1500, ccl:900}
];
console.log(bebidas.sort(function(a,b){if(a.ccl < b.ccl){return 1;}else if(a.ccl > b.ccl){return -1;}}));
//ARRAY DE TABACO ORDENADO POR VALOR DE MENOR A MAYOR//
const tabaco =[
    {name: "marlboro", value:280,size:20},{name:"philips", value:290,size:20},{name:"lucky", value: 170, size:10}
];
console.log(tabaco.sort(function(c,d){
    if(c.value > d.value){return 1;}else if(c.value < d.value){return-1}
}));